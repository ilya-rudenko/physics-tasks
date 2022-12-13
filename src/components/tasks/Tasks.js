import {pi, round, sqrt, tan, log} from "mathjs";

import img1_4 from "../../images/1_4.svg";
import img1_8 from "../../images/1_8.svg";

import img2_1 from "../../images/2_1.svg";
import img2_4 from "../../images/2_4.svg";

import img4_1 from '../../images/4_1.svg';
import img4_8 from '../../images/4_8.svg';

import img5_8 from '../../images/5_8.png';
import img5_5 from '../../images/5_5.svg';

import img7_2 from '../../images/7_2.svg';
import img7_3 from '../../images/7_3.png';

import img8_3 from '../../images/8_3.png';
import img8_5 from '../../images/8_5.png';

import img10_3 from '../../images/10_3.png';

import placeholder from "../../images/placeholder.jpeg";

export const task1_4 = {
    id: 14,
    condition: "Два шарика массой m=0,1 г каждый подвешены в одной точке на нитях длиной l=20 см каждая. Получив одинаковый заряд, шарики разошлись так, что нити образовали между собой угол α=60°. Найти заряд каждого шарика.",
    imagePath: img1_4,
    numberOfVariables: 3,
    variablesNames: ["l", "a", "m"],
    answerUOM: "нКл",
    answerVar: "Q",
    solve: (variables) => {
        const {first, second, third} = variables;
        return round((first / 100) * sqrt(((third / 1000) * 10 * tan(pi / (180 / second) / 2)) / 9000000000) * 1000000000, 4);
    }
}
export const task1_8 = {
    id: 18,
    condition: "Дана равномерно заряженная нить с линейной плотностью заряда 2 мкКл/м длинной 5 см. Вычислить напряженность поля в точке лежащей на продолжении нити на расстоянии 3 см от её конца.",
    imagePath: img1_8,
    numberOfVariables: 3,
    variablesNames: ["λ", "l", "a"],
    answerUOM: "кВ/м",
    answerVar: "E",
    solve: (variables) => {
        const {first, second, third} = variables;
        return round(((90 * first * second) / (third / 100 * (third + second) / 100)) / 1000, 4);
    }
}
export const task2_1 = {
    id: 21,
    condition: "Система состоит из тонкого заряженного проволочного кольца радиуса R и очень длинной равномерно заряженной нити, расположенной по оси кольца так, что один из ее концов совпадает с центром кольца. Последнее имеет заряд q. На единицу длины нити приходится заряд λ. Найти силу взаимодействия кольца и нити.",
    imagePath: img2_1,
    numberOfVariables: 3,
    variablesNames: ["R", "q", "λ"],
    answerUOM: "МН",
    answerVar: "F",
    solve: (variables) => {
        const {first, second, third} = variables;
        return round((second * third * 9000) / first, 4);
    }
}
export const task2_4 = {
    id: 24,
    condition: "Найти напряженность поля равномерно заряженной нити в виде четверти кольца в точке центра его кривизны. Линейная плотность заряда нити 2 мкКл/м. Радиус 3 см.",
    imagePath: img2_4,
    numberOfVariables: 2,
    variablesNames: ["R", "λ"],
    answerUOM: "МН/Кл",
    answerVar: "E",
    solve: (variables) => {
        const {first, second} = variables;
        return round((second * 9000) / first, 4);
    }
}

export const task3_3 = {
    id: 33,
    condition: "Потенциал электрического поля имеет вид ϕ = λ (xy – z^2), где λ — постоянная. Найти проекцию напряженности электрического поля в точке M {2, 1, -3} на направление вектора a ⃗  = i ⃗ + 3k ⃗.",
    imagePath: placeholder,
    numberOfVariables: 1,
    variablesNames: ["a"],
    answerUOM: "Н/Кл",
    answerVar: "Ea",
    solve: (variables) => {
        const {first} = variables;
        return round(-19 * first / sqrt(10), 4);
    }
}

