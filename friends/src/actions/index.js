import axios from 'axios';

export const getFriends = () => dispatch => {
    dispatch({ type: 'FETCHING_FRIENDS'});
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: 'FETCHING_FRIENDS_SUCCESS', payload: res.data }))
        .catch(err => dispatch({ type: 'FETCHING_FRIENDS_FAILURE', payload: err}))
}

export const addFriend = friend => ({
    type: 'ADD_FRIEND',
    payload: friend
})