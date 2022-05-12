import React, { Component } from "react";
import trashIcon from '../trash-bin.png';
import styles from './Home.module.scss';

class CommentsList extends Component {

    render() {
        const { comments } = this.props;
        return(
            <div>
                <ul>
                    {
                        comments?.reverse().map((comment, index) => (
                            <li key={index}>
                                <div className={styles["comment-container"]}>
                                    {comment}
                                    <img src={trashIcon} alt="" onClick={() => this.props.removeComments(index)}/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CommentsList;