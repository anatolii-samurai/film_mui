import { Link } from "react-router-dom";

const Unauthorrized = () =>(
    <div>
        <h1>Вы не авторизованы!</h1>
        <p>Для того чтобы войти введите почту</p>
        <Link to="/login" > Ввести почту </Link>
    </div>
)

export default Unauthorrized;