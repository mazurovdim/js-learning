const {getFile} = require('.')

test('Reading file',()=>{
    expect(getFile('123.txt')).toBe('Hello world')
})