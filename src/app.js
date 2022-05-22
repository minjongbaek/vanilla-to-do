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
            <input type="text" id="add-item-input" placeholder="아이템 추가">
            ${this.state.map(({id, title}) => `
            <li data-id="${id}">
                ${title}
                <button class='delete-btn'>아이템 삭제</button>
            </li>`).join('')}
        `
        this.setEvent()
    }

    this.setEvent = () => {
        // 아이템 추가 인풋에 click 이벤트 리스너 부여
        this.$target.querySelector('#add-item-input').addEventListener('keyup', ({key, target}) => {
            if (key !== 'Enter') return
            this.setState([...this.state, {id: new Date().getTime(), title: `${target.value}`}])
        })

        // 아이템 삭제 버튼에 click 이벤트 리스너 부여
        this.$target.querySelectorAll('.delete-btn').forEach(deleteBtnDOM => {
            deleteBtnDOM.addEventListener('click', ({ target }) => {
                const state = [...this.state].filter(item => Number(target.parentNode.dataset.id) !== item.id)
                this.setState(state)
            })
        })
    }

    this.render()
}