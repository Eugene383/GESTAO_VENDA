'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Users, FileText, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface Activity {
  id: string;
  type: 'sale' | 'user' | 'report' | 'alert';
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'sale',
    title: 'Nova venda realizada',
    description: '#1920',
    time: 'Há 5 minutos',
  },
  {
    id: '2',
    type: 'user',
    title: 'Novo cliente registrado',
    description: 'Carlos Magno',
    time: 'Há 20 minutos',
  },
  {
    id: '3',
    type: 'report',
    title: 'Relatório financeiro de ação',
    description: '-',
    time: 'Há 1 hora',
  },
  {
    id: '4',
    type: 'alert',
    title: 'Estoque baixo: Monitor AK Dell',
    description: '-',
    time: 'Há 3 horas',
  },
];

function getIcon(type: Activity['type']) {
  switch (type) {
    case 'sale':
      return <Package className="w-5 h-5 text-blue-400" />;
    case 'user':
      return <Users className="w-5 h-5 text-green-400" />;
    case 'report':
      return <FileText className="w-5 h-5 text-purple-400" />;
    case 'alert':
      return <AlertCircle className="w-5 h-5 text-orange-400" />;
  }
}

export function RecentActivities() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Atividades Recentes</CardTitle>
          </div>
          <Link href="#" className="text-sm text-blue-400 hover:text-blue-300">
            Ver tudo
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-slate-700 last:border-0 last:pb-0">
              <div className="p-2 bg-slate-700/50 rounded-lg">{getIcon(activity.type)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{activity.title}</p>
                <p className="text-xs text-slate-400">{activity.description}</p>
              </div>
              <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
