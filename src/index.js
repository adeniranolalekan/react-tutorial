import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './Greeting'
import {Toggle} from './Toggle'
import LoginControl from "./LoginControl";
//import App from './App';
import * as serviceWorker from './serviceWorker';
import listItems from "./List";
import NumberList from "./List";
import Blog from "./Blog";
import NameForm from "./NameForm";
import TemperatureCalculator from "./TemperatureCalculator";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount() {
        this.timerID=setInterval(()=>this.tick(),1000);
    }
    componentWillMount() {
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({date:new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}
function FormattedDate(props){
    return <h2>It is {props.date.toLocaleTimeString()}</h2>
}
function App(){
    return (
        <div>
        <Clock />
    <Clock />
    <Clock />
        </div>
    )
}
//const numbers =[1,2,3,4,5];
const posts=[
    {id: 1, title: 'Hello World', content: 'Welcome to learning React'},
    {id: 2, title: 'Installation', content: 'You can install React from npm'}
]
ReactDOM.render(

    //<Toggle />,
  //  <Greeting isLoggedIn={false}/>,
   // <Greeting isLoggedIn={true}/>,
  // <NumberList numbers={numbers}/>,
   // <Blog posts={posts} />,
    <TemperatureCalculator/>,
    document.getElementById('root'));

//setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
