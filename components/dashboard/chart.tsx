'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Chart() {
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const data = [35, 45, 30, 55, 70, 45, 60, 50, 65, 40, 55, 35];
  
  const maxValue = Math.max(...data);
  const chartHeight = 250;

  return (
    <Card className="bg-slate-800/50 border-slate-700 col-span-1 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Desempenho Mensal</CardTitle>
            <CardDescription>Análise de vendas por mês</CardDescription>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors">
              Anual
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Mensal
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-center gap-2" style={{ height: chartHeight }}>
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1">
              <div
                className="w-full .bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all hover:from-blue-500 hover:to-blue-300"
                style={{
                  height: `${(value / maxValue) * chartHeight}px`,
                }}
              />
              <span className="text-xs text-slate-400">{months[index]}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
