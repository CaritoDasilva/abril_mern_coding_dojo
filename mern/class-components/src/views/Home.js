import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Home.module.scss';
import CommentsList from './CommentsList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            comments: []
        };
        this.removeComments = this.removeComments.bind(this);
    }

    handlerComment(e) {
        this.setState({ comment: e.target.value })
    }

    sendComments(e) {
        e.preventDefault();
        this.setState({ comments: [...this.state.comments, this.state.comment], comment: '' })
    }

    removeComments(index) {
        console.log("🚀 ~ file: Home.js ~ line 27 ~ Home ~ removeComments ~ index", index)
        const newComments = this.state.comments.filter((comment, idx) => idx !== index);

        this.setState({ comments: newComments })

    }

    render() {
        console.log(this.state.comments)
        return(
            <div className={styles["form-container"]}>
                <Form onSubmit={(e) => this.sendComments(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>¿Que estás pensando?</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingresa tu comentario" 
                            value={this.state.comment} 
                            onChange={(e) => this.handlerComment(e)}
                        />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Enviar comentario
                    </Button>
                </Form>
                <CommentsList comments={this.state.comments} removeComments={this.removeComments}/>
            </div>
        )
    }
}

export default Home;