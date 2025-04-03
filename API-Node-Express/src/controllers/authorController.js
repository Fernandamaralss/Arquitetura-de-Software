import { author } from "../models/Author.js";

    class AuthorController {
    static async getAllAuthors(req, res) {
        try {
        const listAuthor = await author.find({});
        res.status(200).json(listAuthor);
        } catch (error) {
        res
        .status(500)
        .send({message: `${error.message} - Faltou requisição`});
        }
    }

    static async createAuthor(req, res) {
      try {
        const newAuthor = new author(req.body);
  
        await newAuthor.save();
  
        return res
          .status(201)
          .json({ message: "Autor criado com sucesso!", author: newAuthor });
      } catch (error) {
        res.status(500).json({ message: `Error: ${error.message} - falha ao cadastrar autor` });
      }
    }
    
    static async getAuthorById(req, res) {
      try {
          const id = req.params.id;
          const foundAuthor = await author.findById(id);
          if (!foundAuthor) {
              return res.status(404).send("Autor não encontrado!");
          }
          res.status(200).json(foundAuthor);
      } catch (error) {
          res
              .status(500)
              .json({ message: `${error.message} - falha na requisição` });
      }
    }

    static async updatePost(req, res) {
      try {
        const authorToUpdate  = await post.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
  
        if (!authorToUpdate ) return res.status(404).send("Autor não encontrado");
  
        return res.status(200).json(authorToUpdate );
      } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
      }
    }

    static async deleteAuthor(req, res) {
      try {

        const id = req.params.id;
        const deletedAuthor = await post.findByIdAndDelete(id);
        if (!deletedAuthor){
          return res.status(404).send("Author não encontrado");
        } 
  
        return res.status(200).send("Autor removido com sucesso!");
      } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
      }
    }

    static async findAuthorByKeyword(req, res) {
      try{
          const {name} = req.params;
          const result = await author.find({
            $or: [
              {name:{$regex: name, $options:"i"}},
              {email:{$regex: name, $options:"i"}},
            ]
          });
          if (result.length === 0) {
            return res.status(404).json({
                message: "Nenhum autor encontrado com a palavra-chave informada"
            })
          }
          res.status(200).json(result);
      }catch (error) {
        res.status(500).send(error.message);
      }
    }
}

export default AuthorController;
