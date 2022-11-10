var readline = require('readline')
let firstName, secondName, yearOfBirth

const rl = readline.createInterface({
  input: process.stdin, // Стандартный входной поток, как правило символы с клавиатуры
  output: process.stdout // Стандартный выходной поток, как правило буквы на экране
}); // Подготовливаем считывание строк с консоли(с терминала)

//TODO Организовать рекурсию из вопросов

getUserData()

function getUserData(){
    rl.question('Ваше имя : ', checkFirstName) // checkFirstName - функция callback, результат работы метода question попадает на вход функции answer
}

function checkFirstName(name){
    try{
        const reg = /^[А-Я][а-я]+$/
        if (!reg.test(name)){
            throw Error ('Пожалуйста вводите имя кириллицей. Первая буква должна быть заглавная')
        }
        firstName = name
        rl.question('Ваша фамилия: ', checkSecondName)
    }
    catch(ex){
        console.log('Ошибка', ex.message)
        rl.question('Ваше имя : ', checkFirstName)
    }
}

function checkSecondName(surname){
    try{
        const reg = /^[А-Я][а-я]+$/
        if (!reg.test(surname)){
            throw Error ('Пожалуйста вводите фамилию кириллицей. Первая буква должна быть заглавная')
        }
        secondName = surname
        rl.question('Год рождения: ', checkYear)
    }
    catch(ex){
        console.log('Ошибка', ex.message)
        rl.question('Ваша фамилия: ', checkSecondName)
    }
}

function checkYear(year){
    try{
        const reg = /^\d{4}$/
        if (!reg.test(year)){
            throw Error ('Пожалуйста вводите год цифрами.')
        }
        const result = `Спасибо, ${firstName} ${secondName}, Вы успешно прошли регистрацию.`
        console.log(result)
        process.exit()
    }
    catch(ex){
        console.log('Ошибка', ex.message)
        rl.question('Год рождения: ', checkYear)
    } 
}

