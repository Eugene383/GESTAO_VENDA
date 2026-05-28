"use server";

import {z} from "zod";
import {prisma} from "@/lib/prisma"
import { redirect } from "next/navigation";


const schemaSell = z.object({
    id:z.coerce.number().int().min(1,{message:"Id invalido"})
})

export const deleteSell = async (prevState:any,formData:FormData)=>{
    const formValues = {id: formData.get("id")}

    const result = schemaSell.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }

    try{
        await prisma.venda.delete({
            where:{
                id:result.data.id
            }
        })
    }catch(erro){
        return{
            message:"Erro ao excluir venda",
        }
    }

    redirect("/dashboard/vendas")
}