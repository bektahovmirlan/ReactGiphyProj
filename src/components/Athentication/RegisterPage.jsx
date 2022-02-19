import {useDispatch} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../../state/users/userSlice';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const push = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <div>        
            <h1>Register</h1>
            <Form
                title="register"
                handleClick={handleRegister}
            />
            <br />
            Already have an account? <Link to="/login">Sign in</Link>
        </div>
    )
}

export default RegisterPage