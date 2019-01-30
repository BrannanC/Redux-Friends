import React from 'react';

const Friend = props => {
    return (
        <div className="Friend">{props.friend.name}</div>
    );
}

export default Friend;