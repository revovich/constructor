import {row, col, css } from './utils'

 function title(block) {
    // return `<div class="row">
    //             <div class="col-sm">
    //                 <h1>${block.value}</h1> 
    //             </div>
    //         </div>
    // `
    // const tag = block.options.tag ?? 'h1'
    // const styles = block.options.styles
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

 function text(block) {
    // return `<div class="row">
    //             <div class="col-sm">
    //                 <p>${block.value}</p>
    //             </div>
    //         </div>
    // `
    return row(col(`<p>${block.value}</p>`), css(block.options.styles))

}

 function columns(block) {
//  NOT a GOOD code  ---- не совсем хорошее решение ----
//     let html = ''
//     block.value.forEach(item => {
//         html += `
//             <div class="col-sm">
//                 ${item}
//             </div>
//         `
//     })

// good code 
    const html = block.value.map(col).join('')
    return row(html, css(block.options.styles))
}

 function image(block){
    const {imageStyles: is, alt = '', styles} = block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
}


export const templates = {
    title,
    text,
    image,
    columns
}