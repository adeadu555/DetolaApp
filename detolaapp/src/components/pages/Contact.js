import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";



function Contact(props){
    return (
        <div>
            <h3>Contact Page</h3>
            <p>
                <b>Click the buttons below to learn more about this wonderful application</b>
            </p>


    <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        <button>Learn More</button>
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        <button>Learn Less</button>
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />

        </div>
    );
}


export default Contact;