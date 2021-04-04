import React from "react";
import Header from "../Common/Header";
import image from "../assets/img/about.jpg";
import TimeLine from "../Common/TimeLine";
import Team from "../Common/Team";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header
          title="About Us"
          subtitle="IT's REALLY A GOOD STORY"
          showButton={false}
          image={image}
        ></Header>

        <TimeLine />
        <Team />
      </div>
    );
  }
}

export default About;
