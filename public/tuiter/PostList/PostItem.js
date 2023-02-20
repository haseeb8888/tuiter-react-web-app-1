import ImageContent from "./ImageContent.js";
import ImageOnly from "./ImageOnly.js";

const PostItem = ( post ) =>
{
    return(
        `
                <div class="row wd-entirerowdiv">

                            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                                <img class="wd-profile-pic" src=${post.img}>
                            </div>

                            <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11">
                            
                                    
                                    
                                                    <span class="wd-c1-name">${post.name} <i class="fa-sharp fa-solid fa-circle-check"></i></span>
                                                    <span class="wd-content1">${post.username}</span>
                                                    <span class="wd-content1">${post.time}</span>
                                                    <p class="wd-postinformation-para">${post.header}</p>
                                    
                                       
                                        ${ post.status  ?  ImageContent(post)  :  ImageOnly(post) }
                                        
                                       <a class="wd-icons-links" href="#"><i class="fa-sharp fa-solid fa-comment wd-icons wd-icon"></i>22</a>
                                       <a  class="wd-icons-links" href="#"><i class="fa-sharp fa-solid fa-retweet wd-icons wd-icon"></i>22</a>
                                       <a class="wd-icons-links"  href="#"><i class="fa-sharp fa-solid fa-heart wd-icons wd-icon"></i>22</a>
                                       <a class="wd-icons-links" href="#"><i class="fa-solid fa-upload wd-icons wd-icon"></i></a>
            
                                   
                                  
                                
            
                            </div>

                </div>
        `
    );
}

export default PostItem;
