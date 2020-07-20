import React, { Component } from 'react';
import data from './maths.json';
const newdata = data;
export default class TextBook extends React.Component {

    constructor() {
        
        super();

       

    }

    render() {

        return (
            <div>
              
                <ul>
                    {newdata.map((todo, index) => (

                       

                        Object.values(todo).map((val, key) => (
                          

                            Object.values(val).map((val2, key1) => (
                                Object.values(val2).map((val3, key3) => (
                                   
                                    
                                        Object.values(val3).map((todos, index) => (
                                            <li>{todos}</li>
                                            ))
                                    

                                ))
                            ))
                            ))
                               
                            

                                
                        
                        
                    ))}
                </ul>
                
            </div>

        );
    }

}

// JavaScript source code
