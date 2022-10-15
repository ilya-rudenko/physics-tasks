import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import {task1_4, task1_8, task2_1, task2_4, task4_1, task4_8, task5_8, task5_5} from "./components/tasks/Tasks";
import TaskTemplate from "./components/tasks/TaskTemplate";

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
            <Route path="/task1_4" element={<TaskTemplate
                {...task1_4}
            />}/>
            <Route path="/task1_8" element={<TaskTemplate
                {...task1_8}
            />}/>
            <Route path="/task2_1" element={<TaskTemplate
                {...task2_1}
            />}/>
            <Route path="/task2_4" element={<TaskTemplate
                {...task2_4}
            />}/>
            <Route path="/task4_1" element={<TaskTemplate
                {...task4_1}
            />}/>
            <Route path="/task4_8" element={<TaskTemplate
                {...task4_8}
            />}/>
            <Route path="/task5_8" element={<TaskTemplate
                {...task5_8}
            />}/>
            <Route path='/task5_5' element={<TaskTemplate
                {...task5_5}
            />}/>
        </Routes>
    </HashRouter>
);

