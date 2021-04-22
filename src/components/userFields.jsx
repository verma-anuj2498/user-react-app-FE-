import React, { Component } from "react";
let backendURL = "http://localhost:8000";
class UserFields extends Component {
  state = {
    email: "",
    age: "",
  };
  styles = { margin: 15, padding: 15 };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // callApi()
    let item = this.state;
    fetch(backendURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        origin: "localhost:3000",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result from apit:", result);
      });
  };

  //   async function callApi () {
  //       console.log(this.state);
  //       let item = this.state;
  //       let result = await fetch(url,{
  //           method:"POST",
  //           headers:{
  //               "Content-Type":"application/json",
  //               "Accept":"application/json"
  //           },
  //           body:JSON.stringify(item)
  //       });
  //       result = await result.json();
  //       console.log("result from apit:",result)
  //   }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div>
        <form style={this.styles} onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="age" className="form-label" inputMode="numeric">
              Age (in numbers)
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <button className="btn btn-primary m-2">Show data</button>
      </div>
    );
  }
}

export default UserFields;
