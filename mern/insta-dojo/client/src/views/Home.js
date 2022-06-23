import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from 'react-bootstrap/Table';
import { deletePost, getPosts } from "../services/post.service";
import io from "socket.io-client"

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [socket] = useState(() => io(':8080'));

    const getPostsFromService = async () => {
        try {
            const postServices = await getPosts();
            console.log("🚀 ~ file: Home.js ~ line 11 ~ getPostsFromService ~ postServices", postServices)
            setPosts(postServices.data.posts);
        } catch(err) {

        }
    }

    const deletePostFromService = async id => {
        await deletePost(id);
        const newArrPost = posts.filter(post => post._id !== id);
        socket.emit('from-client', newArrPost);
        setPosts(newArrPost);
    }

    useEffect(() => {
        socket.on('from-server', posts => setPosts(posts));
    }, [socket]);

    // useEffect(() => {
    //     getPostsFromService();
    // }, []);

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Imagen</th>
                    <th>Likes</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { posts?.map(post => (
                    <tr key={post._id}>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        <td>
                            <img src={post.image} alt="" />
                        </td>
                        <td>{post.length}</td>
                        <td>
                            <Button>Editar</Button>
                            <Button>Ver detalle</Button>
                            <Button onClick={() => deletePostFromService(post._id)}>Eliminar</Button>
                        </td>
                    </tr>

                )) }
                
            </tbody>
        </Table>
    )

}

export default Home;