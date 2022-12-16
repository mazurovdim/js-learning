class Computer{
    constructor(processor, memory = '4Гб', disk = '500Гб'){
        this.memory = memory
        this.processor = processor
        this.disk = disk
    }

    set memory(mem){
        try {
            this._memory = Computer.parseVolume(mem)
        } catch (error) {
            console.log(error)
        }
    }

    get memory(){
        return this._memory
    }

    set processor(proc){
        try{
            if(!/^[A-Z][A-Za-z0-9\-]+/.test(proc)) throw 'Некорректное название процессора!'
            this._processor = proc  
        }catch(err){
            console.log(err)
        }  
    }

    get processor(){
        return this._processor
    }

    toString(){
        return `Процессор: ${this.processor}. ОЗУ: ${this.memory}. Диск: ${this.disk}`
    }

    static parseVolume(volume){
        const volumeReg = /^(\d+)(\D+)$/
        const groups = volumeReg.exec(volume)
        let [_, digits, letters] = groups
        switch(letters.toLowerCase()){
            case 'кб': 
                return +digits * 1024
            case 'мб':
                return +digits * Math.pow(1024, 2)
            case 'гб':
                return +digits * Math.pow(1024, 3)
            case 'тб':
                return +digits * Math.pow(1024, 4)
            default : 
                throw 'Используйте правильную единицу измерения'
        }
    }
}

class Intel extends Computer{
    constructor(memory, disk){
        super('Intel', memory, disk)
    }
}

const defaultComputer = new Computer('ARM', '4Гб', '1Тб')
const intelComputer = new Intel('16Гб')
console.log(defaultComputer.toString())
console.log(intelComputer.toString())


