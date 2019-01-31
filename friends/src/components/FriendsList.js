import React from 'react';
import { connect } from "react-redux";
import { getFriends, toggleForm, deleteFriend, updateFriend } from '../actions';

import Friend from './Friend';
import CreateFriendForm from './CreateFriendForm';

class FriendsList extends React.Component {
    state = {
        toUpdate: {
            name: '',
            age: '',
            email: '',
            id: ''
        }
    }

    componentDidMount(){
        this.props.getFriends();
    }

    toggleForm = () => {
        this.props.toggleForm();
    }

    deleteFriend = (e, id) => {
        e.preventDefault();
        this.props.deleteFriend(id);
    }

    updateFriend = (e, friend) => {
        e.preventDefault();
        this.props.updateFriend(friend);
        this.setState({
            toUpdate: {
                name: '',
                age: '',
                email: '',
                id: ''
            }
        })
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            toUpdate: {
                ...prevState.toUpdate,
                [name]: value
            }
        }))
    }

    toggleUpdate = (e, id) => {
        e.preventDefault();
        this.setState(prevState => ({
            toUpdate: {...prevState.toUpdate, id: prevState.toUpdate.id === id ? '' : id}
        }))
    }

    render(){
        return (
            <div className="FriendsList">
                {this.props.fetchingFriends && <p>getting friends list</p>}
                {this.props.error && <p>{this.props.error.message}</p>}
                {this.props.friends && this.props.friends.map(friend => <Friend 
                                                                deleteFriend={this.deleteFriend} 
                                                                friend={friend} 
                                                                key={friend.name + friend.id} 
                                                                handleChange={this.handleChange}
                                                                toUpdate={this.state.toUpdate}
                                                                updateFriend={this.updateFriend}
                                                                toggleUpdate={this.toggleUpdate}
                                                            />)}                
                {this.props.displayForm ? <div><button onClick={this.toggleForm}>[X]</button><CreateFriendForm /></div> : <button onClick={this.toggleForm}>Add New Friend</button>}
            </div>
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
    displayForm: state.friendsReducer.displayForm,
    error: state.friendsReducer.error
})

export default connect(mapStateToProps, { getFriends, toggleForm, deleteFriend, updateFriend })(FriendsList);