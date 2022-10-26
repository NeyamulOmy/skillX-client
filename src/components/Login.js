import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Login.css'
const Login = () => {
    const navigate = useNavigate()
    const { providerLogin, signIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                navigate('/')
            })
            .catch(error => { console.error(error) })
    }
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;

            })
            .catch(error => { console.error(error) })
    }
    const githubProvider = new GithubAuthProvider()
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;


            })
            .catch(error => { console.error(error) })
    }
    return (
        <div className='form-container mx-auto mt-5'>
            <h2>Login</h2>
            <Form onSubmit={handleLogin} className='form-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='mt-2'>
                <Button onClick={handleGoogleSignIn} variant="danger" type="submit">
                    Login with Google
                </Button>
                <br />
                <Button onClick={handleGithubSignIn} className='mt-2' variant="dark" type="submit">
                    Login with Github
                </Button>
            </div>
            <p>Don't have an account? <Link to='../register'>sign up now</Link></p>
        </div>
    );
};

export default Login;