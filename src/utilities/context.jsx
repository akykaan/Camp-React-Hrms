import React, { Component } from 'react'
import LoginService from "../services/loginService";

const UserContext=React.createContext();
// provider, consumer

export class UserProvider extends Component {
    
    state={
        users:[
            {
                id:1,
                name:"furkan kaan akyüz"
            },
            {
                id:2,
                name:"ozan akyüz"
            }
        ]
    }

    render() {
        return (
           <UserContext.Provider value={this.state}>
                {this.props.children}
           </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;