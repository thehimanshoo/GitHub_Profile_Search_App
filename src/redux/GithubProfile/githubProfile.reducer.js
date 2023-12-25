
import * as githubProfileActions from './githubProfile.actions';

// Feature Key
export const githubProfileFeatureKey = 'GitHub_Profile';

// Initial State
const initialState = {
    loading : false,
    users : {},
    repos : [],
    errorMessage : ''
};

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case githubProfileActions.FETCH_GITHUB_PROFILE_REQUEST :
            return{
                ...state,
                loading : true
            };

        case githubProfileActions.FETCH_GITHUB_PROFILE_SUCCESS :
            return {
                ...state,
                loading : false,
                users : payload
            }

        case githubProfileActions.FETCH_GITHUB_PROFILE_FAILURE :
            return {
                ...state,
                loading : false,
                errorMessage : payload
            };

        case githubProfileActions.FETCH_GITHUB_REPOS_REQUEST :
            return {
                ...state,
                loading : true
            };

        case githubProfileActions.FETCH_GITHUB_REPOS_SUCCESS :
            return {
                ...state,
                loading : false,
                repos : payload
            };

        case githubProfileActions.FETCH_GITHUB_REPOS_FAILURE :
            return {
                ...state,
                loading : false,
                errorMessage : payload
            };
        default : return state;
    }
};
