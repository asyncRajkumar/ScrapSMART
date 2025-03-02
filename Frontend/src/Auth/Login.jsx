import { useRef, useState, useEffect } from 'react';
import "./register.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

         try {
            const response = await axios.post("http://localhost:8080/login",
                JSON.stringify({ 
                    userName: user, // Change 'user' to 'userName'
                  
                    password: pwd, // Change 'pwd' to 'password
                }), 
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            localStorage.setItem("jwtToken", response.data);
            //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            // setAuth({ user, pwd, roles, accessToken });
           
            
            setUser('');
            setPwd('');
            setSuccess(true);
            
        } catch (err) {
            console.log(err);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleGitHubLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/github";
    }

    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    }

    return (
        <>
        <div className="whole">
        <div className="main">
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Fullname">Fullname:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                           <Link to="/registration">Sign Up</Link>
                        </span>
                    </p>
                </section>
                
            )}

           
            </div>
            <div className="oauth-buttons">
                <button onClick={handleGitHubLogin}>Continue with GitHub</button>
                <button onClick={handleGoogleLogin}>Continue with Google</button>
            </div>
            </div>
        </>
    )
}

export default Login;