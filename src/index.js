import Todos from "./app.js"

const $app = document.querySelector('#app')
const initialState = [
    {
        id: 1,
        title: '아이템 1'
    }, {
        id: 2,
        title: '아이템 2'
    }, {
        id: 3,
        title: '아이템 3'
    }, {
        id: 4,
        title: '아이템 4'
    }, {
        id: 5,
        title: '아이템 5'
    },
]

const todos = new Todos({ $app, initialState })
