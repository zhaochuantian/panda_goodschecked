import Swiper from "swiper";

require("swiper/dist/css/swiper.min.css");

export class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           list : [
                {
                    imgSrc : "http://img1.lukou.com/static/p/commodity/img/20180409-160905.jpeg"
                },
                {
                    imgSrc : "http://img1.lukou.com/static/p/commodity/img/20180517-120525.jpeg"
                },
           ],
           cName : "pic",
           hasPag : 2
            
        }
      
    }

    // getState(){
    //     return this.state;
    // }
    // setBanner(list){ //提供修改banner数据的方法
    //     this.state.bannerList = list;
    //     //开始更新视图
    //     this.emit("update");
    // }

    componentDidMount(){

      
        if(this.state.list.length != 0){

            let option = {loop:true,autoplay: 1000};
    
            if(this.state.hasPag){
                option.pagination = {
                    el: '.swiper-pagination'
                }
            }
    
           
            let sname = this.state.cName ? `.${this.state.cName}` : ".banner";
    
            this.swiper = new Swiper(sname,option);
        }

     
    }
    
    componentDidUpdate(){
        
        if(this.state.list.length != 0){
            let option = {loop:true,autoplay: 1000};
            
            if(this.state.hasPag){
                option.pagination = {
                    el: '.swiper-pagination'
                }
            }
    
    
            let sname = this.state.cName ? `.${this.state.cName}` : ".banner";
    
            this.swiper = new Swiper(sname,option);
        }

    }
    

    render(){
        let sl = this.state.list.map((ban,i)=>{
            return (
                <div className="swiper-slide" key={i}>
                    <img src={ban.imgSrc} />
                </div>
            )
        }) 

        //如果hasBtn的值为true  则让banner的html结构上存在分页器
        let pag = this.state.hasPag ? <div className="swiper-pagination"></div> : null;
        
        return (
            <div className={"banner swiper-container "+this.state.cName}>
                <div className="swiper-wrapper">
                    {sl}
                </div>
                {pag}
            </div>
        )
    }
}