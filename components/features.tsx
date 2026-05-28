'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, BarChart3, Zap, Lock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Package,
      title: 'Controle de Inventário',
      description: 'Gerenciamento completo de estoque. Controle múltiplos depósitos e otimize suas vendas.'
    },
    {
      icon: BarChart3,
      title: 'Análise em Tempo Real',
      description: 'Dashboard intuitivo que unifica todos os seus processos de negócios em um único lugar.'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Automatize processos e libere sua equipe para tarefas de maior valor estratégico.'
    },
    {
      icon: Lock,
      title: 'Segurança em Primeiro Lugar',
      description: 'Dados protegidos com criptografia de nível empresarial e conformidade regulatória.'
    },
  ];

  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Potencialize seu Negócio
          </h2>
          <p className="text-lg text-slate-400">
            Tecnologia de ponta para cada departamento da sua organização.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <CardHeader>
                  <div className="mb-4 p-3 bg-blue-500/10 w-fit rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
