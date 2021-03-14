
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
        <h1>Home</h1>
          <Link to='/quiz'>
            <Button>Start Hirigana Revision</Button>
          </Link>            

          {/* <div>
            <Link to='/settings'>
              <Button>Settings</Button>
            </Link>
          </div> */}
      </div>
    )
  }
}
