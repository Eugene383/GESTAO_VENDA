"use client";

import { Loader2, Plus} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogTrigger,  DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { createProduct } from '@/app/actions/create-product';
import { useActionState } from 'react';
import { Button } from '../ui/button';

export default function FormProduct({categories}:{categories:any}){
    const [state,action,peding ] = useActionState(createProduct,null)
    
    return(
        <Dialog >
            <DialogTrigger className="w-full flex  max-w-40 h-8 rounded-md justify-center items-center bg-white text-slate-950 hover:bg-slate-200 border border-slate-800 shadow-sm gap-2">
                <Plus className="w-4 h-4" />
                Adicionar produto
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Adicionar produto</DialogTitle>
                <DialogDescription>
                    {state?.erro&&(
                        <span className="text-sm text-red-500">{state.erro}</span>
                    )}
                </DialogDescription>
                <form action={action}   className=" space-y-2 ">
                    
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Nome do produto</Label>
                            <Input placeholder="nome do produto Ex: computador" name="nome"/>
                            {
                                state?.error?.nome&&(
                                    <p className="text-sm text-red-500">{state.error.nome}</p>
                                )
                            }
                        </fieldset>     
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Preço do produto</Label>
                            <Input placeholder="preço do produto Ex:20.000" name="preco"/>
                             {
                                state?.error?.preco&&(
                                    <p className="text-sm text-red-500">{state.error.preco}</p>
                                )
                            }
                        </fieldset>  
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Stock do produto</Label>
                            <Input placeholder="stock do produto Ex:20" name="quantidade"/>
                            {
                                state?.error?.quantidade&&(
                                    <p className="text-sm text-red-500">{state.error.quantidade}</p>
                                )
                            }
                        </fieldset>  
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Categoria do produto</Label>
                            <select name="categoria" className="h-10 rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-100 outline-none focus:border-slate-500">
                                {
                                    categories.map((category:any)=>(
                                        <option key={category.id} value={category.id} >{category.descricao}</option>
                                    ))
                                }
                            </select>
                        </fieldset> 
                        <fieldset className="space-y-1"> 
                            <Button disabled={peding} >{peding?(<Loader2 className='animate-spin'/>):"Adicionar"} </Button>       
                        </fieldset>    
                </form>
              </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}