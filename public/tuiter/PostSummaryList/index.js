
/* eslint-env jquery */
import PostInfo from "/tuiter/PostSummaryList/PostInfo.js";
import PostSummaryItem from "./PostSummaryItem.js";


function PostSummary( )
{
    return(
        `
        <div class="list-group">
                
                    ${
                        PostInfo.map( post =>
                                      {
                                          return(PostSummaryItem(post));
            
                                      }).join('')
                    }  
        </div>
              
    `
    );


}

export default PostSummary;