import Todos from "./app.js"

const $app = document.querySelector('#app')
const todos = new Todos({ $app, initialState: ['item1', 'itme2', 'item3', 'item4'] })
