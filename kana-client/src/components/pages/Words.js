import useFetch from "../../hooks/useFetch"
import {listUrl, getAudioUrl} from "../../url/baseUrl";
import Page from '../../components/layout/Page'
const Words = () => {

  const {loading, error, data} = useFetch(listUrl)

  if(loading) {
    return <Page>loading</Page>
  }

  if(error){
    return <Page>error</Page>
  }

  if(data){  
    console.log(data)
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