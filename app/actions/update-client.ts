"use server";

import {redirect} from "next/navigation";
import {z} from "zod";
import  {prisma}  from "@/lib/prisma";


const schemaClient = z.object({
    id:z.coerce.number().min(1,
        {message:"Id invalido"}),
    nome:z.string().trim().min(4,
        {message:"Nome invalido"}),
});

export const updateClient = async (prevState:any, formData:FormData)=>{
    const formValues = {
        id:formData.get("id"),
        nome:formData.get("nome")?.toString(),
    }

    const result = schemaClient.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }
 
    try{
        await prisma.cliente.update({
            where:{
                id:result.data.id!
            },
            data:{
                nome:result.data.nome,
            }
        })
        
    }catch(Error){
        return{
            erro:"Erro ao adicionar cliente"
        }
    }
    console.log(formValues)
    redirect("/dashboard/clients")
}