import React, { Component } from 'react';
import data from './maths.json';
const newdata = data;
export default class TextBook extends React.Component {

    constructor() {
        
        super();

       

    }

    render() {
     //   console.log(newdata)
        return <div>
            <ul>
                <li>
                    {newdata.map(k => {
                        //console.log(k)
                        {
                            Object.keys(k).map(ch => {
                               // console.log(ch)
                              
                                    {Object.keys(ch).map(l => {
                                       // return <li>{{l}}</li>
                                    })}
                               

                            })}
                    })}
                </li>
            </ul>
            </div>

     
    }

}

// JavaScript source code
