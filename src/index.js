import { App } from './classes/app'
import {model} from './model'
// import {templates} from './templates'  After we code Classes in blocks.js no need more this file
// import {Site} from './classes/site'           Refactoring after refactor
// import { Sidebar } from './classes/sidebar'   Refactoring after refactor
// import {App} from './classes/app'
import './styles/main.css'

new App(model)

// const $site = document.querySelector('#site')     Refactoring after refactor
// const site = new Site('#site')   Refactoring after refactor

// site.render(model)

// model.forEach(block => {
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
        // $site.insertAdjacentHTML("beforeend", block.toHTML())
    // }  After we code Classes (SOLID Refactoring)
// })
// const sidebar = new Sidebar('#panel')
// const updateCallback =  newBlock => {   Refactoring after refactor
//     model.push(newBlock)              Refactoring after refactor
//     site.render(model)                Refactoring after refactor
// }             Refactoring after refactor

// new Sidebar('#panel', updateCallback)  Refactoring after refactor
