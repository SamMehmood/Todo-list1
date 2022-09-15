import React from "react";

const About = () => {
    const isBackgroundRed = true;
   
    return (
        <div style={{
            padding:"10%",
            backgroundColor: isBackgroundRed ? 'Violet' : 'green',
          }}>    
    <h1    style={{
            display: "flex",
            justifyContent: "center"
        }}>
       'So , Here is Our About page'</h1>
       <h1 style={{
             display: "flex",
            justifyContent: "center"
        }}>Sameer Mehmood</h1>
       </div>
);
};

export default About;