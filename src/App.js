//项目的根组件
const count = 100

const list = ['a', 'b', 'c']
const flag = true
const loading = true
const type = 2;
function getName() {
    return 'jack'
}

function ctrl() {
    if (type === 1) {
        return <div>单个</div>
    } else if (type === 2) {
        return <div>两个</div>
    } else {
        return <div>未知</div>
    }
}

// 定义组件
// function Button() {
    // 业务逻辑 组件逻辑
//     return <button>click me!</button>
// }

const Button = () => {
    return <button>click me!</button>
}

function App() {

    const handleClick = () => {
        console.log('on click')
    }

    // 事件参数e
    const handleClickE = (e) => {
        console.log('on click e', e)
    }

    // 自定义参数
    const handleClickName = (name) => {
        console.log('我是', name)
    }

    const handleClickNameAndE = (name, e) => {
        console.log('我是', name, e)
    }


    return (
        <div className="App">
            this is app
            {'this is react'}
            {count}
            {getName()}
            {new Date().getDate()}
            <div style={{color:'red'}}>
                this is red
            </div>
            {/* 渲染列表 */}
            {/*循环结构需要添加一个独一无二的key,key是react用来提升更新性能的*/}
            <ul>
                {list.map(item => <li key={item}> {item} </li>)}
            </ul>

            {/*单条控制是否展示*/}
            {flag && <span>Loading...</span>}
            {/*多种情况 使用三元运算符控制展示*/}
            {loading ? <span>Loading...</span> : <span> noLoading....</span>}

            {/*通过if-else判断展示控制*/}
            {ctrl()}

            {/*按钮点击事件*/}
            <button onClick={handleClick}>click</button>

            {/*事件参数点击传参*/}
            <button onClick={handleClickE}>clickE</button>

            {/*自定义参数调用 需要添加行参调用*/}
            <button onClick={() => handleClickName('jack')}>jack</button>

            {/*同时传递自定义参数和事件实参*/}
            <button onClick={(e) => handleClickNameAndE('bob', e)}>bobAnde</button>

            {/*自闭和*/}
            <Button/>

            {/*成对标签*/}
            <Button></Button>
        </div>
    );
}

export default App;
