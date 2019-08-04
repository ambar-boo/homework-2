import React, {Fragment} from "react";
import {Message} from '../Message';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageInput: ''
        };

        this.changeInputMessage = this.changeInputMessage.bind(this);
        this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
    }

    changeInputMessage (event) {
        this.setState({
            messageInput: event.target.value,
        });

    }

    sendMessageOnEnter (event) {
        if (event.key === 'Enter' && this.state.messageInput !== '') {
            this.setState({
                messages: this.state.messageInput,
                messageInput: ''
            })
        }
    }

    render() {

        return (
            <Fragment>
                <div className="chat">
                    <input value={this.state.messageInput} type="text" className="input-message" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
                </div>
                <Message text={this.state.messages} />
            </Fragment>
        )
    }
}

