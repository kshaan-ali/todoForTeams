
import { getServerSession } from "next-auth"

import { redirect } from "next/navigation"
import { Appbar } from "@repo/ui/components/ui/appbar"
import {DashboardMain} from "@repo/ui/components/ui/dashboardMain"
import {meiAtom} from"@repo/store/src/atoms/me"
import { useRecoilState } from "recoil"
import { signOut } from "next-auth/react"
import { authOption } from "../../components/client"
export default async function(){

    

    const session:any=await getServerSession(authOption)
    if(!session){
        redirect('/signup')
    }

    
    return <div>
        <Appbar userName={session.user.name} ></Appbar>
        <DashboardMain></DashboardMain> 

    </div>
}