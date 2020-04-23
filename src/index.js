import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    )
}

function formatDate(props) {
    return (
        <div>props</div>
    )
}

function Comment(props) {
    /* return(
         <div className="Comment">
            <div className="UserInfo">
               <img className="Avatar"
              src={props.user.avatarUrl}
              alt={props.user.name}
               />
             <div className="UserInfo-name">
                 {props.author.name}
             </div>
         </div>
             <div className="Comment-text">
                 {props.text}
             </div>
             <div className="Comment-date">
                 {formatDate(props.date)}
             </div>
         </div>
     )*/
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )

}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    )
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}

//const element=<Welcome name={"Sara"} />
/*function tick() {
    const element = (
        <div>
            <h1> Hello, World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}*/
ReactDOM.render(
    /* <React.StrictMode>
       <App />
     </React.StrictMode>,*/
    <App/>,
    document.getElementById('root'));

//setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
