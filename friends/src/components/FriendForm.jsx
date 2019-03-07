import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addFriendAsync } from '../state/actionCreators';


export class FriendForm extends React.Component {
    nameRef = React.createRef()
    ageRef = React.createRef()
    emailRef = React.createRef()

    onAddFriend = () => {
        const nameInput = this.nameRef.current;
        const ageInput = this.ageRef.current;
        const emailInput = this.emailRef.current;

        const newFriend = {
            name: nameInput.value,
            age: ageInput.value,
            email: emailInput.value
        };

        this.props.addFriendAsync(newFriend);

        nameInput.value = '';
        ageInput.value = '';
        emailInput.value = '';
    }

    render() {
        return (
            <div>
                <div>
                    <em>Name: </em>
                    <input ref={this.nameRef} type="text" />
                </div>
                <div>
                    <em>Age: </em>
                    <input ref={this.ageRef} type="text" />
                </div>
                <div>
                    <em>Email: </em>
                    <input ref={this.emailRef} type="text" />
                </div>
                <div>
                    <button onClick={this.onAddFriend}>Add Quote</button>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addFriendAsync,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(FriendForm);
