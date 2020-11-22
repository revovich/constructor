import {model} from './model'
// import {templates} from './templates'  After we code Classes in blocks.js no need more this file
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {
    // let html = ''

    // if (block.type === 'title') {
    //     html = title(block)
    // } else if (block.type === 'text') {
    //     html = text(block)
    // } else if (block.type === 'columns') {
    //     html = columns(block)
    // } else if (block.type === 'image') {
    //     html = image(block)
    // }

    // const toHTML = templates[block.type] After we code Classes in blocks.js no need more this
    // console.log(block.toHTML()); After we code Classes (SOLID Refactoring)
    // if (toHTML) {  After we code Classes (SOLID Refactoring)
        $site.insertAdjacentHTML("beforeend", block.toHTML())
    // }  After we code Classes (SOLID Refactoring)
})
