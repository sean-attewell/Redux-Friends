import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFriendsAsync } from '../state/actionCreators';
import Friend from './Friend';

export class Friends extends React.Component {
    componentDidMount() {
        this.props.getFriendsAsync();
    }

    render() {
        return (
            <div>
                <h3>My Favorite Friends</h3>
                <div>
                    {
                        this.props.friends.map(friend => (
                            <Friend
                                key={friend.id}
                                friend={friend}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        friends: state.friendsReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getFriendsAsync,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
