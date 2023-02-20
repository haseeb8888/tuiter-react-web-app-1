

const WhoToFollowListItem = ( Who ) =>
{
        return(
            `
            <div>
            
                            <li class="wd-list list-group-item list-group-item-action">
                
                                    <div class="row">
                
                                        <div class="col-xl-3 col-lg-3">
                                            <img class="wd-rightcolimg" src=${Who.avatarIcon}>
                                        </div>    
                
                                        <div class="col-xl-6 col-lg-5">
                
                                            <span>${Who.userName} <i class="fa-sharp fa-solid fa-circle-check"></i></span>
                                            <span class="wd-rightcolcontent">@${Who.handle}</span>
                
                                        </div>
                
                                        <div class="col-xl-3 col-lg-4">
                                            <button type="button" class=" btn btn-primary btn-sm wd-btn">Follow</button>
                                        </div>
                
                                    </div>
                
                                </li>
            
            </div>
                
        `
        );
}

export default WhoToFollowListItem;

