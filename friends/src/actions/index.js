import axios from 'axios';

export const getFriends = () => dispatch => {
    dispatch({ type: 'FETCHING_FRIENDS'});
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: 'FETCHING_FRIENDS_SUCCESS', payload: res.data }))
        .catch(err => dispatch({ type: 'FETCHING_FRIENDS_FAILURE', payload: err}))
}

export const addFriend = friend => dispatch => {
    axios 
        .post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({
            type: 'ADD_FRIEND',
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const toggleForm = () => ({
    type: 'TOGGLE_FORM'
})