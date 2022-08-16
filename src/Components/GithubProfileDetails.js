import React from "react";
import {useSelector} from "react-redux";
import * as GithubProfileReducer from '../redux/GithubProfile/githubProfile.reducer';

const GithubProfileDetails = () => {

    // Fetching the Data from the REDUX Store
    const GitProfileDetails = useSelector((state) => {
        return state[GithubProfileReducer.githubProfileFeatureKey];
    });

    const {users} = GitProfileDetails;

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header bg-light">
                    <span className="badge badge-success mx-2">{users.followers} Followers</span>
                    <span className="badge badge-warning mx-2">{users.public_repos} Repos</span>
                    <span className="badge badge-secondary mx-2">{users.public_gists} Gist</span>
                    <span className="badge badge-danger mx-2">{users.following} Following</span>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Name : <span className="fw-bold">{users.name}</span>
                        </li>
                        <li className="list-group-item">
                            Location : <span>{users.location}</span>
                        </li>
                        <li className="list-group-item">
                            Company : <span>{users.company}</span>
                        </li>
                        <li className="list-group-item">
                            Twitter : <span>{users.twitter_username}</span>
                        </li>
                        <li className="list-group-item">
                            Email : <span>{users.email}</span>
                        </li>
                        <li className="list-group-item">
                            Blog : <span>{users.blog}</span>
                        </li>
                        <li className="list-group-item">
                            Since : <span>{users.created_at}</span>
                        </li>
                        <li className="list-group-item">
                            Gists : <span>{users.gists_url}</span>
                        </li>
                        <li className="list-group-item">
                            Events : <span>{users.events_url}</span>
                        </li>
                        <li className="list-group-item">
                            Profile URL :  <a href={users.html_url} target="_blank"> {users.html_url}</a>
                        </li>

                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
export default GithubProfileDetails;