import React from 'react'
import { List, ListItem } from 'material-ui/List'

const style = {
    header: {
        textAlign: 'center'
    },
    userContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
    }
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

class FetchUsers extends React.Component {

    state = {
        users: null
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    }



    render() {
        return (
            <List>
                <h1
                    style={style.header}
                >Fetching Users</h1>
                {this.state.users &&
                    this.state.users.map &&
                    this.state.users.map(user => (
                        <ListItem
                            style={style.userContainer}
                        >
                            <h3>
                                {user.name.first.capitalize()}
                                {' '}
                                {user.name.last.capitalize()}
                            </h3>
                            <img alt="User"
                                src={user.picture.thumbnail} />
                            <p>Email: {user.email}</p>
                        </ListItem>
                    ))}
            </List>
        )
    }
}

export default FetchUsers