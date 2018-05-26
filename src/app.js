import {Provider} from "react-redux"
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import store from "./store"
import {HomeController as Home} from "./pages/home/Home"
import {Woman} from "./pages/category/Woman"
import { Beauty } from "./pages/category/Beauty"
import { Recommend } from "./pages/category/Recommend"


export class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/woman" component={Woman}/>
                        <Route path="/beauty" component={Beauty}/>
                        <Route path="/recommend" component={ Recommend }/>
                        <Redirect from="/" to="/home" exact={ true } />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}