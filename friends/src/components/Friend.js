import React from 'react';

const Friend = props => {
    return (
        <div className="Friend">{props.friend.name}<button onClick={e => props.deleteFriend(e, props.friend.id)}>[Delete Friend]</button></div>
    );
}

export default Friend;