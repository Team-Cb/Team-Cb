import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.css"
const JoinRoom = () => {
    return (<>
        <h1>got scrum?</h1>
        <Form type="join" />
        <footer>
            <p>Create your own room for free here: <NavLink to={"/create-room"}>Create New Room</NavLink></p>
        </footer>
    </>);
}
const CreateRoom = () => {
    return (<>
        <h1>Create Room</h1>
        <Form type="create" />
        <footer>
            <p>Join a room for free here: <NavLink to={"/"}>Join Room</NavLink></p>
        </footer>
    </>)
}
const Form = (props: { type: string; }) => {
    let navigate = useNavigate();
    let action: string;
    let nameField: string;
    let buttonText: string;

    if (props.type == "join") {
        action = "/estimate";
        nameField = "Name:"
        buttonText = "Estimate!"
    } else if (props.type == "create") {
        action = "/";
        nameField = "Room Name:"
        buttonText = "Submit!"
    } else {
        return null;
    }
    let actionEvent = () => {
        navigate(action)
    }
    return (
        <form onSubmit={actionEvent} >
            <label htmlFor="name">{nameField}</label>
            <input type="text" id="name" name="name" required /><br /><br />
            <label htmlFor="roomnum">Room ID:</label>
            <input type="text" id="roomnum" name="roomnum" required /><br /><br />
            <button type="submit">{buttonText}</button>
        </form>
    );
}
export default JoinRoom;
export { CreateRoom }