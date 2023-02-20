import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = ( ) =>
{
    return(
        `
           <div class="row">
           
                    <div class="wd-searchrow row">
                            <div class="col-xl-10 col-lg-9 col-md-10 col-sm-9">
                                <i class="wd-searchicon fa-solid fa-magnifying-glass"></i> <input class="wd-searchbox" type="search" placeholder="Search Twitter">
                            </div>
                            <div class="col-xl-2 col-lg-3 col-md-2 col-sm-3">
                                <i class="wd-gearicon fa-solid fa-gear"></i>
                            </div>
                    </div>
 
           </div>
           
           <ul class="nav mb-2 nav-tabs">
                        
                        <li class="nav-item wd-myname">
                            <a class="nav-link active" aria-current="page" href="#">For you</a>
                        </li>
                        <li class="nav-item wd-myname">
                            <a class="nav-link " href="#">Trending</a>
                        </li>
                        <li class="nav-item wd-myname">
                            <a class="nav-link " href="#">News</a>
                        </li>
                        <li class="nav-item wd-myname ">
                            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Sports</a>
                        </li>
                        <li class="nav-item wd-myname d-none d-lg-inline ">
                            <a class="d-none d-md-block nav-link" href="#" tabindex="-1" aria-disabled="true">Entertainment</a>
                        </li>
           </ul>
           
            <span class="wd-titlebelowimg">SpaceX's StarShip</span>
            <img class="wd-rocketimage" src="https://media.cnn.com/api/v1/images/stellar/prod/221208114519-boeing-nasa-sls-rocket-history.jpg?c=original" alt="Rocket image">
            ${PostSummaryList()}
        `
    );
}

export default ExploreComponent;
