"use server";
import {prisma} from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z} from "zod";

const schemaSell = z.object({
    clienteId:z.coerce.number().min(1,{message:"Minimo 1 numero"}),
    usuarioId:z.coerce.string().min(1,{message:"Minimo 1 numero"}),
    total:z.coerce.number().min(2,{message:"Minimo 2 numeros"})
})

export const createSell = async  (prevState:any, formData:FormData)=>{

    const formValues ={
        usuarioId:formData.get("usuarioId"),
        clienteId:formData.get("clienteId"),
        total:formData.get("tot")
    }

    const result = schemaSell.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }


    try{

        await prisma.venda.create({
            data:{
                clienteId:result.data.clienteId,
                usuarioId:result.data.usuarioId,
                total:result.data.total
            }
        })

    }catch(erro){
        return {
            erro:"Erro ao cadastrar"
        }
    }

    redirect("/dashboard/vendas/")
}