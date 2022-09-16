import React from 'react';
import "./tasks/Task.css";
import Navbar from "./Navbar";
import logo512 from "../images/logo512.png";

const Home = () => {
    return (
        <div className="App">
            <Navbar/>
            <div className="main-wrapper">
                <div className="content-block">
                    <div className='header'>Домашние работы по физике, Руденко Илья P32101</div>
                    <div>
                        Для навигации по сайту используется боковая панель
                    </div>
                    <div>
                        Исходный код можно найти по кнопке снизу боковой панели
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
