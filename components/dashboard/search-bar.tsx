"use client";
import {Input} from "@/components/ui/input";
import {useDebouncedCallback} from "use-debounce"
import { useRouter,usePathname,useSearchParams } from "next/navigation";

export function SearchBar(){
    const router = useRouter()
    const pathname  = usePathname()
    const params = useSearchParams()

    const handleSearch = useDebouncedCallback((texto:string)=>{
        const p = new  URLSearchParams(params.toString())
        if(texto){
            p.set('q',texto)
            p.delete('page') 
        }else{
            p.delete('q')
        }

        router.replace(`${pathname}?${p.toString()}`,{scroll:false})
    })
    return(
        <Input placeholder="Filtrar por nome,  categoria..."
        defaultValue={params.get('q')?? ''}
        onChange={e=>handleSearch(e.target.value)}
         className="bg-slate-950 border-slate-800 pl-10 text-slate-100 placeholder:text-slate-500" />
    )
}