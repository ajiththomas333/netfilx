import {useState,useEffect} from 'react'
import{ API_KEY,imageUrl }from'../../constants/constant';
import axios from '../../axios'
import './banner.css'
function Banner() {
  const[movies,setMovies]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results[4])
    })
    
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movies?imageUrl+movies.backdrop_path:""})`}}
     className="banner">
        <div className="contect">       
            <h1 className="title">{movies? movies.title:""}</h1>
            <div className='banner_button'>
                <button className="button">play</button>
                <button className="button">mylist</button>

            </div>
            <h1 className='description'>{movies?movies.overview:""}</h1>

        </div>
        <div className="fade"></div>
      
    </div>
  );
}

export default Banner
