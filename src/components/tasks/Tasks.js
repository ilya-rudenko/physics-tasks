import {pi, round, sqrt, tan, log} from "mathjs";
import img1_4 from "../../images/1_4.svg";
import img1_8 from "../../images/1_8.svg";
import img2_1 from "../../images/2_1.svg";
import img2_4 from "../../images/2_4.svg";
import img4_1 from '../../images/4_1.svg';
import img4_8 from '../../images/4_8.svg';
import img5_8 from '../../images/5_8.png';
import img5_5 from '../../images/5_5.svg';
import placeholder from "../../images/placeholder.jpeg";

export const task1_4 = {
    id:14,
    condition: "Два шарика массой m=0,1 г каждый подвешены в одной точке на нитях длиной l=20 см каждая. Получив одинаковый заряд, шарики разошлись так, что нити образовали между собой угол α=60°. Найти заряд каждого шарика.",
    imagePath: img1_4,
    numberOfVariables:3,
    variablesNames: ["l","a","m"],
    answerUOM:"нКл",
    answerVar:"Q",
    solve: (variables)=>{
        const {first,second,third} = variables;
        return round( (first/100)*sqrt(((third/1000)*10*tan(pi/(180/second)/2))/9000000000)*1000000000  ,4);
    }
}
export const task1_8 = {
    id:18,
    condition: "Дана равномерно заряженная нить с линейной плотностью заряда 2 мкКл/м длинной 5 см. Вычислить напряженность поля в точке лежащей на продолжении нити на расстоянии 3 см от её конца.",
    imagePath: img1_8,
    numberOfVariables: 3,
    variablesNames: ["λ","l","a"],
    answerUOM: "кВ/м",
    answerVar: "E",
    solve: (variables)=>{
        const {first,second,third} = variables;
        return round( ((90*first*second)/(third/100*(third+second)/100))/1000 ,4);
    }
}
export const task2_1 = {
    id:21,
    condition: "Система состоит из тонкого заряженного проволочного кольца радиуса R и очень длинной равномерно заряженной нити, расположенной по оси кольца так, что один из ее концов совпадает с центром кольца. Последнее имеет заряд q. На единицу длины нити приходится заряд λ. Найти силу взаимодействия кольца и нити.",
    imagePath:img2_1,
    numberOfVariables: 3,
    variablesNames:["R","q","λ"],
    answerUOM: "МН",
    answerVar: "F",
    solve: (variables)=>{
        const {first,second,third} = variables;
        return round( (second*third*9000)/first ,4);
    }
}
export const task2_4 = {
    id:24,
    condition: "Найти напряженность поля равномерно заряженной нити в виде четверти кольца в точке центра его кривизны. Линейная плотность заряда нити 2 мкКл/м. Радиус 3 см.",
    imagePath:img2_4,
    numberOfVariables:2,
    variablesNames:["R","λ"],
    answerUOM:"МН/Кл",
    answerVar:"E",
    solve: (variables)=>{
        const {first,second} = variables;
        return round( (second*9000)/first ,4);
    }
}

export const task4_1 = {
    id:41,
    condition: 'В точках A и В на расстоянии АВ=l  закреплены заряды +9q и -q. Вдоль прямой AB к ним движется частица массы m, имеющая заряд +q. Какую наименьшую скорость должна иметь эта частица на очень большом расстоянии, чтобы достичь точки В?',
    imagePath: img4_1,
    numberOfVariables:3,
    variablesNames:['q','m','l'],
    answerUOM: 'м/c',
    answerVar: 'V',
    solve: (variables) => {
        const {first,second,third} = variables;
        return round(sqrt((8*first*first*(9000000000))/(second*third)) ,4);
    }
}

export const task4_8 = {
    id:48,
    condition: 'Точечный заряд q находится на расстоянии l от безграничной проводящей плоскости. Какую работу необходимо совершить, чтобы медленно удалить этот заряд на очень большое расстояние от плоскости?',
    imagePath: img4_8,
    numberOfVariables:2,
    variablesNames:['q','l'],
    answerUOM: 'Дж',
    answerVar: 'A',
    solve: (variables) => {
        const {first,second} = variables;
        return round(((-9000000000*first*first)/second) ,4);
    }
}

export const task5_8 = {
    id: 58,
    condition: 'Найти емкость бесконечной цепи, которая образована повторением одного и того же звена, состоящего из двух одинаковых конденсаторов, каждый емкости C',
    imagePath: img5_8,
    numberOfVariables: 1,
    variablesNames: ['C'],
    answerUOM: 'Ф',
    answerVar: 'C',
    solve: (variables) => {
        const {first} = variables;
        return round(first* (sqrt(5)-1)/2,4)
    }
}

export const task5_5 = {
    id: 55,
    condition: 'Газоразрядный счетчик элементарных частиц состоит из трубки радиуса r2=10 мм и натянутой по оси трубки нити радиуса r1=50 мкм. Длина счетчика l=150 мм. Положив ε=1, оценить межэлектродную емкость C.',
    imagePath: img5_5,
    numberOfVariables: 3,
    variablesNames: ['r1','r2','l'],
    answerUOM: 'пФ/м',
    answerVar: 'C',
    solve: (variables) => {
        const {first,second,third} = variables;
        return round(
            (2 * pi * (third/10**3) * 8.85 * 10**(-12)) / log((second)/(first/10**3)) * 10**12
            ,4);
    }
}
