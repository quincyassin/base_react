//导入样式
import './style.css'

const style = {
    color: 'blue',
    fontSize: '50px',
}

function SvgStyle() {
    return (
        <div>
            {/*行内样式控制*/}
            <span style={{color: 'blue', fontSize: '50px'}}>this is blue</span>
            <span style={style}>this is blue</span>
            {/*通过class类名控制*/}
            <span className="foo">this is green</span>
        </div>

    )
}

export default SvgStyle