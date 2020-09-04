import React, { Component } from "react";
import axios from "axios";

export default class CreateText extends Component {
  constructor(props) {
    super(props);

    this.onChangeTextName = this.onChangeTextName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
    };
  }

  onChangeTextName(e) {
    this.setState({ name: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const textObject = {
      name: this.state.name,
    };

    axios
      .post("http://localhost:4000/texts/create", textObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ name: "" });
  }

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Text</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.onChangeTextName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Text"
              className="btn btn-success btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}
