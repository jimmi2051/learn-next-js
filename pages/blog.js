// pages/blog.js
import React from 'react'
import {Router} from '../routes'
// import { Router, Route, Link } from 'react-router'
export default class Blog extends React.Component {
  componentDidMount(){
      console.log(this.props)
  }
  handleClick  = () =>{
    // With route name and params
    Router.pushRoute('blog', {slug: 'hello-world'})
    // With route URL
    Router.pushRoute('/blog/hello-world')
  }
  render () {
    return (
      <div>
        <div>{this.props.url.query.slug}</div>
        <button onClick={this.handleClick}>Home</button>
      </div>
    )
  }
}