import React from "react";
import '../styles/color.css'
import profile from './images/Profile-picture.jpg';

function aboutMe() {
    return (
        <section className="aboutMe">

            <header >
                <h1>About Me --- Timothy Lau</h1>
            </header>

            <img style={{ width: 300, height: 200 }} src={profile} alt="profile" />

            <article>
                I am Timothy Lau. I am a graduate in the Full Stack Boot-camp of website Development.
            </article>
<br></br>
<br></br>
<br></br>
        </section>
    )
}

export default aboutMe