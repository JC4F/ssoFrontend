import axios from '../../customize/axios'

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST'
export const USER_LOGOUT_FAILED = 'USER_LOGOUT_FAILED'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'

export const doLogin = (ssoToken) => {
    return async(dispatch, getState)=>{
        dispatch({type: USER_LOGIN_REQUEST})
        console.log(">>> befor call api")
        axios.post(
            process.env.REACT_APP_BACKEND_SSO_VERIFY_TOKEN, 
            {ssoToken},
            // { withCredentials: true }
        ).then(res=>{
            if(res && +res.EC === 0){
                dispatch({type: USER_LOGIN_SUCCESS, user: res.DT})
                console.log(">>before fetch account again")
                dispatch(doGetAccount())
            }else {
                dispatch({type: USER_LOGIN_FAILED, error: res.EM})
            }
        }).catch(err=>{
            dispatch({type: USER_LOGIN_FAILED, error: "something went wrong!"})
            console.log(">>> Error: ", err);
        })
    }
}
export const doGetAccount = () => {
    return async(dispatch, getState)=>{
        console.log(">>> go to fetch account again")
        dispatch({type: USER_LOGIN_REQUEST})
        axios.get(
            process.env.REACT_APP_BACKEND_SSO_GET_ACCOUNT, 
            // { withCredentials: true }
        ).then(res=>{
            if(res && +res.EC === 0){
                dispatch({type: USER_LOGIN_SUCCESS, user: res.DT})
            }else {
                dispatch({type: USER_LOGIN_FAILED, error: res.EM})
                if(window.location.pathname !== '/')
                    window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_CURRENT_PROJECT_URL}`
            }
        }).catch(err=>{
            dispatch({type: USER_LOGIN_FAILED, error: "something went wrong!"})
            console.log(">>> Error: ", err);
        })
    }
}

export const doLogout = (ssoToken) => {
    return async(dispatch, getState)=>{
        dispatch({type: USER_LOGOUT_REQUEST})
        axios.post(
            process.env.REACT_APP_BACKEND_SSO_LOGOUT, 
            {abc: 'abc'},
            // { withCredentials: true }
        ).then(res=>{
            if(res && +res.EC === 0){
                dispatch({type: USER_LOGOUT_SUCCESS, user: res.DT})
                window.location.href = '/'
            }else {
                dispatch({type: USER_LOGOUT_FAILED, error: res.EM})
            }
        }).catch(err=>{
            dispatch({type: USER_LOGOUT_FAILED, error: "something went wrong!"})
            console.log(">>> Error: ", err);
        })
    }
}