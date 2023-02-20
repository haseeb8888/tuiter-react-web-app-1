import Who from "/tuiter/WhoToFollowList/who.js";
import WhoToFollowListItem from "/tuiter/WhoToFollowList/WhoToFollowListItem.js";

const WhoToFollow = ( ) =>
{
     return(
          `
             
      
                        <div class=" list-group">
                        
                                    ${
                                            Who.map( who =>
                                        {
                                                return(WhoToFollowListItem(who));
                                                
                                         }).join('')
                                    }        
                                     
                         </div>
      
                   
           
           `
      );
}

export default WhoToFollow;
