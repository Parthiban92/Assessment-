import React, { Component } from 'react';

export default class List extends React.Component {

    constructor(props){
        super(props);
        this.state={  
                       movie_array:[],
                       isChecked: true,
                        val:'',
                       s:'',
                        y:'',
      
                    }
 
        console.log(props)
    }



       add_favourite = (event) => {
                       this.setState({ isChecked: !this.state.isChecked});
                    //    alert(this.state.isChecked)
                        if(this.state.isChecked == false)
                        {
                            localStorage.setItem('myValueInLocalStorage', event.target.value);
                        }else{
                           localStorage.setItem('myValueInLocalStorage', '');
                        }
                    }
  

      FormData = (event) => {

                           this.setState({  [event.target.name]: event.target.value })
                           }

      handleSubmit = (e) => {
                       e.preventDefault();
                        let params = {
                                       "s": this.state.s,
                                       'y':this.state.y,
                                        "apikey": "2c96c239"
                                     };

                         let query = Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
                         let url = 'http://www.omdbapi.com/?' + query;
                         fetch(url)
                              .then(data => {
                                   let b = data.json()
                                      console.log(b)
                                   return  b
                              })
                              .then((movie_list) => {
                                  console.log(movie_list.Search)
                                   this.setState({ movie_array: movie_list.Search })
                                  console.log(movie_list)
                                 }).catch(function (error) {
                                  console.log('request failed', error)
                              });

                                   

                             }
  render() {

    return (
            <div>
                  <div className="row">
                          <div className="col-lg-12">
                              <div className="bs-component">
                                  <form className="well form-search" id="search-by-title-form" onsubmit="return false;">
                                  <fieldset> <legend></legend>
                                  </fieldset>
                                  <div>
                                      <label className="control-label" for="s">Title:</label>
                                      <input type="text" id="s" name="s" className="input-small" onChange={ this.FormData } />
                                      &nbsp;&nbsp;
                                      <label className="control-label" for="y">Year:</label>
                                      <input type="text" id="y" name="y" className="input-small" onChange={ this.FormData }  />
                                      &nbsp;&nbsp;
                                      
                                      &nbsp;&nbsp;
                                      <button id="search-by-title-button" type="button" onClick={this.handleSubmit}  className="btn-sm btn-primary">Search</button>
                                      <button id="search-by-title-reset" type="reset" className="btn-sm">Reset</button>
                                  </div>
                                  
                                  </form>
                              </div>
                          </div>
                      </div>
                           <table className=" table table-striped">
                              <thead>
                                            <tr>
                                               <th>Favourite</th>
                                               <th>Title</th>
                                               <th>Year</th>
                                               <th>ID</th>
                                            </tr>
                             </thead>
                               <tbody>
                                      {this.state.movie_array && this.state.movie_array.map((form_data) => 
                                                          (
                                              <tr>
                                                  <td><input type="checkbox"
                                                        checked={this.state.isChecked}
                                                        onChange={this.toggleChange}
                                                        value={this.state.movie_array.Title}        />
                                                   </td>
                                                  <td>{form_data.Title}</td>
                                                  <td>{form_data.Year}</td>
                                                  <td>{form_data.imdbID}</td>
                                               </tr>
                                                           
                                ))}
                                       
                                  </tbody>     
                                     
                            </table>
              </div>
    );
  }
 
}
