"use server";

import {prisma} from "@/lib/prisma";
import { redirect } from "next/navigation";
import {z} from "zod"


const schema = z.object({
    id:z.number().int().positive({error:"Id invalido"})
})


export const deleteUser = async(prevState:any,formData:FormData)=>{

    const formValues = {
        id:Number(formData.get("id")),
    }

    const validated = schema.safeParse(formValues)

    if(!validated.success){
        return{
            success:false,
            message:"Id do usuario é invalido"
        }
    }
    
    try{
        await prisma.user.delete({
            where:{
                id:re.id
            },
        });
    }catch(error){
        return{
            success:false,
            message:"Erro ao excluír usuario"
        }
    }
 
    redirect("/")
}