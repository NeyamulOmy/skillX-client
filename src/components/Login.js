import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Login.css'
const Login = () => {
    const { providerLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user.photoURL)
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
            <Form className='form-container'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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