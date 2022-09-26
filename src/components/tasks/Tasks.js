import {pi, round, sqrt, tan} from "mathjs";
import img1_4 from "../../images/1_4.svg";
import img1_8 from "../../images/1_8.svg";
import img2_1 from "../../images/2_1.svg";
import img2_4 from "../../images/2_4.svg";
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
