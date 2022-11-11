function delays(){
    setTimeout(() => {
        console.log('Hello world1')
        setTimeout(() => {
            console.log('Hello world2')
            setTimeout(() => {
                console.log('Hello world3')
            }, 3000);
        }, 3000);
    }, 3000);
}

delays() // callback hell