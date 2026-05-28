'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination({paginaAtual, totalPaginas }: { paginaAtual: number , totalPaginas: number}) {
  const router   = useRouter()
  const pathname = usePathname()
  const params   = useSearchParams()

  function irPara(pagina: number) {
    const p = new URLSearchParams(params.toString())
    p.set('page', String(pagina))
    router.replace(`${pathname}?${p.toString()}`,{scroll:false})
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <p className="text-sm text-slate-400">
        Página {paginaAtual} de {totalPaginas}
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="border-slate-700 text-slate-200 hover:bg-slate-800"
          onClick={() => irPara(paginaAtual - 1)}
          disabled={paginaAtual <= 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-white">
          {paginaAtual}
        </div>

        <Button
          variant="outline"
          className="border-slate-700 text-slate-200 hover:bg-slate-800"
          onClick={() => irPara(paginaAtual + 1)}
          disabled={paginaAtual >= totalPaginas}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}