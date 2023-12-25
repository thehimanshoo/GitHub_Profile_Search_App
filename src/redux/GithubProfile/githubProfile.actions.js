import Axios from "axios";
import {CLIENT_ID, CLIENT_SECRETS} from "../../Components/GithubCredentials";

export const FETCH_GITHUB_PROFILE_REQUEST = 'FETCH_GITHUB_PROFILE_REQUEST';
export const FETCH_GITHUB_PROFILE_SUCCESS = 'FETCH_GITHUB_PROFILE_SUCCESS';
export const FETCH_GITHUB_PROFILE_FAILURE = 'FETCH_GITHUB_PROFILE_FAILURE';

export const FETCH_GITHUB_REPOS_REQUEST = 'FETCH_GITHUB_REPOS_REQUEST';
export const FETCH_GITHUB_REPOS_SUCCESS = 'FETCH_GITHUB_REPOS_SUCCESS';
export const FETCH_GITHUB_REPOS_FAILURE = 'FETCH_GITHUB_REPOS_FAILURE';

// Real Action for Profile
export const fetchUserProfile = (githubUsername) => {
    return async (dispatch) => {
  
        try{
            dispatch({type : FETCH_GITHUB_PROFILE_REQUEST});
            const dataURL = `https://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID} & client_secrets=${CLIENT_SECRETS}`;
            const response = await Axios.get(dataURL);
            dispatch({type : FETCH_GITHUB_PROFILE_SUCCESS, payload : response.data});
            console.log(response.data , 'fjhwufbsdjhfbguay');
        }
        catch (error) {
            dispatch({type : FETCH_GITHUB_PROFILE_FAILURE, payload : error})
        }
    };
  };

// Real Action for Repos
export const fetchUserRepos = (githubUsername) => {
    return async (dispatch) => {
        dispatch({type : FETCH_GITHUB_REPOS_REQUEST});

        const dataURL = `https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID} & client_secrets=${CLIENT_SECRETS}`;
        const response = await Axios.get(dataURL);
        try{
            dispatch({type : FETCH_GITHUB_REPOS_SUCCESS, payload : response.data});
        }
        catch (error) {
            dispatch({type : FETCH_GITHUB_REPOS_FAILURE, payload : error})
        }
    };
};