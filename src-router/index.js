// import React from 'react';
// import ReactDOM from 'react-dom';


// import { BrowserRouter as Router, Route } from 'react-router-dom';

// class About extends React.Component {
//   render() {
//     return (
//       <div>
//         About
//       </div>
//     );
//   }
// }
// class B extends React.Component {
//   render() {
//     return (<div>B</div>);
//   }
// }
// class C extends React.Component {
//   render() {
//     return (<div>C</div>);
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         APP
//         {this.props.children}
//       </div>
//     );
//   }
// }

// ReactDOM.render((
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="/about" component={About} />
//       {/* <Route path="inbox" component={B}>
//         <Route path="messages/:id" component={C} />
//       </Route> */}
//     </Route>
//   </Router>
// ),document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component{
  render() {
    return <h3>About</h3>
  }
}

// const Inbox = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// })

// const Message = React.createClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      {/* <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route> */}
    </Route>
  </Router>
, document.getElementById('root'))