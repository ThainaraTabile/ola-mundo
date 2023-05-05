import { Outlet } from "react-router-dom";
import Banner from "../../componentes/Banner";

export default function PaginaPadrao(){
    return (
        <main>
           <Banner />
           <Outlet />
           {/* renderizar conteudo da rota aqui..*/}
        </main>
    )
}