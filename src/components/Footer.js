import { NavLink } from "react-router-dom"
import { sortUpdate } from "../actions"
import {connect} from "react-redux"


class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let bottomList = this.props.bottomList.map((sort,i)=>{
            return (
                <li key={ i }>
                <NavLink to={sort.path} className="sort">
                    <div className={"iconfont "+sort.icon}></div>
                    <p>{sort.text}</p>
                </NavLink>
            </li>
            )
        })

        return (
            <footer>
                <ul>
                    {bottomList}
                </ul>
            </footer>
        )
    }
}

// 加载数据
let mapStateToProps = ({sort}) => ({bottomList:sort.bottomList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const HomeSort = connect(mapStateToProps,mapDispatchToProps)(Footer);