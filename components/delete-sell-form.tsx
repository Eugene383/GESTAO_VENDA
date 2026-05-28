"use client";
        
import { Loader2, Trash, } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { deleteSell } from '@/app/actions/delete-sell';
import {  useActionState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';




export default function DeleteSellForm({vendaId}:{vendaId:number}){
    const [state,action,peding ] = useActionState(deleteSell,null)
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline"><Trash/>Deletar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deletar venda</AlertDialogTitle>
                    <AlertDialogDescription>
                        Tens certeza,desejas eliminar venda?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <form action={action}   className=" space-y-2 ">
                        <Input type="hidden" defaultValue={vendaId}  name="id"/>
                        <fieldset className="space-x-1"> 
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction type='submit' disabled={peding}>{peding?(<Loader2 className='animate-spin'/>):"Deletar"}  </AlertDialogAction>      
                        </fieldset>    
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>   
        </AlertDialog>
    )    
}