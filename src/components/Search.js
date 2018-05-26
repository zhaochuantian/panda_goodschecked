
export class Search extends React.Component{
    constructor(props){
        super(props);
        //默认搜索
        this.state = {
            text : "短袖  男"
        }
    }
    render(){
        return (
            <div className="search_box">
                {/* 男女切换 */}
                <div className="change_box">
                    <div className="man">男</div>
                    <div className="woman">女</div>
                </div>
                {/* 搜索栏 */}
                <div className="input_box">
                    <span className="iconfont icon-sousuoicon"></span>
                    <span className="word">{this.state.text}</span>
                    {/* <input type="text" placeholder={this.state.text} /> */}
                </div>
            </div>
        )
    }

}