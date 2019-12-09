import React, { Component } from 'react';

import UserProfileCard from './components/UserProfileCard'
import { isTemplateElement } from '@babel/types';

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
        <div class="ui grid">
          {this.state.users.map(user => {
            return <UserProfileCard name={user.name} />
          })}
        </div>
      </div>
    );
  }
}
