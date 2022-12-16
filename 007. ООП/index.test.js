class Computer{
    constructor(memory, processor, disk){
        this.memory = memory
        this.processor = processor
        this.disk = disk
    }

    toString(){
        return `Процессор: ${this.processor}. ОЗУ: ${this.memory}. Диск: ${this.disk}`
    }
}

const noname = new Computer('4Гб', 'ARM', '500Гб')

test('Простой компьютер',() =>{
    expect(noname.toString()).toBe('Процессор: 4Гб. ОЗУ: ARM. Диск: 500Гб')
})