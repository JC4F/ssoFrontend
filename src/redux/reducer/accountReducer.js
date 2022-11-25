import { 
    USER_LOGIN_FAILED, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_REQUEST,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILED
} from "../action/accountAction";

const INITIAL_STATE = {
  userInfo: {
    access_token: "",
    email: "",
    groupWithRoles: {},
    refresh_token: "",
    username: "",
  },
  isLoading: false,
  errMessage: "",
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
        return {
            ...state,
            isLoading: true,
            errMessage: ''
        };

    case USER_LOGIN_FAILED:
        return {
            ...state,
            isLoading: false,
            errMessage: action.error
        };

    case USER_LOGIN_SUCCESS:
        return {
            ...state,
            userInfo: action.user,
            isLoading: false,
            errMessage: ""
        };


    case USER_LOGOUT_REQUEST:
        return {
            ...state,
            isLoading: true,
            errMessage: ''
        };

    case USER_LOGOUT_FAILED:
        return {
            ...state,
            isLoading: false,
            errMessage: action.error
        };

    case USER_LOGOUT_SUCCESS:
        return {
            ...state,
            userInfo: {
                access_token: "",
                email: "",
                groupWithRoles: {},
                refresh_token: "",
                username: "",
            },
            isLoading: false,
            errMessage: ""
        };
    
    default:
        return state;
  }
};

export default accountReducer;
