import React from "react";
const Contact = () => {
    const isBackgroundRed = true;

    return (
        <div style={{
            padding: "10%",
            backgroundColor: isBackgroundRed ? 'slateblue' : 'blue',
        }}>
            <h1 style={{
                display: "flex",
                justifyContent: "center"
            }}>
                'So , Here is Our Contact page' </h1>
            <h1 style={{
                display: "flex",
                justifyContent: "center"
            }}>Sameer Mehmood</h1>
        </div>
    )

}

export default Contact;