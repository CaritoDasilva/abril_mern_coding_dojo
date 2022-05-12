import React, { Component } from "react";
import CommentsList from "./Comments";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            comment: '',
            comments: []
        }

    }

    sendComments(e) {
        e.preventDefault();
        // const newComments = [...this.state.comments, this.state.comment]
        // console.log("🚀 ~ file: Home.js ~ line 19 ~ Home ~ sendComments ~ newComments", newComments)
        this.setState({ comments: [...this.state.comments, this.state.comment], comment: '' })
    }

    addComment(e) {
        console.log("🚀 ~ file: Home.js ~ line 16 ~ Home ~ addComment ~ e", e.target.value)
        this.setState({ comment: e.target.value })
    }

    render() {
        console.log('comments', this.state.comments)
        return(
            <div>
                <h1>Soy el componente Home</h1>
                <form action="" onSubmit={(e) => this.sendComments(e)}>
                    <input type="text" value={this.state.comment} onChange={(e) => this.addComment(e)}/>
                    <button type="submit">Agregar comentario</button>
                </form>
                <CommentsList comments={this.state.comments}/>
            </div>
        )
    }
}

export default Home;