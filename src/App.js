import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages";
//import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import SignIn from './pages/signin';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>

            </Routes>
        </Router>
    );

}

export default App;
