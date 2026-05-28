"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {z} from "zod"




const schema = z.object({
    name:z.string().trim().min(1,{error:"Nome invalido"}),
    email:z.email({error:"Email invalido"})
})

export const createUser = async (prevState:any, formData:FormData)=>{
    const formValues = {
        name:formData.get("name")?.toString(),
        email:formData.get("email")?.toString()
    }


    const result = schema.safeParse(formValues)


    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }

    
    try{
       await prisma.user.create({
            data:{
                name:formValues.name!,
                email:formValues.email!
            }
        }) 
    }catch(error){
        return {
            error:{
                name:"",
                email:"",
                serverError:"Erro ao cadastrar o usuario"
            }
        }
    }

    redirect("/")
}




























/*"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {z} from "zod";


//validacao dos dados do formulario usando zod
const schema = z.object({
    name:z.string().trim().min(1,{error:"Nome invalido"}),
    email:z.email({error:"Email invalido"})
})


//funcao para criar usuario
export  const createUser = async (prevState:any,formData:FormData)=>{
    const formValues = {
        name : formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
    }


    const result = schema.safeParse(formValues)

    if(!result.success){
        return{
            errors:result.error.flatten().fieldErrors,
            formValues
        }
    }


    try{

        await prisma.user.create({
        data:{
            name: formValues.name!,
            email: formValues.email!
        },
        
    });
    }catch(error){
        return{
            errors:{
                name:"",
                email:"",
                serverError:"Erro ao criar usuario",
            },
            values:formValues
        }
    }
   
    redirect("/users")

}*/