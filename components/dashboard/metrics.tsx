'use client'

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, ShoppingCart, Target } from 'lucide-react';

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  trendColor?: 'green' | 'red';
}

function MetricCard({ icon, label, value, trend, trendColor = 'green' }: MetricProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-slate-400 text-sm mb-2">{label}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
            {trend && (
              <p className={`text-sm mt-2 ${trendColor === 'green' ? 'text-emerald-400' : 'text-red-400'}`}>
                {trend}
              </p>
            )}
          </div>
          <div className="p-3 bg-slate-700/50 rounded-lg">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Metrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <MetricCard
        icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
        label="RECEITA TOTAL"
        value="R$ 142.380,00"
        trend="+12,5%"
        trendColor="green"
      />
      <MetricCard
        icon={<Users className="w-6 h-6 text-green-400" />}
        label="NOVOS CLIENTES"
        value="482"
        trend="+8%"
        trendColor="green"
      />
      <MetricCard
        icon={<ShoppingCart className="w-6 h-6 text-purple-400" />}
        label="VENDAS MENSAIS"
        value="1.240"
        trend="+5,2%"
        trendColor="green"
      />
      <MetricCard
        icon={<Target className="w-6 h-6 text-orange-400" />}
        label="TAXA DE CONVERSÃO"
        value="3,42%"
        trend="-2,4%"
        trendColor="red"
      />
    </div>
  );
}
