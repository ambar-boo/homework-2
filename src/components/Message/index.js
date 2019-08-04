import React from "react";

export default class Message extends React.Component {

    render() {
        const {messages} = this.props;

        return (
            <span className="message">
                {messages[0].text}
            </span>
        )
    }
}