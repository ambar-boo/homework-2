import React, {Fragment} from "react";
import Message from '../Message';

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
        if (event.key === 'Enter') {
            this.setState({
                messages: [{text: this.state.messageInput}],
                messageInput: ''
            })
        }
    }

    render() {
        const {messages} = this.state;

        return (
            <Fragment>
                <div className="chat">
                    <input type="text" className="input-message" onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter}/>
                </div>
                {messages.length > 0 ? <Message messages={messages} /> : null}
            </Fragment>
        )
    }
}

