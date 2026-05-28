export function formatPrice(price:number){
    return new Intl.NumberFormat("pt-AO",{
        style:"currency", currency:"AOA"
    }).format(price)
}