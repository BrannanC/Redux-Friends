import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class CreateFriendForm extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFriend = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state);
    }

    render(){
        return (
            <form onSubmit={this.addFriend} >
                <input type="text" name="name" placeholder="Name..." value={this.state.name} onChange={this.handleChange} />
                <input type="number" name="age" placeholder="Age..." value={this.state.age} onChange={this.handleChange} />
                <input type="email" name="email" placeholder="Email..." value={this.state.email} onChange={this.handleChange} />
                <button type="submit">Add Friend</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    friendsSaved: state.friendsReducer.friendsSaved,
    savingFriends: state.friendsReducer.savingFriends,
    updatingFriend: state.friendsReducer.updatingFriend,
    friendUpdated: state.friendsReducer.friendUpdated,
    deletingFriend: state.friendsReducer.deletingFriend,
    friendDeleted: state.friendsReducer.friendDeleted,
    error: state.friendsReducer.error
})

export default connect(mapStateToProps, { addFriend })(CreateFriendForm);