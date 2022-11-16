const verse = `
В лесу родилась ёлочка,
В лесу она росла.
Зимой и летом стройная,
Зелёная была.
`
function asParagraphs() {
    const lines = verse.trim().split('\n')
    lines.forEach(line => {
        const p = document.createElement('p')
        p.textContent = line
        document.body.appendChild(p)
    })
}

//asParagraphs()

function asSingleParagraph(verse){
    const p = document.createElement('p')
    p.textContent = verse.trim()
    document.body.appendChild(p)
}

//asSingleParagraph()

async function fetchParagraph(url){
    const response = await fetch(url)
    const text = await response.text()
    return text
}

asSingleParagraph(verse)
/*fetchParagraph('verse1.txt')
fetchParagraph('verse2.txt')
fetchParagraph('verse3.txt')*/

Promise.all([1, 2, 3]
    .map(n => `verse${n}.txt`) // Превращаем в имена файлов
    .map(url => fetchParagraph(url)) // Возвращает массив промисов
) // Возвращает результат работы всех промисов, выстраивает их в порядке соответсвуеющем входному массиву
.then(paragraphs => paragraphs.forEach(asSingleParagraph)) // Из массива строк создаем параграфы

//TODO Создать колобок из фрагментов. Картинки + текст. Имена файлов оформить как массив из слов ['preface', 'zayatc', 'wolf', 'bear', 'fox']