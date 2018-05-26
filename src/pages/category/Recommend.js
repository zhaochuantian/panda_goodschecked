import { HomeCategory } from "../../components/Header";
import { Search } from "../../components/Search";
import { HomeSort } from "../../components/Footer";

export class Recommend extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        console.log(1);
    }

    render(){
        return (
            <div>
                <Search />
                <HomeCategory />
                <h1>今日推荐</h1>
                <HomeSort />
            </div>
        )
    }
}