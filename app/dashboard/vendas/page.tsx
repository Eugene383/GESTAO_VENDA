import {Sidebar} from '@/components/dashboard/sidebar';
import {prisma}  from '@/lib/prisma';
import { Header } from '@/components/dashboard/header';
import {Search,DollarSignIcon, Layers, TriangleAlert} from 'lucide-react';
import {Table,TableHeader,TableBody,TableRow,TableHead,TableCell,} from '@/components/ui/table';
import { SearchBar } from '@/components/dashboard/search-bar';
import { formatDate } from '@/utils/format-date';
import { formatPrice } from '@/utils';
import CreateSellForm from '@/components/create-sell-form';
import DeleteSellForm from '@/components/delete-sell-form';
import UpdateSellForm from '@/components/update-sell-form';



export default async function VendasPage() {  
    
  const clientes = await prisma.cliente.findMany()

  const vendas = await prisma.venda.findMany({
    include:{
      cliente:true,
      usuario:true, 
    }
  })

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <Header />

      <main className="ml-64 p-8 pb-12">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-white">Gestão de vendas</h1>
                </div>
               <CreateSellForm clientes={clientes}  />
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className={`rounded-3xl border border-red-500  bg-slate-900/80 p-6 shadow-sm`}>
                    <p className="text-sm font-medium     text-slate-400"><Layers/>Quantidade total</p>
                    <p className="mt-3 text-xl font-semibold text-white"> </p>
                </div>
                <div className={`rounded-3xl border  "border-green-500 bg-slate-900/80 p-6 shadow-sm`}>
                    <p className="text-sm font-medium text-slate-400"><TriangleAlert/>Stock crítico</p>
                    <p className="mt-3 text-xl font-semibold text-white">  </p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
                    <p className="text-sm font-medium text-slate-400 space-y-2"><DollarSignIcon/>Valor total</p>
                    <p className="mt-3 text-xl font-semibold text-white"></p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
                    <p className="text-sm font-medium text-slate-400">Movimentação (24h)</p>
                    <p className="mt-3 text-4xl font-semibold text-white"></p>
                    <span className="text-sm text-sky-400">Saídas</span>
                </div>
            </div>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className=" relative max-w-2xl flex-1 justify-center items-center">
                  <Search className="pointer-events-none absolute left-3 top-2 h-4 w-4 text-slate-500" />
                  <SearchBar/>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70">
                <Table className="min-w-full border-collapse text-sm text-slate-200">
                  <TableHeader>
                    <TableRow className="bg-slate-950/80 text-slate-400">
                      <TableHead>Codigo</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Usuario</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    { vendas.map((venda:any)=>(
                          <TableRow key={venda.id}>
                              <TableCell className="text-slate-400">{venda.id}</TableCell>
                              <TableCell className="text-slate-400">{formatDate(venda.data)}</TableCell>
                              <TableCell className="text-slate-400">{formatPrice(venda.total)}</TableCell>
                              <TableCell className="text-slate-400">{venda.cliente.nome}</TableCell>
                              <TableCell className="text-slate-400">{venda.usuario.name}</TableCell>

                              <TableCell className="text-slate-400">
                                <UpdateSellForm venda={venda}  />
                                <DeleteSellForm vendaId={venda.id}  />

                              </TableCell>
                              
                          </TableRow>
                      ))
                      }
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
               
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}
