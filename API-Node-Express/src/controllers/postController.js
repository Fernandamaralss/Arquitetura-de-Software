//import post from "../models/Post.js";
import { PostService } from "../services/postServer.js";
import { PostDto } from "../dtos/postDto.js";
import { PostRepository } from "../repositories/postRepository.js";

class PostController {
  PostService = new PostRepository();

  getAllPosts = async (req, res) => {
    try {
      const posts = await this.PostService.getAllPosts();
      res.status(200).json(posts);
    }catch (error){
      res.status(500).json({
        message: error.message,
      });
    }
  }

  createPost = async (req, res) => {
    try {
      const createPost = await this.PostService.createPosts(req.body);
      res.status(201).json({
        message: "Post criado com sucesso!",
        post: new PostDto(createPost),
      });
    }catch (error){
      res.status(500).json({
        message: error.message,
      });
    }
  }


//   static async getPostById(req, res) {
//     try {
//       const postById = await post.findById(req.params.id);

//       if (!postById) return res.status(404).send("Post não encontrado");

//       return res.status(200).json(postById);
//     } catch (error) {
//       res.status(500).json({ message: `Error: ${error.message}` });
//     }
//   }

//   static async updatePost(req, res) {
//     try {
//       const postToUpdate = await post.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//           new: true,
//         }
//       );

//       if (!postToUpdate) return res.status(404).send("Post não encontrado");

//       return res.status(200).json(postToUpdate);
//     } catch (error) {
//       res.status(500).json({ message: `Error: ${error.message}` });
//     }
//   }

//   static async deletePost(req, res) {
//     try {
//       const postToDelete = await post.findByIdAndDelete(req.params.id);

//       if (!postToDelete) return res.status(404).send("Post não encontrado");

//       return res.status(200).send("Post removido com sucesso!");
//     } catch (error) {
//       res.status(500).json({ message: `Error: ${error.message}` });
//     }
//   }


    // static async findPostByKeyword(req, res) {
    //   try {
    //       const { keyword } = req.params;
    //       const result = await post.find({
    //           $or: [
    //               { title: { $regex: keyword, $options: "i" } },
    //               { description: { $regex: keyword, $options: "i" } },
    //           ]
    //       });
    //       if (result.length === 0) {
    //           return res.status(404).json({
    //               message: "Nenhum post encontrato com a palavra-chave informada",
    //           })
    //       }
    //       res.status(200).json(result);
    //   } catch (error) {
    //       res.status(500).send(error.message);
    //   }
    // }

}

export default PostController;
