import React from 'react'
import { withRouter } from 'next/router'

class User extends React.Component {
  static route = '/users/:id';

  render () {
      console.log(this.props.router.query.id)
    return <div>{`The user id is: ${this.props.router.query.id}`}</div>
  }
}

export default withRouter(User)