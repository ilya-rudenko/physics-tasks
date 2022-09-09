import React from 'react';
import "./Task.css";
const Task = () => {
    return (
        <div>
            <div className="title">
                Title
            </div>
            <div>
                task text
            </div>
            <input />
            <input />
            <button>
                calculate answer
            </button>
            <div>
                answer
            </div>
        </div>
    );
};

export default Task;
