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

    return (
    <div>
    <h1 style={mainHeaderStyle}>Question Details Page</h1>
    <h2 style={subHeaderStyle}> How to solve...</h2>
    </div>
    );
}