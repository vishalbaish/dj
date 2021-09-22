import React, { useState } from 'react'
import Modal from './Modal'
import "./Video.css"


function Video({ video, handleAddFavourites, handleRemoveFavourite }) {
    const [toggle, setToggle] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [favouriteIcon, setFavouriteIcon] = useState(false)

    const showModal = () => {
        setToggle(prev => !prev)
        setSelectedVideo(video)
    }

    const changeFavouriteIcon = (video) => {
        if (favouriteIcon === true) {
            handleRemoveFavourite(video)
            setFavouriteIcon(prev => !prev)
        } else {
            handleAddFavourites(video)
            setFavouriteIcon(prev => !prev)
        }
        
    }



    return (
        <>
           <div style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "${video.thumbnailUrl}"
            )`,
            backgroundPosition: "center center",
        }} className="video" >
            <div className="favourites"><button onClick={() => changeFavouriteIcon(video)}>{favouriteIcon ? <i class="fas fa-heart"></i> : <i class="far fa-heart"></i>}</button></div>
            <div className="video_content" onClick={showModal}>
               <div className="video_title">{video.title}</div>
               </div>
           </div> 
           {toggle && <Modal Video={selectedVideo} setToggle={setToggle} />}
        </>
    )
}

export default Video
