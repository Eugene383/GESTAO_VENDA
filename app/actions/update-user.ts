"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {z} from "zod"


const schema = z.object({
    name:z.string().trim().min(1,{error:"Nome invalido"}),
    email:z.email({error:"Email invalido"})
})

export const updateUser = async(prevState:any,formData:FormData)=>{

    const formValues = {
        id:Number(formData.get("id")),
        name:formData.get("name")?.toString(),
        email:formData.get("email")?.toString()
    }
    

    const result = schema.safeParse(formValues)

    if(!result.success){
        return{
            error:{
                error:result.error.flatten().fieldErrors,
                formValues
            }
        }
    }



    try{
        await prisma.user.update({
            where:{
                id:formValues.id
            },
            data:{
                name:formValues.name, 
                email:formValues.email
            }

        });

    }catch(error){
        return{
            error:{
                name:"",
                email:"",
                serverError:"Erro ao atualizar usuario"
            }
        }
    }
    
    redirect("/")
}