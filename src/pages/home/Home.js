import { HomeCategory } from "../../components/Header";
import { Search } from "../../components/Search";
import { HomeSort } from "../../components/Footer";
import { connect } from "react-redux";
import { Banner } from "../../components/Banner";
import { Link } from "react-router-dom"
import { GoodsList } from "../../components/Goods";
import { goodslistUpdate } from "../../actions"

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let goodsList = this.props.goodsList.map((goods,i)=>{
            return (
                <li key={i}>
                    <Link to="/detail">
                        <div className="liImg"><img src={goods.goodsImg} /></div>
                        <p>{goods.goodsName}</p>
                        <p>¥<span>{goods.goodsPrice}</span>   已售：<span>{goods.goodsBuy}</span></p>
                    </Link>
                </li>
            )
        })

        return (
            <div>
                <Search />
                {/* 导航栏 */}
                <HomeCategory />
                {/* 轮播图 */}
                <div className="bgBox">
                    <Banner list={this.props.bannerList} hasPag={this.props.hasPag} />


                    {/* 9块9包邮、特价 */}
                    <div className="middleProduct">
                    {/* 左边 */}
                    <Link to = "/pinkage" className="left">
                        <div className="pinkage">
                            <p>9块9包邮</p>
                            <p>保你不亏</p>
                            <div className="imgPost">
                                <img src="http://img1.lukou.com/static/p/commodity/img/20180226-162136.jpeg" />
                            </div>
                        </div>
                    </Link>
                    {/* 右边 */}
                    <div className="right">
                    {/* 上面 */}
                        <Link to = "/discount" className="top">
                            <div className="discount">
                                <div className="second">
                                    <p>大额券专区</p>
                                    <p>秒杀一折起</p>
                                </div>
                                
                                <div className="imgMoney">
                                    <img src="http://img1.lukou.com/static/p/commodity/img/20180226-162153.jpeg" />
                                </div>
                            </div>
                        </Link>
                    {/* 下面 */}
                        <Link to = "/grilcloth" className="bottom">
                            <div className="grilcloth">
                                <div className="gril">
                                    <p>特价女装</p>
                                    <p>低至9块9</p>
                                </div>
                                
                                <div className="imgGril">
                                    <img src="http://img1.lukou.com/static/p/commodity/img/20180508-121825.jpeg" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    </div>
                    

                    {/* 中间的每日排行榜 */}
                    <div className="bg">
                        <div className="dailySort">
                            <div className="seeAll">
                                <p><span>每日排行榜</span></p>
                                <Link to="/seeall">
                                    <span>查看全部</span><span className="iconfont icon-jiantou"></span>
                                </Link>
                            </div>
                            {/* 滚动的图片导航 */}
                            <div className="daily">
                                <ul>
                                    {goodsList}
                                </ul>
                            </div>
                        </div>
                        {/* 更多优惠栏 */}
                        <div className="more">
                            <p><span className="iconfont icon-fengexianzuo"></span><span className="iconfont icon-icon2 left"></span>更多优惠更新中 (ง •̀_•́)ง<span className="iconfont icon-icon2 right"></span><span className="iconfont icon-fengexianyou"></span></p>
                        </div>

                        <GoodsList />
                    </div>
                </div>

                {/* 底部栏 */}
                <HomeSort />
            </div>
        )
    }
}
// 加载数据
let mapStateToProps = ({goods}) => ({goodsList:goods.goodsList});
let mapDispatchToProps = dispatch => ({
    // 给Action传递方法
})
export const HomeController = connect(mapStateToProps, mapDispatchToProps)(Home)