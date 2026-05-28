"use client"

import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useActionState } from "react";
import {createClient} from "@/app/actions/create-client"

export default function CreateClientForm(){
    const [state,action,peding] = useActionState(createClient,null)

    return(
        <Dialog>
            <DialogTrigger className="w-full flex  max-w-40 h-8 rounded-md justify-center items-center bg-white text-slate-950 hover:bg-slate-200 border border-slate-800 shadow-sm gap-2">
                <Plus className="w-4 h-4" />
                Adicionar cliente
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadastro de usuario</DialogTitle>
                    <form action={action} className="space-y-2">
                        <fieldset className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" placeholder="Digite o seu nome" name="name" required/>
                            {state?.error?.nome && (
                                <p className="text-red-800">{state.error.nome}</p>
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