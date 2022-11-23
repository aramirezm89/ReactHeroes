import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./auth/context";
import { SidebarComponent } from "./shared/SidebarComponent";


export const HeroesApp = () => {
   


  return (
    <>
      <div>
        <AuthProvider>
          <SidebarComponent />
        </AuthProvider>
        <ToastContainer />
      </div>
    </>
  );
}
