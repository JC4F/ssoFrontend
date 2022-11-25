import axios from "axios";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";


const Code = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const firstRunRef = useRef(false);

    useEffect(()=>{
        const ssoToken = searchParams.get('ssoToken');
        if(ssoToken && firstRunRef.current === false){
            firstRunRef.current = true;
            axios.post(
                process.env.REACT_APP_BACKEND_VERIFY_TOKEN, 
                {ssoToken},
                { withCredentials: true }
            ).then(res=>{
                console.log(">>>res: ", res);
            }).catch(err=>{
                console.log(">>> Error: ", err);
            })
        }
    }, [])
    
    return (
    <>
        Code
    </>
    );
}
 
export default Code;