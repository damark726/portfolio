import React, {Component} from "react";

export default class Main extends Component {

  linkedin() {window.open("https://www.linkedin.com/in/davidmarkoc/");}

  github() {window.open("https://github.com/damark726");}

  render() {
    return (
      <div className="Main">
        <div id="photo"></div>
        <div id="dm">David Markoc</div>
        <div id="border"></div>
        <div id="text">Front-End Web Developer</div>
        <div id="e-mail">david.markoc@gmail.com</div>
        <div id="linkedin"><span className="main-span" onClick={this.linkedin}>LinkedIn</span></div>
        <div id="github"><span className="main-span" onClick={this.github}>GitHub</span></div>
      </div>
    );
  }
}
