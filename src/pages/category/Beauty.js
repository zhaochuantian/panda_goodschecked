import { HomeCategory } from "../../components/Header";
import { Search } from "../../components/Search";
import { HomeSort } from "../../components/Footer";

export class Beauty extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(1);
        return (
            <div>
                <Search />
                {/* 导航栏 */}
                <HomeCategory />
                <h1>55</h1>
                <HomeSort />
            </div>
        )
    }
}