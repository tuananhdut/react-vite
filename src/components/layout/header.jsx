import "./header.css"
const Header = () => {
    return (
        <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="/Users">Users</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    )
}

export default Header