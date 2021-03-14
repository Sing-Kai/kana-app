
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
          <div>
            <Link to='/quiz'>Start Quiz</Link>
          </div>
          <div>
            <Link to='/settings'>Settings</Link>
          </div>
      </div>
    )
  }
}
