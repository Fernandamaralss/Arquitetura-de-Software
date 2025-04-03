import post from "../models/Post.js";

class PostController {
    static async listarPosts(req, res) {
        const listPosts = await post.find({});
        res.status(200).json(listPosts);
    }

    static async cadastrarPost(req, res) {
        try {
            const newPost = await post.create(req.body);
            res.status(200).json({ message: "Post criado com sucesso!", post: newPost });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar post` })
        }
    }    
}

export default PostController;