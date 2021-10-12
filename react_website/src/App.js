import "./App.css";
import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";

class App extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <head>
          <link
            async
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
          />
        </head>
        <Menu tabular>
          <Menu.Item
            name="bio"
            active={activeItem === "bio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="photos"
            active={activeItem === "photos"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Container>
    );
  }
}

export default App;
