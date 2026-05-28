"use client"

import { createUser } from "@/app/actions/create-user";
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useActionState } from "react";

export default function CreateUserForm(){
    const [state,action,peding] = useActionState(createUser,null)

    return(
        <Dialog>
            <DialogTrigger ><Plus/></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadastro de usuario</DialogTitle>
                    <form action={action} className="space-y-2">
                        <fieldset className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" placeholder="Digite o seu nome" name="name" required/>
                            {state?.error.name && (
                                <p className="text-red-800">{state.error.name}</p>
                            )}
                        </fieldset>
                        <fieldset className="space-y-2">
                            <Label>Email</Label>
                            <Input type="email" placeholder="Digite o seu email" name="email" required />
                            {state?.error.email && (
                                <p className="text-red-800"> {state.error.email} </p>
                            )}
                        </fieldset>
                        <fieldset>
                            <Button  disabled={peding} >{peding ? (<Loader2 className="animate-spin"/>):"Cadastrar usuario"}  </Button>
                        </fieldset>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog> 
    )
}