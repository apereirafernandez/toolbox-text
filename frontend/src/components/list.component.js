import React, { Component } from "react";
import axios from "axios";
import DataTable from "./data-table";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { textsCollection: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/texts")
      .then((res) => {
        this.setState({ textsCollection: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.textsCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
    });
  }

  render() {
    return (
      <div className="wrapper-texts">
        <div className="container">
          <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <td>ID</td>
                <td>Text</td>
              </tr>
            </thead>
            <tbody>{this.dataTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
