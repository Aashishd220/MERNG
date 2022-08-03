const Post=require('../../models/Post' )
module.exports ={
    Query:{
        async getPosts(){ 
            try{
                const posts=await Post.find();
                // const posts=[{
                //     body:'12312',
                //     _id:12312,
                //     username:'adfas',
                //     createdAt:'asdfasd'
                // }]
                return posts
            }
            catch(err){
                throw new Error(err);
            }
        
        }
    }
}