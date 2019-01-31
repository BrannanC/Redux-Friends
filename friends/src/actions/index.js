import axios from 'axios';

export const getFriends = () => dispatch => {
    dispatch({ type: 'FETCHING_FRIENDS'});
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: 'FETCHING_FRIENDS_SUCCESS', payload: res.data }))
        .catch(err => dispatch({ type: 'FETCHING_FRIENDS_FAILURE', payload: err}))
}

export const addFriend = friend => dispatch => {
    const newFriend = {...friend, id: Date.now()};
    axios 
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => dispatch({
            type: 'ADD_FRIEND',
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const deleteFriend = id => dispatch => {
    axios 
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => dispatch({
            type: 'DELETE_FRIEND',
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const toggleForm = () => ({
    type: 'TOGGLE_FORM'
})