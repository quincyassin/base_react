// 导入useState函数 使用useState实现一个计数器按钮 感觉可以做前台消息通知数量
import {useState} from "react";

function UseState() {
    // 调用useState函数 添加一个初始值（状态变量count）
    // count 状态变量
    // setCount 修改变量值的方法
    const [count, setCount] = useState(0)
    const [user, setUser] = useState({name: 'jack', age: 12})

    // 定义一个事件回调
    const handleClick = () => {
        // 用传入的新值修改count
        // 使用新值重新渲染UI
        setCount(count + 1)
        // user.name = 'bob'

        setUser({
            ...user,
            name: 'bob'
        })

        //只是改count 但是没有使用set函数 ui不会重新渲染
        // count++
        // console.log(count)
    }

    return (
        <div>
            {/*渲染状态值*/}
            <button onClick={handleClick}>{count}</button>
            <button onClick={handleClick}>{user.name}</button>
        </div>
    )
}
export default UseState