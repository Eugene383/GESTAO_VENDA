import {Sidebar} from '@/components/dashboard/sidebar';
import {prisma}  from '@/lib/prisma';
import { Header } from '@/components/dashboard/header';
import FormProduct from "@/components/dashboard/form-product"
import DeleteProductForm from '@/components/dashboard/delete-product-form';
import UpdateProductForm from '@/components/dashboard/update-product-form';
import {Search,DollarSignIcon, Layers, TriangleAlert} from 'lucide-react';
import { formatPrice } from '@/utils';
import {Table,TableHeader,TableBody,TableRow,TableHead,TableCell,} from '@/components/ui/table';
import { SearchBar } from '@/components/dashboard/search-bar';
import { Pagination } from '@/components/dashboard/pagination';
import { cacheLife } from 'next/cache';


export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>
}) {  
    
   

    const categories = await prisma.categoria.findMany()

    const { q = '', page = '1' } = await searchParams

    const pagina = Number(page)
    const porPagina = 5

    const where = q ? {
      OR: [
        { nome:      { contains: q, mode: 'insensitive' as const } },
        { categoria: { descricao: { contains: q, mode: 'insensitive' as const } } },
      ]
    } : undefined

    const [rawProducts, total] = await Promise.all([
        prisma.produto.findMany({
          where,
          include: { categoria: true },
          skip: (pagina - 1) * porPagina,
          take: porPagina,
          orderBy: { id: 'asc' },
        }),
        prisma.produto.count({ where })  // mesmo where para contar só os filtrados
    ])

    const totalPaginas = Math.ceil(total / porPagina)

    const products = rawProducts.map((product)=>({
        ...product,
        preco:product.preco.toNumber()
        
    }))

    const valuesTot = {
        valor:products.reduce((soma,product)=>{
            return soma + product.preco * product.stoque
        },0),
        qtd:products.reduce((soma,product)=>{
            return soma + product.stoque
        },0),
        stockCritico:products.filter((product)=>product.stoque <= 5).length

    }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar />
      <Header />

      <main className="ml-64 p-8 pb-12">
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-white">Gestão de produtos</h1>
                </div>
                <FormProduct categories={categories} />
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className={`rounded-3xl border ${valuesTot.qtd < 50 ? "border-red-500": "border-green-500"} bg-slate-900/80 p-6 shadow-sm`}>
                    <p className="text-sm font-medium     text-slate-400"><Layers/>Quantidade total</p>
                    <p className="mt-3 text-xl font-semibold text-white">{valuesTot.qtd} </p>
                </div>
                <div className={`rounded-3xl border ${valuesTot.stockCritico ? "border-red-500": "border-green-500"} bg-slate-900/80 p-6 shadow-sm`}>
                    <p className="text-sm font-medium text-slate-400"><TriangleAlert/>Stock crítico</p>
                    <p className="mt-3 text-xl font-semibold text-white"> {valuesTot.stockCritico} </p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
                    <p className="text-sm font-medium text-slate-400 space-y-2"><DollarSignIcon/>Valor total</p>
                    <p className="mt-3 text-xl font-semibold text-white">{formatPrice(valuesTot.valor)}</p>
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
                      <TableHead>Preço</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead >Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    { products.map((product:any)=>(
                          <TableRow key={product.id}>
                              <TableCell className="text-slate-400">{product.id}</TableCell>
                              <TableCell className="text-slate-400">{product.nome}</TableCell>
                              <TableCell className="text-slate-400">{formatPrice(product.preco)}</TableCell>
                              <TableCell className="text-slate-400">{product.stoque}</TableCell>
                              <TableCell className="text-slate-400">
                                {product.stoque > 5 ? (
                                  <span className="text-emerald-400">Em estoque</span>
                                ) : (
                                  <span className="text-rose-400">Baixo stoque</span>
                                )}
                              </TableCell>
                              <TableCell className="text-slate-400">{product.categoria.descricao}</TableCell>
                              <TableCell className='flex-1 space-x-2'>
                                  <UpdateProductForm product ={product} />
                                  <DeleteProductForm productId ={product.id}/>
                              </TableCell>
                          </TableRow>
                      ))
                      }
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Pagination paginaAtual={pagina} totalPaginas={totalPaginas} />
              </div>
            </section>
        </div>
      </main>
    </div>
  );
}
