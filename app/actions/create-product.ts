"use server";

import {redirect} from "next/navigation";
import {z} from "zod";
import  {prisma}  from "@/lib/prisma";


const schema = z.object({
    nome:z.string().trim().min(4,
        {message:"Nome invalido"}),

    preco:z.coerce.number().min(2,
        {message:"Preço invalido"}),

    quantidade:z.coerce.number().int().min(1,
        {message:"Quantidade invalida"}),

    categoria:z.coerce.number().int().min(1,
        {message:"Categoria invalida"}),
});

export const createProduct = async (prevState:any, formData:FormData)=>{
    const formValues = {
        nome:formData.get("nome")?.toString(),
        preco:formData.get("preco"),
        quantidade:formData.get("quantidade"),
        categoria:formData.get("categoria")
    }

    const result = schema.safeParse(formValues)

    if(!result.success){
        return{
            error:result.error.flatten().fieldErrors,
            formValues
        }
    }

    console.log(formValues)
 
    try{
        await prisma.produto.create({
            data:{
                nome:result.data.nome,
                preco:result.data.preco,
                stoque:result.data.quantidade,
                categoriaId:result.data.categoria
            }
            
        })
    }catch(Error){
        return{
            erro:"Erro ao adicionar o produto"
        }
    }

    redirect("/dashboard/products")
}