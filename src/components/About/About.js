import { useEffect } from "react"
import axios from '../../customize/axios';

const About = () => {

    useEffect(()=>{
        axios.get('http://localhost:8081/health').then(res=>{
            console.log(res)
        })
    }, [])
    
    return ( 
        <>
            <button className="btn btn-primary">About me</button>
        </>
    );
}
 
export default About;