import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './List';
import UserList from './Search';
import TextBook from './TextBook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            header: 'Assesesment',
        }
       // console.log(socialMediaList)
    }




  render() {
    return (
        <Router>
    <div>

   
    </div>

     <div className="container-fluid text-center">    
       <div className="row content">
         <div className="col-sm-8 text-left"> 
           
            <Switch>
                     <Route exact path="/" render={() => { return (<Redirect to="/Search" />)}}/>
                       <Route exact path="/UserList" component={UserList}></Route>
                      <Route exact path="/MovieList" component={MovieList}></Route>
                     <Route exact path="/Search" component={TextBook}></Route>
           </Switch>
        </div>
    </div>
</div>


</div>
  </Router>
    );
  }
}


export default Form;