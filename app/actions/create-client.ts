"use server"

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import {z} from "zod";

const SchemaClient = z.object({
    nome:z.string().trim().min(4,{message:"Deve ter no minimo 4 caracteres"})
})

export const createClient = async (prevState:any,formData:FormData)=>{
    const formValues = {
        nome:formData.get("name")?.toString()
    }

    const result = SchemaClient.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }

    try{
        await prisma.cliente.create({
            data:{
                nome:result.data.nome
            }
        })
    }catch(erro){
        return{
            erro:"Erro ao cadastrar cliente"
        }
    }

    redirect("/dashboard/clients")
}