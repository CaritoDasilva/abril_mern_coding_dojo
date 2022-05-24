import React, { Component } from "react";
import trashIcon from '../trash-bin.png';
import editIcon from '../lapiz.png'
import styles from './Home.module.scss';

// class CommentsList extends Component {


//     render() {
//         const { comments } = this.props;
//         return(
//             <div>
//                 <ul>
//                     {
//                         comments?.reverse().map((comment, index) => (
//                             <li key={index}>
//                                 <div className={styles["comment-container"]}>
//                                     {comment}
//                                     <img src={trashIcon} alt="" onClick={() => this.props.removeComments(index)}/>
//                                 </div>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }

// export default CommentsList;

const CommentsList = ({ comments, removeComments, editComment, setEditMode }) => {

    const editHandler = (index) => {
        editComment(index); 
        setEditMode(true);
    }
    return(
        <div>
                 <ul>
                     {
                        comments?.reverse().map((comment, index) => (
                            <li key={index}>
                                <div className={styles["comment-container"]}>
                                    {comment}
                                    <div>
                                        <img src={trashIcon} alt="" onClick={() => removeComments(index)}/>
                                        <img src={editIcon} alt="" onClick={() => editHandler(index)} />

                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
    )
}

export default CommentsList;