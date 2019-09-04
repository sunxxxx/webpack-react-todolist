import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink,withRouter,Redirect } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import Projects from '@src/projects';
import Today from '@src/today';
import Memo from '@src/memo';
import memoInfo from '@src/memoInfo';
import HigherOrder from '@src/HigherOrder';


class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      console.log(prevProps)
    }
    render() {
        return this.props.children
    }
}
withRouter(ScrollToTop);

function NotFound({location}) {
  return (
    <div className="notfound" style={{}}> 
      <img src={require('@img/notfound.jpg')} />
    </div>
    );
}

function ComponentWithRegex({ match }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}

function Test({match}){
  return(
    <div>
      <h2>{match.params.test} is a wrong way</h2>
    </div>
  )
}

function BasicRouter() {
  return (
    <div className="App">
      <header>
        <h1>
          todos
        </h1>
      </header>
      <ScrollToTop>
        <Router>
        <div className="navbar">
          <ul className="nav">
            <li>
              <NavLink exact to="/">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/today">Today</NavLink>
            </li>
            <li>
              <NavLink to="/memo">Memo</NavLink>
            </li>
            <li>
              <NavLink to="/notfound">Notfound</NavLink>
            </li>
            <li>
            <NavLink to="/Higher-Order">Higher-Order</NavLink>
            </li>
          </ul>

          <hr />
          <TransitionGroup>
            <Switch>
              <Route exact path="/" component={Projects} />
              <Route strict path="/today" component={Today} />
              <Route exact path="/memo" component={Memo} />
              <Route path={["/memo/:id","/editMemo/:id"]} component={memoInfo} />
              <Route path="/Higher-Order" component={HigherOrder} />
              {/* <Route path="/:test" component={Test} /> */}
              <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
              <Route path="/notfound" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </TransitionGroup>
        </div>
      </Router>
    </ScrollToTop>
    </div>
    );
}

export default BasicRouter;