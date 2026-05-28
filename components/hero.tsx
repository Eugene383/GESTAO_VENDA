'use client'

import { Button } from '@/components/ui/button';
import Link from 'next/link';


export function Hero() {
  return (
    <div className="min-h-screen .bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-2">  
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Gestão Inteligente para Empresas Modernas
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Maximize a eficiência e escale sua operação com uma plataforma intuitiva que unifica todos os seus processos de negócios em um único lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
                Começar Agora
              </Button>
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800 px-8 py-6 text-base">
                Agendar Demo
              </Button>
            </div>
          </div>


          <div className="relative hidden lg:block">
            <div className=".bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="bg-slate-800 rounded-lg p-6 space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-slate-700 rounded w-3/4" />
                  <div className="h-3 bg-slate-700 rounded w-full" />
                  <div className="h-3 bg-slate-700 rounded w-2/3" />
                </div>
                <div className="pt-4 flex gap-4">
                  <div className="flex-1 h-32 bg-slate-700 rounded" />
                  <div className="flex-1 h-32 bg-blue-600/30 rounded" />
                </div>
                <div className="pt-4 h-24 bg-slate-700/50 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
