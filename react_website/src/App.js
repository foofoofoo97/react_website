import "./App.css";
import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";
import Bio from "./contents/bio";
import Education from "./contents/education";
import Experience from "./contents/experience";
import Project from "./contents/project";
import Skills from "./contents/skills";
import Awards from "./contents/awards";
import img from "./assets/background_1_5_30.jpeg";

class App extends Component {
  state = { activeItem: "Bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    document.body.style.backgroundImage = `url(${img})`;
    document.body.style.backgroundSize = "fit";
  }

  getContents(activeItem) {
    if (activeItem === "Bio") {
      return <Bio />;
    } else if (activeItem === "Education") {
      return <Education />;
    } else if (activeItem === "Experience") {
      return <Experience />;
    } else if (activeItem === "Project") {
      return <Project />;
    } else if (activeItem === "Skills") {
      return <Skills />;
    } else {
      return <Awards />;
    }
  }
  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Container>
          <head>
            <link
              async
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
            />
          </head>
          <Menu pointing>
            <Menu.Item
              name="Bio"
              active={activeItem === "Bio"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Education"
              active={activeItem === "Education"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Experience"
              active={activeItem === "Experience"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Project"
              active={activeItem === "Project"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Skills"
              active={activeItem === "Skills"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Awards"
              active={activeItem === "Awards"}
              onClick={this.handleItemClick}
            />
          </Menu>
          <div>{this.getContents(activeItem)}</div>
        </Container>
      </div>
    );
  }
}

export default App;
