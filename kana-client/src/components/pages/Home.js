
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {Button} from '../common'
import Words from './Words'
import Page from '../layout/Page';

const Home = () => {

    return (
      <Page>
        <div>
          <h1 className='text-2xl font-bold'>Hirigana and Katagana Practise</h1>
        </div>
        <div className='m-1 p-1 justify-items-center grid grid-cols-12 gap-1 m-10'>
          <Words/>
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
      </Page>
    )
}

export default Home
