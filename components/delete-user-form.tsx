"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2,Trash2} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { deleteUser } from "@/app/actions/delete-user";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";



export default function DeleteUserForm({user}:any){

    const [state, action , peding] = useActionState(deleteUser,null)
    useEffect(()=>{
        if(!state) return;
        if(state.success){
            toast.success(state.message)
        }else{
            toast.error(state.message)
        }
    },[state])
    return(
        <Dialog>
            <DialogTrigger> <Trash2/> </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Deleção de usuario</DialogTitle>
                    <form action={action} className="space-y-2">
                        <Input type="hidden" name="id" defaultValue={user.id}/>
                        <Label>Tens certeza que desejas excluir?</Label>
                        <fieldset>
                            <Button  disabled={peding} >  {peding ? (<Loader2 className="animate-spin"/>):"Confirma "}  </Button>
                        </fieldset>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}