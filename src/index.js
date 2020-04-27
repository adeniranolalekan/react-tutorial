import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './lessons/Greeting'
import {Toggle} from './lessons/Toggle'
import LoginControl from "./lessons/LoginControl";
//import App from './App';
import * as serviceWorker from './serviceWorker';
import listItems from "./lessons/List";
import NumberList from "./lessons/List";
import Blog from "./lessons/Blog";
import NameForm from "./lessons/NameForm";
import TemperatureCalculator from "./lessons/TemperatureCalculator";
import FilterableProductTable from "./assignment/FilterableProductTable";

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
/*const posts=[
    {id: 1, title: 'Hello World', content: 'Welcome to learning React'},
    {id: 2, title: 'Installation', content: 'You can install React from npm'}
]*/
const PRODUCTS=[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
ReactDOM.render(

    //<Toggle />,
  //  <Greeting isLoggedIn={false}/>,
   // <Greeting isLoggedIn={true}/>,
  // <NumberList numbers={numbers}/>,
   // <Blog posts={posts} />,
   // <TemperatureCalculator/>,
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('root'));

//setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
