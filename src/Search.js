import React, { Component } from 'react';

export default class Search extends React.Component {

constructor(){

super();

    this.state = { search_value: '', userList: [], header: 'User List', }

}

  componentDidMount() {
   
      fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ userList: data })
      // alert(this.state.userList)
      // console.log(this.state.userList)

    })
    .catch(console.log)
  }

  handleChange = event =>{

this.setState({ search_value:event.target.value })


}
  render() {

    return (
        <div>
            <fieldset> <legend>Type To Search List</legend>
            </fieldset>
            <label className="control-label" for="s">Title:</label>
                   <input type ="text" onChange={this.handleChange}/>
                <ul>
                  {this.state.userList.filter(user => user.title.toLowerCase().startsWith(this.state.search_value) && this.state.search_value!='').map(filteredPerson => (
                    <li>
                      {filteredPerson.title}
                    </li>
                  ))}
               </ul>
       </div> 
        
    );
  }
 
}

