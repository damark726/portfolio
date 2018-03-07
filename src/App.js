import React, {Component} from 'react';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: true,
      about: false
    }
    this.switchToAbout = this.switchToAbout.bind(this);
    this.switchToProjects = this.switchToProjects.bind(this);
  }

  switchToAbout() {
    this.setState({
      projects: false,
      about: true
    })
  }

  switchToProjects() {
    this.setState({
      projects: true,
      about: false
    })
  }

  render() {
    return (
      <div className="App">
        <Main />
        {this.state.projects ? <Projects projects={this.state.projects} about={this.state.about} switchToAbout={this.switchToAbout} /> : ""}
        {this.state.about ? <About projects={this.state.projects} about={this.state.about} switchToProjects={this.switchToProjects} /> : ""}
      </div>
    );
  }
}
