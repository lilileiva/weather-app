import React from "react";
import "./About.css";
import Github from "../../img/githublogo.png";
import Linkedin from "../../img/linkedinlogo.png";

export default function About() {
    return (
        <div className="about">
            <h4>Hi! I'm Liliana from Argentina.👋</h4>
            <br/>
            <h4>You can reach me at:</h4>
            <br/>
            <button type="button" class="btn btn-dark">
                <img src={Github} />
                <a target="_blank" href="http://github.com/lilileiva">GitHub</a>
            </button>
            <br/>
            <button type="button" class="btn btn-dark">
                <img src={Linkedin} />
                <a target="_blank" href="http://www.linkedin.com/in/lilianaleiva">LinkedIn</a>
            </button>
            <br/>
            <p>📭 lilianadelcleiva@gmail.com</p>
        </div>
    );
}