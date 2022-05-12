import React, { Component } from "react";

class CommentsList extends Component {

    render() {
        console.log('props', this.props)
        const { comments } = this.props;
        return (
            <div>
                {
                    comments?.map((comment, idx) => (
                        <p key={idx}>{comment}</p>
                    ))
                }

            </div>
        )
    }
}

export default CommentsList;