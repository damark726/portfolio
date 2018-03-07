import React, {Component} from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
      about: this.props.about
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.switchToProjects();
  }

  renderBrandStatement() {
    return(
      <div id="brand-statement">Being the son of immigrant parents, I've learned first-hand early in life the value of hard-work. Because of this, I have a deep-rooted sense of self-motivation, and constantly strive to do better in everything I do. I am an intelligent and diligent individual with a background in chemistry, and has had experience with detail-oriented tasks and projects that I've always aimed to complete to the best of my abilities. Being able to be versatile and cooperate with others while also bringing my unique rational way of thinking and positive attitude to the table is my best asset.</div>
    )
  }

  renderTechnicalSkills() {
    return(
      <div id="t-skills">
        <div id="t-skills1">Technical Skills:</div>
        <div>HTML, CSS, Javascript, React.js, React Native, Node.js, Express.js, PostgreSQL, Ruby/Ruby on Rails, jQuery, Bootstrap / CSS Grid</div>
      </div>
    )
  }

  renderPersonalSkills() {
    return(
      <div id="fun-facts">
        <div id="fun-facts1">Fun Facts:</div>
        <div>Fluent in Albanian and Serbo-Croatian / Montenegrin, avid soccer player & fan, love playing video games, watching anime, reading manga, listening to music, and basically any other sport you can think of.</div>
      </div>
    )
  }

  render() {
    return (
      <div className="About">
        <div className="active-title"><span className="active-span">About me</span></div>
        <div id="inactive-title-recent-projects" className="inactive-title"><span className="inactive-span" onClick={this.handleClick}>Recent Projects</span></div>
        {this.renderBrandStatement()}
        {this.renderTechnicalSkills()}
        {this.renderPersonalSkills()}
      </div>
    );
  }
}
