import { PostRepository } from "../repositories/postRepository.js";
import { PostDto } from "../dtos/postDto.js";
import { author } from "../models/Author.js";

export class PostService{
    PostRepository = new PostRepository();

    getAllPosts = async() => {
        return await this.PostRepository.findAll();
    }

    createPost = async(postData) => {
        const foundAuthor = await author.findById(postData.author);

        if (!foundAuthor){
            throw new Error("Autor não encontrado!");
        }

        const completePost = {
            ...PostDto.fromRequest(postData),
            author: {...foundAuthor._doc},
        }
        return await this.PostRepository.create(completePost);
    }

    getPostById = async (id) => {
        const post = await this.PostRepository.findById(id);
        if (!post) {
            throw new Error("Post não encontrado!");
        }
        return post;
    }

    // restante da implantação
}