const {getFile} = require('.')

test('Reading file',()=>{
    expect(getFile('003. Блоки Try Catch Finaly/123.txt')).toBe('Hello world')
})