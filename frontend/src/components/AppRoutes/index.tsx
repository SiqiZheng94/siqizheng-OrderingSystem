import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../pages/Customers.tsx";
import Dashboard from "../../pages/Dashboard.tsx";
import Inventory from "../../pages/Inventory.tsx";
import Orders from "../../pages/Orders.tsx";

function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/inventory" element={<Inventory />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
            </Routes>
    );
}
export default AppRoutes;