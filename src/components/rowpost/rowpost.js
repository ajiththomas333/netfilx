import React,{useEffect,useState} from 'react';
import YouTube from 'react-youtube';
import { API_KEY, imageUrl } from '../../constants/constant';
import './rowpost.css'
import axios from '../../axios';

function Rowpost(props) {
  const[movies,setmovies]=useState([])
  const[urlid,seturlid]=useState("")
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setmovies(response.data.results)
    }).catch(err=>{
     // alert('no image')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        seturlid(response.data.results[0])

      }else{
        console.log("emty")
      }
    })

  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>

      
        
      <img onClick={()=>handlemovie(obj.id)} className={props.isSmall?"smallposter":"poster"}alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
        )}
      </div>
     {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  );
}

export default Rowpost
