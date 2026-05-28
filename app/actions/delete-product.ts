"use server";

import {z} from "zod";
import {prisma} from "@/lib/prisma"
import { redirect } from "next/navigation";


const schema = z.object({
    id:z.coerce.number().int().min(1,{message:"Id invalido"})
})

export const deleteProduct = async (prevState:any,formData:FormData)=>{
    const formValues = {id: formData.get("id")}

    const result = schema.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }

    try{
        await prisma.produto.delete({
            where:{
                id:result.data.id
            }
        })
    }catch(erro){
        return{
            message:"Erro ao excluir usuário",
        }
    }

    redirect("/dashboard/products")
}