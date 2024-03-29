import React from 'react'

function Photo(props){
  
    const post = props.post
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}</p>
          <div className='button-container'>
            <button type="button" 
               onClick = {()=>{props.onRemovePhoto(post)}}> Remove</button>
          </div>
        </figcaption>

      </figure>

    
  
}
export default Photo;