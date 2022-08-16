import React from "react";
import * as GithubProfileReducer from '../redux/GithubProfile/githubProfile.reducer';
import {useSelector} from "react-redux";

const GithubRepos = () => {

    const GitReposInfo = useSelector((state) => {
        return state[GithubProfileReducer.githubProfileFeatureKey];
    });

    const {repos} = GitReposInfo;

    return (
        <React.Fragment>
            <div className="card mt-3">
                <div className="card-header bg-warning text-center text-white">
                    <p className="h4 font-weight-bold font-italic">Your Repository</p>
                </div>
                <div className="card-body bg-default">
                    <ul className="list-group">
                        {
                            repos.map((repo) => {
                                return(
                                    <li className="list-group-item">
                                        <div className="d-flex justify-content-between">
                                                <span className="h4 font-weight-bold font-italic">
                                                <a className='text-decoration-none' href={repo.html_url} target="_blank">{repo.name}</a>
                                            </span>
                                            <small className="badge bg-success">{repo.stargazers_count} Stars</small>
                                            <small className="badge bg-info">{repo.watchers} Watchers</small>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};
export default GithubRepos;