import { useState } from "react"

const Fetchdata = ()=>{

    const [data, setData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);

    const FetchReq = async()=>{
        setLoading(true);
        try{
          const response = await fetch(`http://localhost:3001`);
          const data = await response.json();
          setData(data);

        }catch(err){

        }finally{
            console.log("all done");
            setLoading(false);
            setError(false);
        }
    }


}