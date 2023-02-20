const ImageContent = ( post ) =>
{
    return(
        `
                        <div>
                        
                                            <div>
                                                  <img  class="wd-img2" src=${post.img2}>
                                           </div>  
            
                                            <div class="wd-imgcontent">
                                            
                                                <h4 class="wd-imgcontent-heading">${post.headerimg}</h4>
                                                <h4 class="wd-imgcontent-content">${post.content}</h4>
                                                <a class="wd-imgcontent-link" href="#"><i class="fa-solid fa-link"></i>${post.link}</a>
                    
                                            </div>
                        
                        </div>
                                           
                                   
        `
    );
}

export default ImageContent;