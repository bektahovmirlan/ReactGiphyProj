import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../../state/users/userSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const push = useNavigate();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(() => alert('Invalid user!'))
    }

    return (
        <div>
            <h1>Login</h1>
            <Form
            title="sign in"
            handleClick={handleLogin}
        />
        <br />
        or <Link to="/register">register</Link>
        </div>
        
    )
}

export default LoginPage