"use server";

import {redirect} from "next/navigation";
import {z} from "zod";
import  {prisma}  from "@/lib/prisma";


const schema = z.object({
    id:z.coerce.number().min(1,
        {message:"Id invalido"}),

    nome:z.string().trim().min(4,
        {message:"Nome invalido"}),

    preco:z.coerce.number().min(2,
        {message:"Preço invalido"}),

    quantidade:z.coerce.number().int().min(1,
        {message:"Quantidade invalida"}),

    categoria:z.coerce.number().int().min(1,
        {message:"Categoria invalida"}),
});

export const updateProduct = async (prevState:any, formData:FormData)=>{
    const formValues = {
        id:formData.get("id"),
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
 
    try{
        await prisma.produto.update({
            where:{
                id:result.data.id!
            },
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
console.log(result)
    redirect("/dashboard/products")
}