let nickname = prompt('Ваше имя').trim()
let stage = +prompt('каков номер вашей сцены?')
let ismarried = confirm('Вы женат(а)?')
let power = prompt('Насколько ты сильный от 10 до 10')
 let obj = {// создаю обект
    nickname: nickname,
    stage: stage,
    ismarried: ismarried,
    skills:{// создаю обект внутри обекта
        power: power
    }
}
delete obj.stage// удаляю обект 
obj.opit = +prompt('укажите опыт работы в годах')// добавляю обект вместо удаленного
//Вывожу все на страницу
document.write(`<h1>${obj.nickname}</h1>`)
document.write(`<h2>${obj.ismarried}</h2>`)
document.write(`<h3>${obj.opit}</h3>`)
document.write(`<h3>${obj.skills.power}</h3>`)
console.log(obj);//вывожу все в консоль 



