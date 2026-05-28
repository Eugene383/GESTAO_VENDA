"use client";
        
import { Loader2, Pencil} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogTrigger,  DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { updateProduct } from '@/app/actions/update-product';
import {  useActionState } from 'react';
import { Button } from '../ui/button';

export default function UpdateProductForm({product}:{product:any}){
    const [state,action,peding ] = useActionState(updateProduct,null)
    return(
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline"><Pencil/>Editar</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Atualizar produto</DialogTitle>
                <DialogDescription>
                    {state?.erro&&(
                        <span className="text-sm text-red-500">{state.erro}</span>
                    )}
                </DialogDescription>
               
              </DialogHeader>
               <form action={action}   className=" space-y-2 ">
                        <Input type="hidden" defaultValue={product.id}  name="id"/>
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Nome do produto</Label>
                            <Input placeholder="nome do produto Ex: computador" defaultValue={product.nome}  name="nome"/>
                            {
                                state?.error?.nome&&(
                                    <p className="text-sm text-red-500">{state.error.nome}</p>
                                )
                            }
                        </fieldset>     
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Preço do produto</Label>
                            <Input placeholder="preço do produto Ex:20.000" defaultValue={product.preco} name="preco"/>
                             {
                                state?.error?.preco&&(
                                    <p className="text-sm text-red-500">{state.error.preco}</p>
                                )
                            }
                        </fieldset> 
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Stock do produto</Label>
                            <Input placeholder="stock do produto Ex:20" defaultValue={product.stoque} name="quantidade"/>
                            {
                                state?.error?.quantidade&&(
                                    <p className="text-sm text-red-500">{state.error.quantidade}</p>
                                )
                            }
                        </fieldset>  
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Categoria do produto</Label>
                            <select name="categoria" className="h-10 rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-100 outline-none focus:border-slate-500">
                                <option value={product.categoria.id}>{product.categoria.descricao} </option>
                            </select>
                        </fieldset> 
                        <fieldset className="space-y-1"> 
                            <Button disabled={peding} >{peding?(<Loader2 className='animate-spin'/>):"Atualizar"} </Button>       
                        </fieldset>    
                </form>
            </DialogContent>
        </Dialog>
    )    
}