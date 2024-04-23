import React from "react";

// Define the image variable (replace the source with your actual image URL)
const image = "/images/demo.png"; // Replace "path_to_your_image.jpg" with the actual image path

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer with a strong interest in building engaging and effective user interfaces.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

