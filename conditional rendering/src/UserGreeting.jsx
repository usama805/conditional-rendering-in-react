import PropTypes from "prop-types";

function UserGreeting(props){
if(props.isLoggedIn){
    return <h1  className="welcome">Welcome {props.username}</h1>
}
else{
    return <h1  className="logout">Please Log in  to Continue !</h1>
}
}

UserGreeting.PropTypes = {
isLoggedIn :PropTypes.bool,
username: PropTypes.string,

};
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username : "Guest",
}


export default UserGreeting;