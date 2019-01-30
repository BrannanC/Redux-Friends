
const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  }

  export const friendsReducer = (state = initialState, action) => {
    //   console.log(action.payload)
      switch (action.type){
        case 'FETCHING_FRIENDS':
            return {
                ...state,
                fetchingFriends: true,
                error: null
        }
        case 'FETCHING_FRIENDS_SUCCESS':
            return {
                ...state,
                friends: action.payload,
                error: null,
                fetchingFriends: false,
                friendsFetched: true
        }
        case 'FETCHING_FRIENDS_FAILURE':
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false
        }
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: [...state.friends, action.payload]
            }
        default:
            return state;
      }
  }