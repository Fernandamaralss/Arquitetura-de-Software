export class PostDto{
    /**
     *
     */
    constructor(post) {
        this.id = post.id;
        this.title = post.title;
        this.discription = post.discription;
        this.author = post.author;
        this.createdAt = post.createdAt;
        this.updateAt = post.updateAt;


    }

    static fromRequest(body){
        return{
            title: body.title,
            discription: body.discription,
            author: body.tiauthortle
        };
    }
}