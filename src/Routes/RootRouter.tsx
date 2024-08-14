import { useRoutes } from "react-router-dom"
import { PUBLIC_ROUTE } from "./PublicRoute"
import { PRIVATE_ROUTE } from "./PrivateRoute"
import { useSelector } from "react-redux"
import AppLayout from "../Layout/AppLayout"

const RootRouter =()=>{
    const guest=useRoutes(PUBLIC_ROUTE)
    const authenticate=useRoutes(PRIVATE_ROUTE)
    const AuthToken=useSelector((store:any)=>store.AuthSlice.token)
    const isAuth:boolean=!!AuthToken
    return (
        <AppLayout isAuthenticated={isAuth} >
        {isAuth?authenticate:guest}
        </AppLayout>
    )
}

export default RootRouter
