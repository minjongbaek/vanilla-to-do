export default function Todos({ $app, initialState }) {
    this.state = initialState

    // Todos 컴포넌트를 렌더링 할 DOM을 this.$target 이라는 이름으로 생성
    this.$target = document.createElement('ul')
    $app.appendChild(this.$target)

    // state를 전달 받아 현재 컴포넌트의 state를 변경 후, 다시 렌더링 하는 함수
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    // 현재 컴포넌트의 state를 기준으로 렌더링하는 함수
    this.render = () => {
        this.$target.innerHTML = `
            ${this.state.map(item => `<li>${item}</li>`).join('')}
            <button id="add-button">아이템 추가</button>
        `
        this.setEvent()
    }

    this.setEvent = () => {
        // 아이템 추가 버튼에 click 이벤트 리스너 달기
        const addButtonDOM = document.querySelector('#add-button')
        addButtonDOM.addEventListener('click', () => {
            this.setState([...this.state, `item${this.state.length + 1}`])
        })
    }

    this.render()
}