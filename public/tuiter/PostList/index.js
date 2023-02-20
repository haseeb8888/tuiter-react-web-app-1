/* eslint-env jquery */
import PostItem from "./PostItem.js"
import Posts from "./Posts.js"

const PostList = ( ) =>
{
    return(
        `
              ${
                            Posts.map( post =>
                          {
                              return(PostItem(post));

                          }).join('')
              }  
        `
    );
}

export default PostList;
