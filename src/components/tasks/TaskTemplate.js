import React, {useState} from 'react';
import Navbar from "../Navbar";
import "./Task.css";
import logo512 from "../../images/logo512.png"
import img from "../../images/1_4.svg";

const TaskTemplate = ({id,condition,imagePath,numberOfVariables,variablesNames,answerUOM,answerVar,solve}) => {

    const [variables,setVariables]=useState({
        first:0,
        second:0,
        third:0,
        fourth:0
    });

    const[answer,setAnswer] = useState(0);

    const handleChange = (e) =>{
        e.preventDefault();
        // console.log(e.target.name)
        let newVar=variables;
        newVar[e.target.name]=1*e.target.value;
        setVariables(newVar);
        // console.log(variables);
    }

    const handleSolve =()=>{
        console.log(solve);
        console.log(img);
        setAnswer(solve(variables));
    }

    return (
        <div className="App">
            <Navbar/>
            <div className="main-wrapper">
                <div className="content-block">
                    <div className='header'>Условие</div>
                    <div>{condition}</div>
                </div>
                <div className='content-block'>
                    <div className='header'>Рисунок</div>
                    <img src={imagePath}/>
                </div>
                <div className='content-block'>
                    <div className='variables'>
                        {numberOfVariables>0 && (
                            <div className="input-block">
                                <span>{variablesNames[0]}:</span>
                                <input
                                onChange={handleChange}
                                className="input"
                                type='number'
                                name='first'
                                />
                            </div>
                        )}
                        {numberOfVariables>1 && (
                            <div className="input-block">
                                <span>{variablesNames[1]}:</span>
                                <input
                                    onChange={handleChange}
                                    className="input"
                                    type='number'
                                    name='second'
                                />
                            </div>
                        )}
                        {numberOfVariables>2 && (
                            <div className="input-block">
                                <span>{variablesNames[2]}:</span>
                                <input
                                    onChange={handleChange}
                                    className="input"
                                    type='number'
                                    name='third'
                                />
                            </div>
                        )}
                        {numberOfVariables>3 && (
                            <div className="input-block">
                                <span>{variablesNames[3]}:</span>
                                <input
                                    onChange={handleChange}
                                    className="input"
                                    type='number'
                                    name='fourth'
                                />
                            </div>
                        )}
                    </div>
                    <div className='answer-block'>
                        <button className='btn-11' onClick={handleSolve}>
                            Вычислить
                        </button>
                        <div className='right'>
                            <div className='answer'>{answerVar}:</div>
                            <input
                                className="input"
                                disabled
                                value={answer + " "+answerUOM}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};




export default TaskTemplate;

