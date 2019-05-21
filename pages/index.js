// pages/index.js
import React from 'react'
import { Link } from '../routes'

const index = () => {
  return (
    <ul>
      <li><Link route="post" id="1"><a>Luke Skywalker</a></Link></li>
      <li><Link route="post" id="2"><a>C-3PO</a></Link></li>
      <li><Link route="user" id="1"><a>A New Hope</a></Link></li>
      <li><Link route="user" id="2"><a>The Empire Strikes Back</a></Link></li>
      <li>
        <Link route="about" >
          <a>The Empire Strikes Back and Luke Skywalker</a>
        </Link>
      </li>
    </ul>
  )
}
export default index