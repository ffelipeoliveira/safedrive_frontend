import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
//Page imports
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import CarList from "./pages/cars/MyCars";
import Contracts from "./pages/contracts/Contracts";
//Routes
export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
                <Route path="/my_cars" element={<CarList/>}></Route>
				<Route path="/contracts" element={<Contracts/>}></Route>

				<Route path="/inicio" element={<Home/>}></Route>
                <Route path="/entrar" element={<Login/>}></Route>
				<Route path="/cadastro" element={<Register/>}></Route>
                <Route path="/meus_carros" element={<CarList/>}></Route>
				<Route path="/contratos" element={<Contracts/>}></Route>
            </Routes>
        </Router>
    )
  }