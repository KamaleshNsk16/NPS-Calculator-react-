import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { interest: "", age:"" };

    this.handleAge = this.handleAge.bind(this);
    this.handleInterest = this.handleInterest.bind(this);
  }

  handleInterest(event) {
    this.setState({interest:event.target.value})
    console.log(event);
  }

  handleAge(event) {
    this.setState({age:event.target.value})
    console.log(event);
  }

  handleSubmit(event) {
    console.log(event.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Age :
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAge}
            />
          </label><br />
          <label>
            Enter Investment :
            <input
              type="number"
              value={this.state.interest}
              onChange={this.handleInterest}
            />
          </label><br />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Details;
