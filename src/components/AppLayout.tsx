import { Outlet } from "react-router";
import NavBar from "./user/NavBar";
import HomePage from "./user/HomePage";
const AppLayout=()=>{
    return(<>
    <NavBar/>
    <HomePage/>
    <Outlet/>
    </>)
}
export default AppLayout;