import { useState, useEffect} from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [data, setData] = useState([])

  useEffect(()=>{
    fetchData(url)
  }, [])

  const fetchData = async (url) => {
    try{
      await setLoading(true);
      await setError(false);
      const res = await fetch(url);
      const resData = await res.json();
      await setData(resData)
      setLoading(false);
    } catch (err){
      setError(true);
    }
  }
  return {loading, error, data}
}

export default useFetch