const delay = (phrase = 'Hello world', ms = 1000) => new Promise(function(resolve, reject){
    if(!/^[A-Z][a-z\ ]+/.test(phrase)){
        return reject('Фраза должна начинаться с большой буквы')
    }
    setTimeout(() => {
        console.log(phrase)
        resolve()
    }, ms);
})

delay().then(() => delay())
     .then(() => delay())
     .then(() => delay('Привет мир'))
     .then(() => delay())
     .then(() => delay('Hi', 3000))
     .catch((error) => console.log(error))

delay().then(() => delay())
     .then(() => delay())
     .then(() => delay('Hi hi'))
     .then(() => delay())