import {col, css, row} from '../utils'

class Block {
    constructor(value,options) {
    // constructor(type,value,options) {
        
        // this.type = type,  refactoring rulezzzzzzzz SOLID
        this.value = value,
        this.options = options
    }

    toHTML() {
        throw new Error('Method toHTML should be!')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
        // super('title', value, options)
        // refactoring rulezzzzzzzz SOLID
    }

    toHTML(){
        const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML(){
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML(){
        const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML(){
        const {imageStyles: is, alt = '', styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
    
    }
}
 