export const task3_5 = {
    id: 33,
    condition: "Найти напряженность электрического поля, потенциал которого имеет вид ϕ=a ⃗r ⃗, где a — постоянный вектор, r — радиус-вектор точки поля.",
    imagePath: placeholder,
    numberOfVariables: 1,
    variablesNames: ["a"],
    answerUOM: "Н/Кл",
    answerVar: "Ea",
    solve: (variables) => {
        const {first} = variables;
        return round(-first, 4);
    }
}

export const task4_1 = {
    id: 41,
    condition: 'В точках A и В на расстоянии АВ=l  закреплены заряды +9q и -q. Вдоль прямой AB к ним движется частица массы m, имеющая заряд +q. Какую наименьшую скорость должна иметь эта частица на очень большом расстоянии, чтобы достичь точки В?',
    imagePath: img4_1,
    numberOfVariables: 3,
    variablesNames: ['q', 'm', 'l'],
    answerUOM: 'м/c',
    answerVar: 'V',
    solve: (variables) => {
        const {first, second, third} = variables;
        return round(sqrt((8 * first * first * (9000000000)) / (second * third)), 4);
    }
}

export const task4_8 = {
    id: 48,
    condition: 'Точечный заряд q находится на расстоянии l от безграничной проводящей плоскости. Какую работу необходимо совершить, чтобы медленно удалить этот заряд на очень большое расстояние от плоскости?',
    imagePath: img4_8,
    numberOfVariables: 2,
    variablesNames: ['q', 'l'],
    answerUOM: 'Дж',
    answerVar: 'A',
    solve: (variables) => {
        const {first, second} = variables;
        return round(((-9000000000 * first * first) / second), 4);
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
        return round(first * (sqrt(5) - 1) / 2, 4);
    }
}

export const task5_5 = {
    id: 55,
    condition: 'Газоразрядный счетчик элементарных частиц состоит из трубки радиуса r2=10 мм и натянутой по оси трубки нити радиуса r1=50 мкм. Длина счетчика l=150 мм. Положив ε=1, оценить межэлектродную емкость C.',
    imagePath: img5_5,
    numberOfVariables: 3,
    variablesNames: ['r1', 'r2', 'l'],
    answerUOM: 'пФ/м',
    answerVar: 'C',
    solve: (variables) => {
        const {first, second, third} = variables;
        return round(
            (2 * pi * (third / 10 ** 3) * 8.85 * 10 ** (-12)) / log((second) / (first / 10 ** 3)) * 10 ** 12
            , 4);
    }
}

export const task6_7 = {
    id: 67,
    condition: 'Найти емкость бесконечной цепи, которая образована повторением одного и того же звена, состоящего из двух одинаковых конденсаторов, каждый емкости C',
    imagePath: img5_8,
    numberOfVariables: 1,
    variablesNames: ['C'],
    answerUOM: 'Ф',
    answerVar: 'C',
    solve: (variables) => {
        const {first} = variables;
        return round(first * (sqrt(5) - 1) / 2, 4);
    }
}

export const task6_3 = {
    id: 63,
    condition: 'Газоразрядный счетчик элементарных частиц состоит из трубки радиуса r2=10 мм и натянутой по оси трубки нити радиуса r1=50 мкм. Длина счетчика l=150 мм. Положив ε=1, оценить межэлектродную емкость C.',
    imagePath: img5_5,
    numberOfVariables: 3,
    variablesNames: ['r1', 'r2', 'l'],
    answerUOM: 'пФ/м',
    answerVar: 'C',
    solve: (variables) => {
        const {first, second, third} = variables;
        return round(
            (2 * pi * (third / 10 ** 3) * 8.85 * 10 ** (-12)) / log((second) / (first / 10 ** 3)) * 10 ** 12
            , 4);
    }
}

export const task7_2 = {
    id: 72,
    condition: 'В центре проводящего шара с удельным сопротивлением р оказался избыточный заряд Q. Найти ток, текущий из центра шара к его поверхности.',
    imagePath: img7_2,
    numberOfVariables: 2,
    variablesNames: ['Q', 'p'],
    answerUOM: 'А',
    answerVar: 'I',
    solve: (variables) => {
        const {first, second} = variables;
        return round(
            first / (8.85 * 10 ** (-12) * second), 4);
    }
}

