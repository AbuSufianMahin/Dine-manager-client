import React, { useContext } from 'react';

import loginAnimation from '../../assets/LottieAnimations/loginAnimation.json';
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { errorAlert, successAlert } from '../../Utility/sweetAlert';

const LoginPage = () => {

    const { googleSignIn, emailSignIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignInWithEmail = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        emailSignIn(email, password)
            .then(() => {
                successAlert("Welcome!", "You've successfully logged in.")
                .then(() => {
                        navigate('/');
                    })
            })
            .catch(error => errorAlert(error.message))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                successAlert("Welcome!", "You've successfully logged in.")
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(error => errorAlert(error.message))
    }

    return (
        <section className='bg-base-200'>
            <div className='w-11/12 md:w-8/12 mx-auto py-5 md:py-10 lg:py-20'>
                <h1 className='text-center text-4xl font-bold'>Login Now</h1>
                <div className='grid lg:grid-cols-2 items-center mt-10 gap-10 shadow-sm rounded-2xl px-5 py-10 bg-base-100'>
                    <div className='rounded-4xl'>
                        <Lottie animationData={loginAnimation} style={{
                            height: "40vh"
                        }}></Lottie>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <form onSubmit={handleSignInWithEmail}>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Your Email</legend>
                                <input name="email" type="text" className="input w-full" placeholder="Enter your email" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Password</legend>
                                <input name="password" type="text" className="input w-full" placeholder="Enter Password" required />
                            </fieldset>
                            <div><Link className="link link-hover text-sm text-gray-500" to="/authentication/forgot-pass">Forgot password?</Link></div>
                            <div className="mt-5">
                                <button className='btn btn-primary text-white w-full'>Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button className="btn btn-primary text-white w-full" onClick={handleGoogleSignIn}>
                            <svg aria-label="Google logo" className='rounded-full' width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className='text-gray-500 mt-5'>Don't have an account? <Link className='text-blue-500 underline' to="/authentication/register" state={location.state}>Register</Link> now!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;