import React from "react";
import * as GithubProfileReducer from '../redux/GithubProfile/githubProfile.reducer';
import {useSelector} from "react-redux";

const GithubProfileCard = () => {

    const GitProfileCardInfo = useSelector((state) => {
        return state[GithubProfileReducer.githubProfileFeatureKey];
    });

    const {users} = GitProfileCardInfo;

    return (
        <React.Fragment>
            <div className="card">
                <img src={users.avatar_url} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h4 fw-bold font-italic text-center">{users.name}</p>
                    <small>{users.bio}</small><br/>
                    <div className="text-center">
                        <a href={users.html_url} target="_blank" className="btn btn-success btn-sm mt-3">Profile</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default GithubProfileCard;