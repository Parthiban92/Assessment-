import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Search from './Search';
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

       // console.log(socialMediaList)
    }




  render() {
    return (
        <Router>
    <div>


      <div className="container-fluid">
          <div className="topnav">
          <a  href="#home">Movie</a>
           
      </div>
   
    </div>

     <div className="container-fluid text-center">    
       <div className="row content">
         <div className="col-sm-8 text-left"> 
             <Search />
            <Switch>

                      <Route exact path="/Search" component={Search}></Route>
                     <Route exact path="/List" component={List}></Route>
                     <Route exact path="/TextBook" component={TextBook}></Route>
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