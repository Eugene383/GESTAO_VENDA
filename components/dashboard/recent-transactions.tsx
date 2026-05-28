'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreVertical } from 'lucide-react';

interface Transaction {
  id: string;
  client: string;
  email: string;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  value: string;
  initials: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    client: 'Marcos Lopes',
    email: 'marcos@empresa.com',
    date: '12 out, 2025',
    status: 'completed',
    value: 'R$ 2.450,00',
    initials: 'ML',
  },
  {
    id: '2',
    client: 'Ana Paula',
    email: 'ana.paula@rocio.io',
    date: '12 out, 2025',
    status: 'pending',
    value: 'R$ 890,00',
    initials: 'AP',
  },
  {
    id: '3',
    client: 'João Ricardo',
    email: 'joao@logistica.com.br',
    date: '11 out, 2025',
    status: 'cancelled',
    value: 'R$ 1.200,00',
    initials: 'JR',
  },
];

function getStatusColor(status: Transaction['status']) {
  switch (status) {
    case 'completed':
      return 'bg-emerald-500/10 text-emerald-400';
    case 'pending':
      return 'bg-yellow-500/10 text-yellow-400';
    case 'cancelled':
      return 'bg-red-500/10 text-red-400';
  }
}

function getStatusLabel(status: Transaction['status']) {
  switch (status) {
    case 'completed':
      return 'Concluído';
    case 'pending':
      return 'Pendente';
    case 'cancelled':
      return 'Cancelado';
  }
}

export function RecentTransactions() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Últimas Transações</CardTitle>
        <CardDescription>Histórico recente de vendas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">CLIENTE</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">DATA</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">VALOR</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">AÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                        <span className="text-sm font-medium text-white">{transaction.initials}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{transaction.client}</p>
                        <p className="text-xs text-slate-400">{transaction.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-300">{transaction.date}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(transaction.status)}`}>
                      {getStatusLabel(transaction.status)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-white">{transaction.value}</td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-slate-700 rounded transition-colors">
                      <MoreVertical className="w-4 h-4 text-slate-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
