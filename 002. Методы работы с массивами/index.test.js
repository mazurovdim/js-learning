const {getNames, getOld, getYoungerThan, sortByAge, getSumOfAges, getOldest, getYoungest, getAverageAge, makeStrFromArray} = require('.')

test('Создание строки из значений массива', () => {
    expect(makeStrFromArray()).toBe('Состав участников группы Beatles: 1: John Lennon, 2: Paul McCartney, 3: George Harrison, 4: Ringo Star.')
});

test('Поиск значения среднего возраста во всех значениях возраста в массивe', () => {
    expect(getAverageAge()).toBe(64.5)
});

test('Поиск наименьшего значения возраста во всех значенях массива', () => {
    expect(getYoungest()).toBe(40)
});

test('Поиск наибольшего значения возраста во всех значенях массива', () => {
    expect(getOldest()).toBe(80)
});

test('Сумма всех значений возрастов записей массива', () => {
    expect(getSumOfAges()).toBe(258)
});

test('Выборка имен из записей массива', () => {
    expect(getNames()[0]).toBe('John Lennon')
    expect(getNames()).toEqual(['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Star'])    
});

test('Сортировка по возрасту', () => {
    expect(sortByAge()).toEqual(['John Lennon', 'George Harrison', 'Ringo Star', 'Paul McCartney'])
});

test('Поиск по возрасту', () => {
    expect(getYoungerThan(50)).toBe('John Lennon')
    expect(getYoungerThan(30)).toBe('Not found')
});

test('Фильтр по возрасту (больше 50ти лет)', () => {
    expect(getOld().length).toBe(3)
});


