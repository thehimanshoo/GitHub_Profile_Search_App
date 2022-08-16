import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

const GithubProfile = () => {

    return(
        <React.Fragment>
            <div className="row mt-3">
                <div className="col-md-3">
                    {/* Adding Another Component */}
                    <GithubProfileCard/>
                </div>
                <div className="col-md-9 bg-warning p-3" style={{borderRadius : '10px'}}>
                    {/* Adding Another Component For displaying Details */}
                    <GithubProfileDetails/>
                </div>
            </div>
        </React.Fragment>
    )

}
export default GithubProfile;