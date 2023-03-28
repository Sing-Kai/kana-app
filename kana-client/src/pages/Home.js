
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Button} from '../components/common'


export default class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Hirigana and Katagana Practise</h1>
        </div>
        <div>
          <Link to='/quiz'>
            <Button>Start Revision</Button>
          </Link> 
        </div>
        <div>
          <Link to='/settings'>
            <Button>Settings</Button>
          </Link>
        </div>
      </div>
    )
  }
}
