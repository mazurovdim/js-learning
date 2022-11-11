var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin, // Стандартный входной поток, как правило символы с клавиатуры
  output: process.stdout // Стандартный выходной поток, как правило буквы на экране
}); // Подготовливаем считывание строк с консоли(с терминала)

function getFirstName() {
    return new Promise(function (res, rej){
        rl.question('Введите имя: ', firstName => {
            if(!/^[А-Я][а-я]+$/.test(firstName)){
                return rej('Пожалуйста вводите имя кириллицей. Первая буква должна быть заглавная.')
            }
            return res({firstName})
        })
    })
}

function getSecondName(person) {
    return new Promise(function (res, rej){
        rl.question('Введите фамилию: ', secondName => {
            if(!/^[А-Я][а-я]+$/.test(secondName)){
                return rej('Пожалуйста вводите фамилию кириллицей. Первая буква должна быть заглавная.')
            }
            return res({...person, secondName})
        })
    })
}

function getYear(person) {
    return new Promise(function (res, rej){
        rl.question('Введите год рождения: ', year => {
            if(!/^\d{4}$/.test(year)){
                return rej('Пожалуйста вводите год цифрами.')
            }
            return res({...person, year})
        })
    })
}

function closeReader(){
    rl.close()
}

function tryAgain() {
    return new Promise(function (res, rej){
        rl.question('Попробуете еще раз? [да/Нет]: ', answer => {
            if(answer.toLowerCase() != 'нет'){
                return getFirstName()
            }
        })
    })
}

/*getFirstName()
    .then(getSecondName)
    .then(getYear)
    .then(person => {
        const {firstName, secondName, year} = person
        console.log(`Спасибо, ${firstName}, регистрация завершена.\nИмя: ${firstName}\nФамилия: ${secondName}\nГод рождения: ${year}\n`)
        rl.close()
    })
    .catch(error => {
        console.log(error)
        rl.close()
    })*/

    module.exports = {getFirstName, getSecondName, getYear, closeReader}