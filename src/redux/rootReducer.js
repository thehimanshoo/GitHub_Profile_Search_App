import {combineReducers} from "redux";
import * as githubProfileReducer from './GithubProfile/githubProfile.reducer'

const rootReducer = combineReducers({
    [githubProfileReducer.githubProfileFeatureKey] : githubProfileReducer.reducer,

});
export {rootReducer};