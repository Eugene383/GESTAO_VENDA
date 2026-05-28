import {Sidebar} from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';
import {Search,DollarSignIcon, Layers, TriangleAlert} from 'lucide-react';
import {Table,TableHeader,TableBody,TableRow,TableHead,TableCell,} from '@/components/ui/table';
import { SearchBar } from '@/components/dashboard/search-bar';
import {prisma} from "@/lib/prisma";
import CreateClientForm from '@/components/create-client-form';
import DeleteClientForm from '@/components/delete-client-form';
import UpdateClientForm from '@/components/dashboard/update-client-form';

export default async function ClientsPage() {  
  const clients = await prisma.cliente.findMany()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <Header />

      <main className="ml-64 p-8 pb-12">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-white">Gestão de clientes</h1>
                </div>
               <CreateClientForm/>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className={`rounded-3xl border  border-red-500 bg-slate-900/80 p-6 shadow-sm`}>
                    <p className="text-sm font-medium     text-slate-400"><Layers/>Quantidade total</p>
                    <p className="mt-3 text-xl font-semibold text-white"></p>
                </div>
                <div className={`rounded-3xl border   border-red-500 bg-slate-900/80 p-6 shadow-sm`}>
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
                      <TableHead>Nome</TableHead>
                      <TableHead >Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {   clients.map((client:any)=>(
                            <TableRow key={client.id}>
                                <TableCell className="text-slate-400"> {client.id} </TableCell>
                                <TableCell className="text-slate-400"> {client.nome} </TableCell>
                                <TableCell className='flex-1 space-x-2'>
                                    <UpdateClientForm client={client}  />
                                    <DeleteClientForm client={client} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                  </TableBody>
                </Table>
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}
