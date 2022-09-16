import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import {task1_4,task1_8,task2_1,task2_4} from "./components/tasks/Tasks";
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
                condition={task1_4.condition}
                id={task1_4.id}
                imagePath={task1_4.imagePath}
                numberOfVariables={task1_4.numberOfVariables}
                variablesNames={task1_4.variablesNames}
                answerUOM={task1_4.answerUOM}
                answerVar={task1_4.answerVar}
                solve={task1_4.solve}
            />}/>
            <Route path="/task1_8" element={<TaskTemplate
                condition={task1_8.condition}
                id={task1_8.id}
                imagePath={task1_8.imagePath}
                numberOfVariables={task1_8.numberOfVariables}
                variablesNames={task1_8.variablesNames}
                answerUOM={task1_8.answerUOM}
                answerVar={task1_8.answerVar}
                solve={task1_8.solve}
            />}/>
            <Route path="/task2_1" element={<TaskTemplate
                condition={task2_1.condition}
                id={task2_1.id}
                imagePath={task2_1.imagePath}
                numberOfVariables={task2_1.numberOfVariables}
                variablesNames={task2_1.variablesNames}
                answerUOM={task2_1.answerUOM}
                answerVar={task2_1.answerVar}
                solve={task2_1.solve}
            />}/>
            <Route path="/task2_4" element={<TaskTemplate
                condition={task2_4.condition}
                id={task2_4.id}
                imagePath={task2_4.imagePath}
                numberOfVariables={task2_4.numberOfVariables}
                variablesNames={task2_4.variablesNames}
                answerUOM={task2_4.answerUOM}
                answerVar={task2_4.answerVar}
                solve={task2_4.solve}
            />}/>
        </Routes>
    </HashRouter>
);

