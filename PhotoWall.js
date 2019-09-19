import React from 'react'
import Photo from './Photo';
import {Link} from 'react-router-dom';

function PhotoWall(props) {
  
  return( 
    <div>
     <Link  
    //  onClick= {props.onNavigate} 
     className="addIcon" to="/AddPhoto" />
    <div className="photoGrid">
    {props.posts.map((post, index) =>
    <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
  </div>
  </div>
  )
}
export default PhotoWall