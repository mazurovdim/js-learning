test('Apply Math.floor', () => {
    expect(Math.floor.apply(undefined, [10.2])).toBe(10)
})

test('Apply string method', () => {
    expect(new String().toUpperCase.apply('hello')).toBe('HELLO') // стрый способ
    expect(''.toUpperCase.apply('hello')).toBe('HELLO') // старый способ
    expect(Reflect.construct(String, []).trim.apply('  HELLO  ')).toBe('HELLO')
    expect(Reflect.apply(''.toUpperCase, 'hello', [])).toBe('HELLO') // новый способ
})
