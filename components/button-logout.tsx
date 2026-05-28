"use client";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { redirect} from "next/navigation";
import {useEffect} from "react"

export default function ButtonLogOut(){
    const {data:session,status} = useSession()

    useEffect(()=>{
        if(status === "unauthenticated"){
            redirect("/auth/login")
        }
    },[status])
    if(status === "loading") return null
    if(session){
        return(
            <>
                <Button variant="ghost" onClick={()=>signOut()} >Terminar a sesão</Button>
            </>
        )
    }
    if(!session){
        redirect("/auth/login")
    }
    
    
}