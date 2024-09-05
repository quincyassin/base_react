import './Comment.css';
import {useState} from "react";
import _ from 'loadsh'
import classNames from "classnames";

//定义一个button按钮组件
const BlueButton = () => {
    return <button className='button'>发布</button>
}

const comments = [
    {
        uid: 1,
        comId: 1,
        name: 'jack',
        content: '这是一条评论',
        date: '11-12 11:30',
        goodNumber: 1
    },
    {
        uid: 2,
        comId: 2,
        name: 'hone',
        content: '这是二条评论',
        date: '11-14 11:30',
        goodNumber: 10
    },
    {
        uid: 3,
        comId: 3,
        name: 'wow',
        content: '这是三条评论',
        date: '11-13 11:29',
        goodNumber: 100
    }
];

const user = {
    uid: 1,
    name: 'jack',
    content: '这是一条评论',
    date: new Date(),
    goodNumber: 100
}

//导航栏数据
const tabs = [
    {type: 'hot', text: '最热'},
    {type: 'new', text: '最新'}
]


function Comment() {
    const [commentList, setComment] = useState(_.orderBy(comments, 'goodNumber', 'desc'));
    //删除功能
    const HandlerClick = (comId) => {
        //过滤数据
        setComment(commentList.filter((comment) => comment.uid !== comId))
    }

    //tab切换功能
    //点击谁就记录谁的type
    //通过记录的type和遍历时的type做匹配 控制激活类名显示
    const [type, setType] = useState('hot');
    const TabClick = (type) => {

        //判断当前type是最热还是最新
        if (type === 'hot') {
            setComment(_.orderBy(commentList, 'goodNumber', 'desc'))
        } else {
            setComment(_.orderBy(commentList, 'date', 'desc'))
        }
        setType(type)
    }

    return (
        <div>
            <div>
                <div className='firstDiv'>
                    <span><b>评论 </b>{commentList.length}</span>

                    {tabs.map(item => (
                        <span
                            key={item.type}
                            onClick={() => {TabClick(item.type)}}
                            // className={`nav-item ${type === item.type && 'active'}`}
                            // 使用classNames优化
                            className={classNames('nav-item', {'active': type === item.type})}
                            >
                            {item.text}
                        </span>
                    ))}

                </div>
            </div>

            <div>
                <input className='input' placeholder={'发一条友善的评论'}/>
                <BlueButton/>
            </div>

            <div>
                {/*评论项*/}
                {commentList.map(item => (
                    <div key={item.uid}>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            {item.content}
                        </span>
                        <span>
                            {item.date}
                        </span>
                        <span>
                            点赞数 {item.goodNumber}
                        </span>
                        {item.uid === user.uid && <span onClick={() => HandlerClick(item.comId)}> 删除 </span>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comment;