"use server";

import {redirect} from "next/navigation";
import {z} from "zod";
import  {prisma}  from "@/lib/prisma";


const schemaSell = z.object({
    id:z.coerce.number().min(1,
        {message:"Id invalido"}),

    total:z.coerce.number().min(2,
        {message:"Valor total invalido"}),

    clienteId:z.coerce.number().int().min(1,
        {message:"Id  invalido"}),
    
});

export const updateSell = async (prevState:any, formData:FormData)=>{
    const formValues = {
        id:formData.get("id"),
        total:formData.get("total"),
        clienteId:formData.get("clienteId"),
        
    }

    const result = schemaSell.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }
 
    try{
        await prisma.venda.update({
            where:{
                id:result.data.id!
            },
            data:{
                total:result.data.total,
                clienteId:result.data.clienteId,
            }
        })
        
    }catch(Error){
        return{
            erro:"Erro ao atualizar venda"
        }
    }

    redirect("/dashboard/vendas")
}