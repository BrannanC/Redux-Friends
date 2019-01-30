import React from 'react';
import { connect } from "react-redux";
import { getFriends } from '../actions';

import Friend from './Friend';
import CreateFriendForm from './CreateFriendForm';

class FriendsList extends React.Component {
    state = {
        displayForm: false
    }

    componentDidMount(){
        this.props.getFriends();
    }

    toggleForm = () => {
        this.setState(prevState => ({
            displayForm: !prevState.displayForm
        }))
    }

    render(){
        return (
            <div className="FriendsList">
                {this.props.fetchingFriends && <p>getting friends list</p>}
                {this.props.error && <p>{this.props.error.message}</p>}
                {this.props.friends && this.props.friends.map(friend => <Friend friend={friend} key={friend.name + friend.id} />)}                
                {this.state.displayForm ? <div><button onClick={this.toggleForm}>[X]</button><CreateFriendForm /></div> : <button onClick={this.toggleForm}>Add New Friend</button>}
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
    error: state.friendsReducer.error
})

export default connect(mapStateToProps, { getFriends })(FriendsList);