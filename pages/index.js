// pages/index.js
import React from 'react'
import { Link } from '../routes'
import { Route, Redirect, Switch } from "react-router-dom";
const list = [
  { name: 'post', id: 1, title: 'Luke Skywalker' },
  { name: 'post', id: 2, title: 'C-3PO' },
  { name: 'post', id: 3, title: 'A New Hope' },
  { name: 'post', id: 4, title: 'The Empire Strikes Back' },
  { name: 'post', id: 5, title: "abc" },
]
const index = () => {
  return (
    <>
      <ul>
        {list && list.map((item, index) =>
          (
            <li key={index}>
              <Link route={item.name} id={item.id}><a>{item.title}</a></Link>        
            </li>
          )
        )}
        {/* <li><Link route="post" id="1"><a>Luke Skywalker</a></Link></li>
      <li><Link route="post" id="2"><a>C-3PO</a></Link></li>
      <li><Link route="user" id="1"><a>A New Hope</a></Link></li>
      <li><Link route="user" id="2"><a>The Empire Strikes Back</a></Link></li>
      <li>
        <Link route="about" >
          <a>The Empire Strikes Back and Luke Skywalker</a>
        </Link>
      </li> */}
      </ul>
    </>
  )
}
export default index