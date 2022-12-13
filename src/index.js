import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import {
    task1_4, task1_8,
    task2_1, task2_4,
    task3_3, task3_5,
    task4_1, task4_8,
    task5_8, task5_5,
    task6_3, task6_7,
    task7_2, task7_3,
    task8_3, task8_5,
    task9_4, task9_5,
    task10_2, task10_3,
} from "./components/tasks/Tasks";
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

            <Route path="/task3_3" element={<TaskTemplate
                {...task3_3}
            />}/>
            <Route path="/task3_5" element={<TaskTemplate
                {...task3_5}
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

            <Route path="/task6_3" element={<TaskTemplate
                {...task6_3}
            />}/>
            <Route path='/task6_7' element={<TaskTemplate
                {...task6_7}
            />}/>

            <Route path="/task7_2" element={<TaskTemplate
                {...task7_2}
            />}/>
            <Route path='/task7_3' element={<TaskTemplate
                {...task7_3}
            />}/>

            <Route path="/task8_3" element={<TaskTemplate
                {...task8_3}
            />}/>
            <Route path='/task8_5' element={<TaskTemplate
                {...task8_5}
            />}/>

            <Route path="/task9_4" element={<TaskTemplate
                {...task9_4}
            />}/>
            <Route path='/task9_5' element={<TaskTemplate
                {...task9_5}
            />}/>

            <Route path="/task10_2" element={<TaskTemplate
                {...task10_2}
            />}/>
            <Route path='/task10_3' element={<TaskTemplate
                {...task10_3}
            />}/>
        </Routes>
    </HashRouter>
);

