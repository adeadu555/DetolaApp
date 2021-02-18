import React from "react";


const name = "Detola";
const thoughts = "amazing!!!";

const stripVowels = str => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
};

function About() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h2>Hi! My name is ({name})</h2>
          <h3>My name has ({name.length}) letters</h3>
          <h4>My name without any vowels is: ({stripVowels(name)})</h4>
          <h5>I think I am ({thoughts})</h5>
         
        </div>
      </div>
    </div>

  );

}

export default About;