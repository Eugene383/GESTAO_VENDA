"use client";
        
import { Loader2, Pencil} from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogTrigger,  DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { updateClient } from '@/app/actions/update-client'
import {  useActionState } from 'react';
import { Button } from '../ui/button';

export default function UpdateClientForm({client}:{client:any}){
    const [state,action,peding ] = useActionState(updateClient,null)
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
                        <Input type="hidden" defaultValue={client.id}  name="id"/>
                        <fieldset className="space-y-1">
                            <Label htmlFor="">Nome do produto</Label>
                            <Input placeholder="nome do produto Ex: computador" defaultValue={client.nome}  name="nome"/>
                            {
                                state?.error?.nome&&(
                                    <p className="text-sm text-red-500">{state.error.nome}</p>
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