import useFetch from "../../hooks/useFetch"
import {listUrl, getAudioUrl} from "../../url/baseUrl";

const Words = () => {

  const {loading, error, data} = useFetch(listUrl)

  if(loading) {
    return <div>loading</div>
  }

  if(error){
    return <div>error</div>
  }

  if(data){  
    return (
      data.map(({id, hiri})=>
        <Word id={id} kana={hiri}/>
      )
    ) 
  }

}

const Word = ({id, kana}) => {

  const url = getAudioUrl(id);
  let audio = new Audio(url)

  const start = () => {
    audio.play()
  }

  return <div className='answer' key={id} onClick={start}>
    {kana}
  </div>
}

export default Words