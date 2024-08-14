import { ReactNode } from "react"
import PrivateLayout from "./PrivateLayout"
import PublicLayout from "./PublicLayout"
export interface AppLayoutProps{
    isAuthenticated?:boolean,
    children:ReactNode
}
function AppLayout({ isAuthenticated, children }: AppLayoutProps) {
    return isAuthenticated ? (<PrivateLayout>{children}</PrivateLayout>):(<PublicLayout>{children}</PublicLayout>)
  }

export default AppLayout
