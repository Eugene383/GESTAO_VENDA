"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

import {
  Mail,
  Lock,
  Eye,
  ArrowRight,

  
} from 'lucide-react';


export default function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Este comando envia os dados diretamente para o authorize() no route.ts
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Impede o reload da página para podermos tratar o erro
    });

     if (result?.error) {
      alert("Email ou senha incorretos");
    } else {
      router.push("/dashboard"); // Redireciona após sucesso
      router.refresh();
    }
  };

    return(
        <form  onSubmit={handleSubmit} className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-900 ">
            <fieldset className="min-h-screen flex items-center justify-center">
                <div className="flex items-center justify-center  px-6 py-12 lg:px-16">
                    
                  <Card className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)]">
                    <CardContent className="px-8 py-10">
                        <div className="mb-8">
                            
                            <h2 className="text-3xl font-semibold text-slate-950">Bem-vindo de volta</h2>
                            <p className="mt-3 text-sm text-slate-500">
                              Acesse sua conta para gerenciar seu ecossistema.
                            </p>
                        </div>

                        <fieldset className="space-y-6">
                            <fieldset className="space-y-2">
                                <Label className="text-slate-700">E-mail Corporativo</Label>
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <Input
                                      type="email"
                                      placeholder="nome@empresa.com"
                                       onChange={(e) => setEmail(e.target.value)} className={` pl-10 `}
                                    />
                                    
                                </div>
                            </fieldset>

                            <fieldset className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label className="text-slate-700">Senha</Label>
                                    <button type="button" className="text-sm font-medium text-sky-600 transition hover:text-sky-700">
                                      Esqueceu a senha?
                                    </button>
                                </div>
                                <div className="relative">
                                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <Input type="password" placeholder="•••••••• ••••"  className={` pl-10 pr-10 `}  onChange={(e) => setPassword(e.target.value)} />
                                    <Eye className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    
                                </div>
                            </fieldset>

                            <Label className="inline-flex items-center gap-2 text-sm text-slate-600">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                                Lembrar de mim por 30 dias
                            </Label>

                            <Button className="w-full justify-center gap-2 bg-slate-950 text-white hover:bg-slate-900 h-12">
                                Entrar na Plataforma
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </fieldset>
                    </CardContent>
                    <button type="button" className="text-sm font-medium text-sky-600 transition hover:text-sky-700">
                        <Link href={"sign-up"}>Não tem uma conta? Cadastre-se</Link>
                    </button>
                  </Card>
                </div>
            </fieldset>
        </form>
    )
}