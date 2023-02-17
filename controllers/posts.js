const {
    createPost,
    readPost,
    readPostById,
    deletePost,
    updatePost
} = require('../models/posts');

const getPostController = (req, res) => {
    readPost((err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Posts : result});
        }
    })
}

const createPostController = (req, res) => {
    const data = req.body;
    createPost(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Post : result});
        }
    });
}

const getPostByIdController = (req, res) => {
    const id = req.params.id;
    readPostById(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Post : result});
        }
    });
}

const updatePostController = (req, res) => {
    const data = req.body;
    updatePost(data, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, Post : result});
        }
    });
}

const deletePostController = (req, res) => {
    const id = req.params.id;
    deletePost(id, (err, result) => {
        if(err) {
            console.log(err);
        }else{
            res.json({success : 1, message : 'Post deleted'});
        }
    });
}

module.exports  = {
    getPostByIdController,
    deletePostController,
    updatePostController,
    getPostController,
    createPostController
}