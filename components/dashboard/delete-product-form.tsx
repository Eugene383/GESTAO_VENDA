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
import { Input } from '../ui/input';
import { deleteProduct } from '@/app/actions/delete-product';
import {  useActionState } from 'react';
import { Button } from '../ui/button';

export default function DeleteProductForm({productId}:{productId:any}){
    const [state,action,peding ] = useActionState(deleteProduct,null)
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline"><Trash/>Deletar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deletar produto</AlertDialogTitle>
                    <AlertDialogDescription>
                        Tens certeza,desejas eliminar o produto?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <form action={action}   className=" space-y-2 ">
                        <Input type="hidden" defaultValue={productId}  name="id"/>
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