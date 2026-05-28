
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Package, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { formatPrice } from "@/utils";

export default function CardProducts({produtos}:any){
    return(
         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {produtos.map((produto:any) => (
            <Card
              key={produto.id}
              className="group overflow-hidden border-white/5 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="/transferir.jpg"
                  fill
                  alt={produto.nome}
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                    <Badge className="bg-black/60 backdrop-blur-md text-white border-none">
                        {produto.categoria.descricao}
                    </Badge>
                </div>
              </div>
              
              <CardHeader className="space-y-1 p-5">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {produto.nome}
                    </CardTitle>
                </div>
                <CardDescription className="flex items-center gap-2 text-slate-400">
                    <Package className="w-4 h-4" />
                    {produto.stoque > 0 ? (
                        <span className="text-emerald-400">{produto.stoque} Unidade</span>
                    ) : (
                        <span className="text-red-400">Indisponível</span>
                    )}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-5 pb-2">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-medium">Preço </span>
                  <span className="text-2xl font-bold text-white">
                    {formatPrice(produto.preco)}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-4">
                <Button 
                    disabled={produto.stoque <= 0}
                    className="w-full gap-2 rounded-xl bg-white text-black hover:bg-primary hover:text-white transition-all font-bold"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Vender produto
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
    )
}