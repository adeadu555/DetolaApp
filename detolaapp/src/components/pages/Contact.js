import React from "react";



function Contact(props){
    return (
        <div>
            <h1>Contact Page</h1>
            <p>


                Detola App
            </p>
    <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />

        </div>
    );
}


export default Contact;