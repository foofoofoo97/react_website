import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";

class Project extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return <div></div>;
  }
}

export default Project;
