"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, PencilLineIcon} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useActionState } from "react";
import { updateUser } from "@/app/actions/update-user";


export default function UpdateUserFrom({user}:any){
    const [state,action,peding] = useActionState(updateUser,null)
    return(
        <Dialog>
            <DialogTrigger> <PencilLineIcon/> </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Atualização do usuario</DialogTitle>
                    <form action={action} className="space-y-2">
                        <Input type="hidden" name="id" value={user.id}/>
                        <fieldset className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" placeholder="Digite o seu nome" name="name" defaultValue={user.name} required/>
                            {state?.error.name &&(
                                <p className="text-red-800"> {state.error.name} </p>
                            )}
                        </fieldset>
                        <fieldset className="space-y-2">
                            <Label>Email</Label>
                            <Input type="email" placeholder="Digite o seu email" name="email" defaultValue={user.email} required />
                            {state?.error.name &&(
                                <p className="text-red-800"> {state.error.email} </p>
                            )}
                        </fieldset>
                        <fieldset>
                            <Button  disabled={peding} >  {peding ? (<Loader2 className="animate-spin"/>):"Atualizar usuario "}  </Button>
                        </fieldset>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}