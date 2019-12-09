import React, { Component } from 'react'

import 

export default class UserProfileCard extends Component {

    render() {
        return(
            <div>
                <div class="ui card">
                    <div class="image"><img src={this.props.img}/></div>
                    <div class="content">
                        <a class="header">{this.props.name}</a>
                        <div class="meta"><span class="date">Joined in 2013</span></div>
                        <div class="description">Kristy is an art director living in New York.</div>
                    </div>
                    <div class="extra content"><a><i class="user icon"></i>22 Friends</a></div>
                </div>  
            </div>
        )
    }
}