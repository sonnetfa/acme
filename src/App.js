import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import notFound from './components/notFound'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  componentDidMount() {
    var x = window.matchMedia("(max-width: 48rem)")
    if(x.matches){
      this.setState({isSidebarOpen:false})
    }
  }
  toggleSidebar() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  }
  render() {
    return (
      <div className="d-flex w-100">
        {this.state.isSidebarOpen ?
          <Sidebar></Sidebar>
          : ''}
        <div className='app-content w-100'>
          <Header isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar}></Header>
          <div className={this.state.isSidebarOpen ? 'route-pages negative-margin' : 'route-pages'}>
            <Router>
              <Switch >
                <Route exact path="/" component={dashboard} />
                <Route path="*" component={notFound} />
              </Switch>
            </Router>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
