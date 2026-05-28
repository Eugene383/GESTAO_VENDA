"use client"

import { Button } from "./ui/button"
import { Dialog, DialogContent,DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import { useActionState } from "react";
import {createSell} from "@/app/actions/create-sell";
import { useSession } from "next-auth/react";



type Cliente = {
    id: number,
    nome: string,
}
    
type Clientes = Cliente[]

export default function CreateSellForm({clientes}:{clientes: Clientes}){
    const {data:session} = useSession()
    const [state,action,peding] = useActionState(createSell,null)

    return(
        <Dialog>
            <DialogTrigger className="w-full flex  max-w-40 h-8 rounded-md justify-center items-center bg-white text-slate-950 hover:bg-slate-200 border border-slate-800 shadow-sm gap-2">
                <Plus className="w-4 h-4" />
                Adicionar venda
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Cadastrar venda</DialogTitle>
                    {
                        state?.erro&&(
                            <p className="text-red-800">{state.erro}</p>
                        )
                    }
                    <form action={action} className="space-y-2">
                        <fieldset className="space-y-2">
                            <Label htmlFor="tot">Valor total</Label>
                            <Input type="number" placeholder="Digite o valor total" name="tot" min="50" required/>
                            {state?.error?.total && (
                                <p className="text-red-800">{state.error.total}</p>
                            )}
                        </fieldset>
                         <fieldset className="space-y-2">
                            <Label htmlFor="cliente">Cliente</Label>
                           <select name="clienteId" id="cliente" className="h-10 rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-100 outline-none focus:border-slate-500">
                            {clientes.map((cliente:any)=>(
                                <option key={cliente.id} value={cliente.id}> {cliente.nome}</option>
                            ))

                            }
                                
                           </select>
                        </fieldset>
                         <fieldset className="space-y-2">
                            <Input type="hidden" name="usuarioId" value={session?.user?.id}  className="h-10 rounded-lg border border-slate-800 bg-slate-950 px-3 text-sm text-slate-100 outline-none focus:border-slate-500"/>
                        </fieldset>
                        <fieldset>
                            <Button  disabled={peding} >{peding ? (<Loader2 className="animate-spin"/>):"Cadastrar venda"}  </Button>
                        </fieldset>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog> 
    )
}