export const task7_3 = {
    id: 73,
    condition: 'Определите сопротивление R бесконечной цепи, показанной на рисунке.',
    imagePath: img7_3,
    numberOfVariables: 1,
    variablesNames: ['R'],
    answerUOM: 'Ом',
    answerVar: 'R',
    solve: (variables) => {
        const {first} = variables;
        return round(first * (sqrt(5) + 1) / 2, 4);
    }
}

export const task8_3 = {
    id: 83,
    condition: 'Ток I течет по проводнику (см. рисунок). Радиус изогнутой части проводника R, угол 2ϕ=90. Найти магнитную индукцию в точке О.',
    imagePath: img8_3,
    numberOfVariables: 2,
    variablesNames: ['I', 'R'],
    answerUOM: 'Тл',
    answerVar: 'B',
    solve: (variables) => {
        const {first, second} = variables;
        return round(4*pi*10**(-7)*first*(pi-pi/4+tan(pi/4)/(2*pi*second)), 4);
    }
}

export const task8_5 = {
    id: 85,
    condition: 'Ток I течет по длинному прямому проводнику, сечение которого имеет форму тонкого полукольца радиуса R (рисунок). Найти индукцию магнитного поля в точке О.',
    imagePath: img8_5,
    numberOfVariables: 2,
    variablesNames: ['I', 'R'],
    answerUOM: 'Тл',
    answerVar: 'B',
    solve: (variables) => {
        const {first, second} = variables;
        return round(4*pi*10**(-7)*first/(second*pi**2), 4);
    }
}

export const task9_4 = {
    id: 94,
    condition: 'Найти плотность тока как функцию расстояния r от оси аксиально-симметричного параллельного потока электронов, если, индукция магнитного поля внутри потока зависит от r как B=br^α, где b и α — положительные постоянные.',
    imagePath: placeholder,
    numberOfVariables: 3,
    variablesNames: ['a', 'b', 'r'],
    answerUOM: 'A/mm^2',
    answerVar: 'j(r)',
    solve: (variables) => {
        const {first, second, third} = variables;
        return round( second*(1+first)*(third**(first-1))/(4*pi*10**(-7)), 4);
    }
}

export const task9_5 = {
    id: 95,
    condition: 'Внутри однородного длинного прямого провода круглого сечения имеется круглая цилиндрическая полость, ось которой параллельна оси провода и смещена относительно последней на расстояние l.По проводу течёт постоянный ток плотности j.Найти магнитную индукцию В внутри полости.',
    imagePath: placeholder,
    numberOfVariables: 2,
    variablesNames: ['j', 'l'],
    answerUOM: 'Тл',
    answerVar: 'B',
    solve: (variables) => {
        const {first, second} = variables;
        return round( (4*pi*10**(-7))*first*second/2 , 4);
    }
}

export const task10_2 = {
    id: 102,
    condition: 'Магнитный поток через неподвижный контур с сопротивлением R изменяется в течение времени τ по закону Ф = αt (τ-t). Найти количество тепла, выделенное в контуре за это время. Индуктивностью контура пренебречь.',
    imagePath: placeholder,
    numberOfVariables: 3,
    variablesNames: ['a', 'τ','R'],
    answerUOM: 'Дж',
    answerVar: 'Q',
    solve: (variables) => {
        const {first, second, third} = variables;
        return round( first**2*second**2/(3*third) , 4);
    }
}

export const task10_3 = {
    id: 103,
    condition: 'На рисунке показан кольцевой соленоид прямоугольного сечения. Найти магнитный поток через это сечение, если ток в обмотке I, полное число витков N, отношение внешнего диаметра к внутреннему η и толщина h.',
    imagePath: img10_3,
    numberOfVariables: 4,
    variablesNames: ['I', 'N','η', 'h'],
    answerUOM: 'Вб',
    answerVar: 'Ф',
    solve: (variables) => {
        const {first, second, third, fourth} = variables;
        return round( 4*pi*10**(-7)*first*second*third*fourth/2*pi , 4);
    }
}
