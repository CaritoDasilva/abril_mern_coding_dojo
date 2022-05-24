import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Home.module.scss';
import CommentsList from "./CommentsList";

const Home = () => {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [indexForEdition, setIndexForEdition] = useState();
    const handlerComment = (e) => {
        setComment(e.target.value)
        console.log("🚀 ~ file: Home.js ~ line 14 ~ handlerComment ~ e.target", e.target)
    }

    const sendComments = (e) => {
        e.preventDefault();
        if(editMode) {
            const editComments = [...comments];
            editComments[indexForEdition] = comment;
            setComments(editComments);
            setEditMode(false);
            setIndexForEdition();
        } else {
            setComments([...comments, comment]);
        }
        setComment('');
    }

    const removeComments = (index) => {
        console.log("🚀 ~ file: Home.js ~ line 27 ~ Home ~ removeComments ~ index", index)
        const newComments = comments.filter((comment, idx) => idx !== index);

        setComments(newComments);

    }

    const editComment = (index) => {
        setComment(comments[index]);
        setIndexForEdition(index);
    }

    return(
        <div className={styles["form-container"]}>
            <h1>¿Qué estás pensando?</h1>
            <Form onSubmit={(e) => sendComments(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>¿Que estás pensando?</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ingresa tu comentario" 
                    value={comment} 
                    name='comment'
                    onChange={(e) => handlerComment(e)}
                />
                </Form.Group>
                <Button variant="info" type="submit">
                    Enviar comentario
                </Button>
            </Form>
            <CommentsList 
                comments={comments} 
                removeComments={removeComments}
                editComment={editComment}
                setEditMode={setEditMode}
            />
        </div>
    )
}

export default Home;
// class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comment: '',
    //         comments: []
    //     };
    //     this.removeComments = this.removeComments.bind(this);
    // }

    // handlerComment(e) {
    //     this.setState({ comment: e.target.value })
    // }

    // sendComments(e) {
    //     e.preventDefault();
    //     this.setState({ comments: [...this.state.comments, this.state.comment], comment: '' })
    // }

    // removeComments(index) {
    //     console.log("🚀 ~ file: Home.js ~ line 27 ~ Home ~ removeComments ~ index", index)
    //     const newComments = this.state.comments.filter((comment, idx) => idx !== index);

    //     this.setState({ comments: newComments })

    // }

//     render() {
//         console.log(this.state.comments)
//         return(
//             <div className={styles["form-container"]}>
//                 <Form onSubmit={(e) => this.sendComments(e)}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>¿Que estás pensando?</Form.Label>
//                         <Form.Control 
//                             type="text" 
//                             placeholder="Ingresa tu comentario" 
//                             value={this.state.comment} 
//                             onChange={(e) => this.handlerComment(e)}
//                         />
//                     </Form.Group>
//                     <Button variant="info" type="submit">
//                         Enviar comentario
//                     </Button>
//                 </Form>
//                 <CommentsList comments={this.state.comments} removeComments={this.removeComments}/>
//             </div>
//         )
//     }
// }

// export default Home;