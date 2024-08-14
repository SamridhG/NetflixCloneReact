
import NavBar from "../Shared/NavBar/NavBar"
import { AppLayoutProps } from "./AppLayout"
function PublicLayout({children}:AppLayoutProps) {
  return (
    <>
    <NavBar/>
    <div>{children}</div>
    </>
    
  )
}

export default PublicLayout
