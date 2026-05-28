import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import { Metrics } from '@/components/dashboard/metrics';
import { Chart } from '@/components/dashboard/chart';
import { RecentActivities } from '@/components/dashboard/recent-activities';
import { RecentTransactions } from '@/components/dashboard/recent-transactions';
import { Button } from '@/components/ui/button';
import { FileDown, Plus } from 'lucide-react';

export default function Dashboard(){
    return(
        <div className="min-h-screen bg-slate-950">
            <Sidebar />
            <Header />
            <main className="ml-64 p-8 bg-slate-950">
                {/* Título e ações */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Visão Geral</h1>
                        <p className="text-slate-400">Bem-vindo de volta, Adriana. Aqui está o resumo do desempenho hoje.</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" className="border-slate-700 hover:bg-slate-800 text-slate-200 gap-2">
                            <FileDown className="w-4 h-4" />
                            Exportar PDF
                        </Button>
                        <Button className="bg-slate-900 hover:bg-slate-800 text-white gap-2 border border-slate-700">
                            <Plus className="w-4 h-4" />
                            Novo Relatório
                        </Button>
                    </div>
                </div>

                {/* Métricas */}
                <Metrics />

                {/* Gráfico e Atividades */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <Chart />
                    <RecentActivities />
                </div>

                {/* Transações */}
                <div className="grid grid-cols-1 gap-6">
                    <RecentTransactions />
                </div>
            </main>
        </div>
    )
}