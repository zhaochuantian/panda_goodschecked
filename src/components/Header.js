import { NavLink } from "react-router-dom"
import { categoryUpdate } from "../actions"
import {connect} from "react-redux"


class Header extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let navList = this.props.navList.map((category,i)=>{
            return (
                <li key={i}>
                    <NavLink to = {category.path}   className="category" activeClassName = "active">
                        <p >{category.name}</p>
                    </NavLink>
                </li>
            )
        })
        return(
            <div className="nav">
                {/* 今日推荐 */}
                <p  className="recommend"  >
                    <NavLink to = "/recommend" activeClassName = "active">今日推荐</NavLink>
                </p>
                {/* 中间分类 */}
                <div className= "navmove">
                    <ul>
                        {navList}
                    </ul>
                </div>
                {/* 点击分类 */}
                <div className = "category_check">
                    <span className="iconfont icon-fenlei"></span>
                </div>

            </div>
        )
    }
    
}

// 加载数据
let mapStateToProps = ({category}) => ({navList:category.navList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const HomeCategory = connect(mapStateToProps,mapDispatchToProps)(Header);