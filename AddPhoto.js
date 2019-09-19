import React, { Component } from 'react';
import './style.css';

class AddPhoto extends Component {
  constructor() {
    super()
    this.onSubmithandler = this.onSubmithandler.bind(this)
  }

  onSubmithandler(event) {
    event.preventDefault();
    console.log(event.target.elements.link.value);
    console.log(event.target.elements.description.value);
  }
  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div className="form">
          <form onSubmit={this.onSubmitHandler}>
            <input type="text" placeholder="link" name="link" />
            <input type="text" placeholder="description"
              name="description" />
            <button
              className="button">Post</button>
          </form>
        </div>
      </div>
    )
  }
}
export default AddPhoto;
