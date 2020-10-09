const model = [
    {type: 'title', value: 'Hello world from JS'},
    {type: 'text', value: 'some text and little bit info :)'},
    {type: 'columns', value: [
        '111',
        '222',
        '333'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    let html = ''

    if(block.type === 'title'){
        html = title(block)
    } else if(block.type === 'text'){
        html = ` some html code`
    } else if(block.type === 'columns'){
        html = `some html code`
    }

    $site.insertAdjacentHTML("beforeend", html)
})


function title(block) {
    return ``
}

function text(block) {
    return ``
}

function columns(block) {
    return ``
}

