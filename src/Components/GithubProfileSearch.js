import React, { useState } from "react";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import { useDispatch, useSelector } from "react-redux";
import * as GithubProfileActions from '../redux/GithubProfile/githubProfile.actions';
import * as GithubProfileReducer from '../redux/GithubProfile/githubProfile.reducer';

const GithubProfileSearch = () => {

    let [state, setLocal] = useState({                          //state =  {user : ''}
        userName: '',
        users: {},
        repos: []
    });

    // Fetching Data to the REDUX Store
    const dispatch = useDispatch();

    const ClickSearchButton = (e) => {
        e.preventDefault()
        dispatch(GithubProfileActions.fetchUserProfile(state.userName));
        dispatch(GithubProfileActions.fetchUserRepos(state.userName));
    };

    // To fetch users data so, that I can apply condition to the component to show
    const GitProfileInfo = useSelector((state) => {
        return state[GithubProfileReducer.githubProfileFeatureKey];
    });
    const { users, repos } = GitProfileInfo;

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(users)}</pre> */}
            {/* <pre>{JSON.stringify(repos)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-danger text-white" style={{ textAlign: "center" }}>
                                <p className="h3 font-weight-bold font-italic">Github Profile Search App</p>
                            </div>
                            <div className="card-body bg-light">

                                <form action="" className="form-inline">
                                    <div className="form-group d-flex justify-content-between">
                                        <input onChange={(e) => { setLocal({ ...state, userName: e.target.value }) }} type="search" size="30" className="form-control" placeholder="Enter Github User Name" />
                                        <input onClick={ClickSearchButton} type="submit" value="Search" className="btn btn-danger btn-sm" style={{ marginLeft: '8px', padding: '0 20px' }} />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(users).length > 0 ?
                                <React.Fragment>
                                    <GithubProfile />
                                </React.Fragment> : null
                        }
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            repos.length > 0 &&
                            <React.Fragment>
                                <GithubRepos />
                            </React.Fragment>
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default GithubProfileSearch;