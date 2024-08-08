import React from "react";
export default function QuestionDetails(){
    const mainHeaderStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        color: "darkblue",
    };

    const subHeaderStyle = {
        fontSize: "18px",
        fontWeight: "normal",
        color: "blue",
    };

    const cardStyle = {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px 0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const cardTitleStyle = {
        fontsize: "20px",
        fontWeight: "bold",
        marginBottom: "8px",
    };

    //test
    return (
    <div>
    <h1 style={mainHeaderStyle}>Question Details Page</h1>
    <h2 style={subHeaderStyle}> How to solve...</h2>
    <div style={cardStyle}>
        <h3 style={cardTitleStyle}>Card Title 1</h3>
        <p>blah blah blah</p>
    </div>
    <div style={cardStyle}>
        <h3 style={cardTitleStyle}>Card Title 2</h3>
        <p>blah blah blah 2</p>
        </div>
    </div>
    );
}

