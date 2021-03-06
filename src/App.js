import "./App.css";
import React, { useEffect, useState } from "react";
import Video from "./components/Video";
import Header from "./components/Header";

function App() {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([])
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favData')) || [])
  const [tags, setTags] = useState("")
  useEffect(() => {
    const getVideos = async () => {
      const url = "https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/"
      const respone = await fetch(url)
      const responseData = await respone.json()
      console.log(responseData.videosData)
      setVideos(responseData.videosData)
    }
    getVideos()
  }, [])

  const btns =[
    {"name": " Asthma",
    "value": "asthma"},
    {"name": " Cancer",
    "value": "cancer"},
    {"name": " TB",
    "value": "tb"},
    {"name": " Heart",
    "value": "heart"},
    {"name": "BP",
    "value": "bp"},
    {"name": "Diabetes",
    "value": "diabetes"}
  ]


  useEffect(() => {
    const getFilteredVideos = () => {
      const filteredData = videos.filter(video => video.tags.includes(tags))
         setFilteredVideos(filteredData)
    }
    getFilteredVideos();
  }, [tags, videos]);

  const filter = (button) =>{
    if (tags === button) {
      setTags("")
      console.log(tags)
    } else {
      setTags(button)
    }
  }

  const addFavourites = (video) => {
    if (favourites === video) {
      setFavourites([])
    }
      setFavourites([...favourites, video])
  }

  const removeFavourite = (video) => {
    setFavourites(favourites.filter(f => f !== video))
  }

  useEffect(() => {
    const setls = () => {
        localStorage.setItem('favData', JSON.stringify(favourites))
      console.log(favourites)
    }
    setls()
  }, [favourites])




  const showls = () => {
      setFilteredVideos([...JSON.parse(localStorage.getItem('favData') || '0')])
  }


  return (
    <div className="App">
      <Header videos={videos}/>
      <div className="tags">
        <h4>Tags</h4>
        {btns.map((btn) => 
          <button type="button" onClick={()=> filter(btn.value)}>{btn.name}</button>
        )}
      
      <button type="button" onClick={showls}>FAVOURITES</button>
      </div>
      <div className="filter_videos">
        <div className="tag_title">{filteredVideos ? tags.toUpperCase() : null}</div>
        {filteredVideos.map((video, index) => <Video handleRemoveFavourite={removeFavourite} handleAddFavourites={addFavourites} video={video} />)}
        </div>
      <div className="container">
      <div className="tag_title">ALL VIDEOS</div>
           {videos.map((video, index) => <Video handleRemoveFavourite={removeFavourite} handleAddFavourites={addFavourites} video={video} />)} 
        </div>
    </div>
  );
}

export default App;
