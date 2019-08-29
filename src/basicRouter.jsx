import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink,withRouter } from "react-router-dom";
import All from './all';
import Today from './today';
import Memo from './memo';
import memoInfo from './memoInfo';


class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {

    }
    render() {
        return this.props.children
    }
}
withRouter(ScrollToTop);

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
              <NavLink exact to="/">All</NavLink>
            </li>
            <li>
              <NavLink to="/today">Today</NavLink>
            </li>
            <li>
              <NavLink to="/memo">Memo</NavLink>
            </li>
          </ul>

          <hr />
      
          <Route exact path="/" component={All} />
          <Route path="/today" component={Today} />
          <Route exact path="/memo" component={Memo} />
          <Route path={["/memo/:id","/editMemo/:id"]} component={memoInfo} />
        </div>
      </Router>
    </ScrollToTop>
    </div>
    );
}

export default BasicRouter;