import React from 'react';

const Friend = props => {
    return (
        <div className="Friend">
            {props.friend.name}
            <button onClick={e => props.toggleUpdate(e, props.friend.id)} >{props.toUpdate.id === props.friend.id ? '[X]' : 'Update'}</button>
            <button onClick={e => props.deleteFriend(e, props.friend.id)}>[Delete Friend]</button>
            {props.toUpdate.id === props.friend.id && 
            <form onSubmit={e => props.updateFriend(e, props.toUpdate)} >
                <input type="text" name="name" placeholder="Name..." value={props.toUpdate.name} onChange={props.handleChange} />
                <input type="number" name="age" placeholder="Age..." value={props.toUpdate.age} onChange={props.handleChange} />
                <input type="email" name="email" placeholder="Email..." value={props.toUpdate.email} onChange={props.handleChange} />
                <button type="submit">Update</button>
            </form>}
        </div>
    );
}

export default Friend;