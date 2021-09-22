import React from 'react'
import ReactPlayer from 'react-player'
import "./Modal.css"

function Modal({ Video,setToggle }) {

    const closeModal = () => {
        setToggle(prev => !prev)
    }
    return (
        <div className="modal">
           <div onClick={closeModal} className="overlay"></div> 
           <div className="modal-content">
           <ReactPlayer className="video_player" url={Video.videolink} controls/>
           <div className="title">{Video.title}</div>
           <div className="description">{Video.description}</div>
           </div>
        </div>
    )
}

export default Modal
