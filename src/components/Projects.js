import React, {Component} from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
      about: this.props.about
    }
    this.handleClick = this.handleClick.bind(this);
    this.openProject1 = this.openProject1.bind(this);
  }

  handleClick() {
    this.props.switchToAbout();
  }

  openProject1() {window.open("https://manganime.herokuapp.com/");}
  openProject2() {window.open("https://narflix.herokuapp.com/");}
  openProject3() {window.open("https://trackeranime.herokuapp.com/");}
  openProject4() {window.open("http://keen-allen-afa339.bitballoon.com/");}
  openProject5() {window.open("http://gifted-morse-a08176.bitballoon.com/");}
  openProject6() {window.open("http://blissful-goldstine-94f310.bitballoon.com/");}

  render() {
    return (
      <div className="Projects">
        <div id="active-title-recent-projects"><span className="active-span">Recent Projects</span></div>
        <div id="inactive-title-about-me" className="inactive-title"><span className="inactive-span" onClick={this.handleClick}>About me</span></div>
        {/* <ReactCSSTransitionGroup transitionName="css-projects" transitionEnterTimeout={300} transitionLeaveTimeout={300}> */}
          <div className="projects" id="project1" onClick={this.openProject1}></div>
          <div className="projects" id="project2" onClick={this.openProject2}></div>
          <div className="projects" id="project3" onClick={this.openProject3}></div>
          <div className="projects" id="project4" onClick={this.openProject4}></div>
          <div className="projects" id="project5" onClick={this.openProject5}></div>
          <div className="projects" id="project6" onClick={this.openProject6}></div>
        {/* </ReactCSSTransitionGroup> */}
      </div>
    );
  }
}
