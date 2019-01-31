import React from 'react';
import { connect } from "react-redux";
import { getFriends, toggleForm, deleteFriend } from '../actions';

import Friend from './Friend';
import CreateFriendForm from './CreateFriendForm';

class FriendsList extends React.Component {

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

    render(){
        return (
            <div className="FriendsList">
                {this.props.fetchingFriends && <p>getting friends list</p>}
                {this.props.error && <p>{this.props.error.message}</p>}
                {this.props.friends && this.props.friends.map(friend => <Friend deleteFriend={this.deleteFriend} friend={friend} key={friend.name + friend.id} />)}                
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

export default connect(mapStateToProps, { getFriends, toggleForm, deleteFriend })(FriendsList);