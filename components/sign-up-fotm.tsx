"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Lock,
  Eye,
  ArrowRight,
  User,
  Phone,
} from 'lucide-react';
export default function SignUpForm(){
    return(
        <form className="min-h-screen bg-gradient-to-br  from-slate-950 via-slate-900 to-slate-950 text-slate-900">
            <div className="flex items-center justify-center  px-6 py-12 lg:px-16">
              <Card className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.35)]">
                <CardContent className="px-8 py-10">
                  <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-slate-950">Criar conta</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-slate-700">Nome</Label>
                            <div className="relative">
                                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <Input
                                  type="text"
                                  placeholder="João"
                                  className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-slate-700">Sobrenome</Label>
                            <div className="relative">
                                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                  <Input
                                    type="text"
                                    placeholder="Silva"
                                    className="pl-10"
                                  />
                            </div>
                        </div>
                    </div>


                    <div className="space-y-2">
                        <Label className="text-slate-700">Telefone</Label>
                        <div className="relative">
                            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                              type="tel"
                              placeholder="+55 (11) 99999-9999"
                              className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-slate-700">E-mail Corporativo</Label>
                          <div className="relative">
                            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                              type="email"
                              placeholder="joao.silva@empresa.com"
                              className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-slate-700">Senha</Label>
                        <div className="relative">
                            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                              type="password"
                              placeholder="•••••••• ••••"
                              className="pl-10 pr-10"
                            />
                            <Eye className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        </div>
                    </div>

                    <Label className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" />
                        Concordo com os{' '}
                        <a href="#" className="text-sky-600 hover:text-sky-700">
                          Termos de Uso
                        </a>{' '}
                        e{' '}
                        <a href="#" className="text-sky-600 hover:text-sky-700">
                          Política de Privacidade
                        </a>
                    </Label>

                    <Button className="w-full justify-center gap-2 bg-slate-950 text-white hover:bg-slate-900 h-12">
                        Criar Conta Gratuita
                        <ArrowRight className="h-4 w-4" />
                    </Button>

                    <p className="text-center text-sm text-slate-500">
                        Já tem uma conta?{' '}
                        <a href="/auth/login" className="font-medium text-sky-600 hover:text-sky-700">
                          Fazer login
                        </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
        </form>
    )
}