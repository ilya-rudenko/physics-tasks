import React, {useState} from 'react';
import Navbar from "../Navbar";
import "./Task.css";
import logo512 from "../../images/logo512.png"

const TaskTemplate = () => {

    const [variables,setVariables]=useState({
        first:0,
        "second":0,
        "third":0,
        "fourth":0
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
        setAnswer(solve(variables));
    }

    return (
        <div className="App">
            <Navbar/>
            <div className="main-wrapper">
                <div className="content-block">
                    <div className='header'>Задача</div>
                    <div>Но дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации глубокомысленных рассуждений. Но семантический разбор внешних противодействий предопределяет высокую востребованность существующих финансовых и административных условий. В целом, конечно, постоянный количественный рост и сфера нашей активности позволяет выполнить важные задания по разработке анализа существующих паттернов поведения.</div>
                </div>
                <div className='content-block'>
                    <div className='header'>Рисунок</div>
                    <img src={logo512}/>
                </div>
                <div className='content-block'>
                    <div className='variables'>
                        <div className="input-block">
                            <span>Variable:</span>
                            <input
                                onChange={handleChange}
                                className="input"
                                type='number'
                                name='first'
                            />
                        </div>
                        <div className="input-block">
                            <span>Variable:</span>
                            <input
                                onChange={handleChange}
                                className="input"
                                type='number'
                                name='second'
                            />
                        </div>
                        <div className="input-block">
                            <span>Variable:</span>
                            <input
                                onChange={handleChange}
                                className="input"
                                type='number'
                                name='third'
                            />
                        </div>
                        <div className="input-block">
                            <span>Variable:</span>
                            <input
                                onChange={handleChange}
                                className="input"
                                type='number'
                                name='fourth'
                            />
                        </div>
                    </div>
                    <div className='answer-block'>
                        <button className='btn-11' onClick={handleSolve}>
                            Вычислить
                        </button>
                        <div className='right'>
                            <div className='answer'>Ответ:</div>
                            <input
                                className="input"
                                disabled
                                value={answer + " см"}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const solve = (variables)=>{
    const {first,second,third,fourth} = variables;

    return first+second+third+fourth;
}



export default TaskTemplate;

