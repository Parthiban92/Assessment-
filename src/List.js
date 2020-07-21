import React, { Component } from 'react';

export default class List extends React.Component {

    constructor(props){
        super(props);
        this.state={  
                       movie_array:[],
                       storage_list:'',
                       val: '',
                      header: 'Movie List',
                       form: {
                           
                           s: '',
                           y: '',
                           apikey: "2c96c239"
                            }, 
                        
                    }
 
        console.log(props)
    }



    add_favourite = (e) => {
       
        if (e.target.checked) {
            //append to array
            this.setState({
                storage_list: this.state.storage_list.concat(e.target.value)
            })
        } else {
            //remove from array
            this.setState({
                storage_list: this.state.storage_list.filter(function (val) { return val !== e.target.value })
            })
        }
        console.log(this.state.storage_list)
    }
  

      FormData = (event) => {

          this.setState({form: Object.assign({}, this.state.form,
              { [event.target.name]: event.target.value })
              
          })
          localStorage.setItme("favourite_list", this.state.form);
                           }

      handleSubmit = (e) => {
          e.preventDefault();
          console.log(this.state.form)
          let query = Object.keys(this.state.form).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(this.state.form[k])).join('&');
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
                <fieldset> <legend>Moive List</legend>
                </fieldset>
                          <div className="col-lg-12">
                              <div className="bs-component">
                                  <form className="well form-search" id="search-by-title-form" onsubmit="return false;">
                                  <fieldset> <legend></legend>
                                  </fieldset>
                                  <div>
                                      <label className="control-label" >Title:</label>
                                      <input type="text" id="s" name="s" className="input-small" onChange={ this.FormData } />
                                      &nbsp;&nbsp;
                                      <label className="control-label" >Year:</label>
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
                                                      onChange={this.add_favourite}
                                                      value={form_data.Title}        />
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
