import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools'
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Admin from "./Pages/Admin";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const App = () => {
    const queryClient = new QueryClient()

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <div>
                    <Routes>
                        <Route path="*" element={<Main/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/admin/*" element={<Admin/>}/>
                    </Routes>
                </div>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
