"use client";
        
import { Loader2, Pencil} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogTrigger,  DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { updateSell } from '@/app/actions/update-sell';
import {  useActionState } from 'react';
import { Button } from './ui/button';
import { formatPrice } from '@/utils';


export default function UpdateSellForm({venda}:{venda:any}){
    const [state,action,peding ] = useActionState(updateSell,null)
    return(
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline"><Pencil/>Editar</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Atualizar venda</DialogTitle>
                <DialogDescription>
                    {state?.erro&&(
                        <span className="text-sm text-red-500">{state.erro}</span>
                    )}
                </DialogDescription>
               
              </DialogHeader>
               <form action={action}   className=" space-y-2 ">
                        <Input type="hidden" defaultValue={venda.id}  name="id"/>
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Venda total</Label>
                            <Input placeholder="nome do produto Ex: computador" defaultValue={formatPrice(venda.total)}  name="nome"/>
                            {
                                state?.error?.total&&(
                                    <p className="text-sm text-red-500">{state.error.total}</p>
                                )
                            }
                        </fieldset>     
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Cliente</Label>
                            <Input placeholder="preço do produto Ex:20.000" defaultValue={venda.cliente.nome} name="preco"/>
                             {
                                state?.error?.clienteId&&(
                                    <p className="text-sm text-yellow-500">{state.error.clienteId}</p>
                                )
                            }
                        </fieldset> 
                        <fieldset className="space-y-1"> 
                            <Button disabled={peding} >{peding?(<Loader2 className='animate-spin'/>):"Atualizar"} </Button>       
                        </fieldset>    
                </form>
            </DialogContent>
        </Dialog>
    )    
}