import image from './assets/image.png'
// import {Block} from './classes/blocks'

const text = `
Cool video and JS lessons here: <a href="youtube.com" target="_blank">YOUtube</a>
`

export const model = [
    // new Block('title', 'Hello world from JS!!!', {
    //     tag: 'h2',
    //     styles: {
    //         background: 'linear-gradient(to right, #ff0099, #493240)',
    //         color: '#fff',
    //         padding: '1.5rem',
    //         'text-align': 'center'
    //     }
    // }),
    // refactoring code after we create a Class (class Block)
    {
        type: 'title', value: 'Hello world from JS!!!', options: {
            tag: 'h2',
            // styles: `background: linear-gradient(to right, #ff0099, #493240); color:#fff; text-align: center; padding: 1.5rem`
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    },
    {
        type: 'text', value: text, options: {
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    },
    {
        type: 'columns', value: [
            'App builded on pure VanilaJS without framework',
            'SOLID, OOP in JS included',
            'JS it`s really realy easy. Try to build UI your own hands'
            ], options: {
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
                }
            }
    },
    {
        type: 'image', value: image, options: {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'This is a image'
        }
    }
]