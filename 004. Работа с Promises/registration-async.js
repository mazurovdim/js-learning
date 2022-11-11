const {getFirstName, getSecondName, getYear, closeReader} = require('./registration')

async function registration(){
    try{
        let person = await getFirstName()
        person = await getSecondName(person)
        person = await getYear(person)
        const {firstName, secondName, year} = person
        console.log(`Спасибо, ${firstName}, регистрация завершена.\nИмя: ${firstName}\nФамилия: ${secondName}\nГод рождения: ${year}\n`)
        closeReader()
    }
    catch(error){
        console.log(error)
        closeReader()
    }
    
}

registration()