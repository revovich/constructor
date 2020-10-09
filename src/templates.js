
 function title(block) {
    return `<div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1> 
                </div>
            </div>
    `
}

 function text(block) {
    return `<div class="row">
                <div class="col-sm">
                    <p>${block.value}</p>
                </div>
            </div>
    `
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
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
//
    return `
        <div class="row">
            ${html.join('')}
        </div>
    `
}

 function image(block){
    return `
        <div class="row">
            <img src="${block.value}" />
        </div>
    `
}


export const templates = {
    title,
    text,
    image,
    columns
}