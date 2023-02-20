
const PostSummaryItem = ( post ) =>
{
    return(
        `  
        <div>

                <div class="list-group-item">

                            <div class="row">
                
                                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-8 wd-contentdiv">
                
                                    <span class="wd-content wd-heading1">${ post.topic === ' ' ? " " :post.topic }</span>
                                    <span class="wd-heading2">${ post.userName === ' ' ? " " :post.userName } <i class="fa-sharp fa-solid fa-circle-check"></i>${ post.time === ' ' ? " " :post.time }</span>
                                    <span class="wd-content wd-heading3">${ post.title === ' ' ? " " :post.title }</span>
                                    <span class="wd-content wd-heading4">${ post.tweets === ' ' ? " " :post.tweets }</span>
                
                                </div>
                
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 ">
                                    <img class="wd-divimage" src=${post.image}>
                                </div>
                
                            </div>

                </div>
        
        </div>
        `
    );
}

export default PostSummaryItem;
