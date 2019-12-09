import React, { Component } from 'react';

import UserProfileCard from './components/UserProfileCard'

export default class extends Component {
  state = {
    users: [],
    hasErrors: false
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => this.setState({ users: res }))
    .catch(() => this.setState({ hasErrors: true }))
    }


  render() {
    return (
      <div>
        <div class="ui grid" style={{padding: '50px'}}>
          {this.state.users.map(user => {
            return (
              <UserProfileCard 
                name={user.name} 
                img={"https://api.adorable.io/avatars/300/" + user.id}
                email={user.email}
                description={user.company.catchPhrase}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
