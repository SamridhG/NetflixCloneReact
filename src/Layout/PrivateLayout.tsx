import NavBar from "../Shared/NavBar/NavBar";
import { AppLayoutProps } from "./AppLayout";

function PrivateLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <NavBar />  
      <div>{children}</div> {/* Content below NavBar */}
    </div>
  );
}

export default PrivateLayout;
