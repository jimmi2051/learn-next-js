import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
const list = [
  { name: 'post', pattern: '/posts/:id',page:"/post" },
  { name: 'user', pattern: '/users/:id',page:'/user' },
  {
      name: 'about',
      pattern: '/abouts',
      page: '/about'
  }
]
export default function RouteDynamic() {
  return (
    <Switch>
      {list.map((item,index)=>(
        <Route exact path={item.pattern} component={item.name}/>
      ))}
    </Switch>
  )
}