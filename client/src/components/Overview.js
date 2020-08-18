import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";

export default class Overview extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      formValue: '',
      description: `
      Battle friends and foes with the Sony PlayStation 4 Pro console. Its 1TB capacity lets you store plenty of games without an external hard drive, and the dual-shock controller improves your hands-on gaming experience. See enemies in clear, vibrant detail with the included HDMI cable of the Sony PlayStation 4 Pro console.`,
    }
  }



  // FORM STUFF
  handleChange(event) {
    this.setState({ formValue: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let id = this.state.formValue
    fetch(`http://ec2-3-15-234-135.us-east-2.compute.amazonaws.com/api/products/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ description: data.description })
      })
    this.setState({ formValue: '' })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Product ID:
            <input type="text" value={this.state.formValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Grid
          container spacing={4}
          id="overview-grid"
          direction="row"
          alignItems="center"
        >
          <Grid item xs={3}>
            <div className="description-title">Description</div>
          </Grid>
          <Grid item xs={9}>
            <div className="description">{this.state.description}</div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
