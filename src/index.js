import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Route,Routes} from "react-router-dom";
import Task1_4 from "./components/tasks/Task1_4";
import Task1_5 from "./components/tasks/Task1_5";
import Home from "./components/tasks/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/task1_4" element={<Task1_4/>}/>
            <Route path="/task1_5" element={<Task1_5/>}/>
        </Routes>
    </HashRouter>
);

