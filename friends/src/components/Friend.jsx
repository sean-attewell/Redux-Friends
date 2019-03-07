import React from 'react';

export default class Friend extends React.Component {
    render() {
        const {
            friend,
        } = this.props;

        return (
            <div>
                <div>{friend.name}</div>
                <em>{friend.age}</em>
                <div>{friend.email}</div>
            </div>
        );
    }
}
