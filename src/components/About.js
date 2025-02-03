import React from "react";

function About ({image,about}) {
    return (
     <div>
        <aside>
            <img src={image ? image : 'https://via.placeholder.com/215Links to an external site.'} alt="blog logo"/>
            <p>{about}</p>
        </aside>
     </div>
    )

}export default About