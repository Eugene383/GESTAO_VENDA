"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2,Trash2} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { deleteClient } from "@/app/actions/delete-client";
import { useActionState} from "react";


export default function DeleteClientForm({client}:any){
    const [state, action , peding] = useActionState(deleteClient,null)
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><Trash2/>Eliminar</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Deleção de cliente</DialogTitle>
                    <form action={action} className="space-y-2">
                        <Input type="hidden" name="id" defaultValue={client.id}/>
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