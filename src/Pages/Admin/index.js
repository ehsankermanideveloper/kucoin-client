import Authenticated from "../../HOC/authenticated";
import {useState} from 'react';
import Sidebar from "../../Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Commission from "../../Pages/Admin/Commission";
import Trade from "../../Pages/Admin/Trade";
import Deposit from "../../Pages/Admin/Deposit";
import Order from "../../Pages/Admin/Order";

const Admin = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    
    return (
        <>
            <div className={showSidebar ? `overlay show` : `overlay`} />
            <Sidebar state={showSidebar} handler={handleShowSidebar}/>
            <div className="main-content">
                <Routes>
                    <Route path="commission" element={<Commission/>} />
                    <Route path="deposit" element={<Deposit/>} />
                    <Route path="order" element={<Order/>} />
                    <Route path="trade" element={<Trade/>} />
                </Routes>
            </div>
        </>
    )
}

export default Authenticated(Admin);