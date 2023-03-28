import useFetch from "../../hooks/useFetch"
import {listUrl} from "../../url/baseUrl";

const Words = () => {

  const {loading, error, data} = useFetch(listUrl)

  if(loading) {
    return <div>loading</div>
  }

  if(error){
    return <div>error</div>
  }

  if(data){  

    console.log(data);
    return (
      data.map(({id, hiri})=>
        <Word id={id} kana={hiri}/>
      )
    ) 
  }

}

const Word = ({id, kana}) => {
  return <div className='answer' key={id}>
    {kana}
  </div>
}

export default Words