import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import { errorAlert, successAlert } from '../../Utility/sweetAlert';

const RegisterPage = () => {
    const { createUserWithEmail, googleSignIn, updateDisplayName, updatePhotoURL } = use(AuthContext);

    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleRegisterWithEmail = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            errorAlert("Your passwords does not match!")
            return
        }

        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;

        createUserWithEmail(email, password)
            .then(() => {
                updateDisplayName(userName)
                    .catch((error) => {
                        errorAlert(error.message);
                        return;
                    })

                updatePhotoURL(photoURL)
                    .catch((error) => {
                        errorAlert(error.message);
                        return;
                    })

                successAlert('Welcome!', "You've successfully registered!")
                    .then(() => {
                        navigate(location.state || '/');
                    })
            })
            .catch((error) => {
                errorAlert(error.message);
            })

    }


    const handleGoogleRegister = () => {
        googleSignIn()
            .then(() => {
                successAlert("Welcome!", "You've successfully registered.")
                    .then(() => {
                        navigate(location.state || '/');
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <section className='bg-base-200'>
            <div className='w-11/12 md:w-10/12 mx-auto py-5 md:py-10 lg:py-20'>
                <h1 className='text-center text-4xl font-bold'>Register Now</h1>
                <div className='grid lg:grid-cols-2 items-center mt-10 gap-10 shadow-sm rounded-2xl px-10 py-10 bg-base-100'>
                    <div className='w-full'>
                        <form onSubmit={handleRegisterWithEmail}>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Name</legend>
                                <input name="name" type="text" className="input w-full" placeholder="Enter your Name" required />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Email</legend>
                                <input name="email" type="text" className="input w-full" placeholder="Enter your email" required />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Photo URL</legend>
                                <input name="photoURL" type="text" className="input w-full" placeholder="Enter your photoURL" required />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Password</legend>
                                <label className='input validator w-full'>
                                    <input
                                        name="password"
                                        type={showPass ? 'text' : 'password'}
                                        className="w-full"
                                        placeholder="Enter Password"
                                        pattern='^(?=.*[a-z])(?=.*[A-Z]).{6,}$'
                                        title="Must be atleast 6 characters, including lowercase letter, uppercase letter"
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                    <button type='button' className='btn btn-circle btn-sm' onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ?
                                                <FaEyeSlash size={16} />
                                                :
                                                <FaEye size={16} />
                                        }
                                    </button>
                                </label>
                                <p className="validator-hint hidden">
                                    Must be atleast 6 characters, including
                                    <br />At least one lowercase letter <br />At least one uppercase letter
                                </p>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend text-lg">Confirm Password</legend>
                                <label className='input w-full'>
                                    <input
                                        name="confirmPassword"
                                        type={showConfirmPass ? 'text' : 'password'}
                                        className="w-full"
                                        placeholder="Re-enter your Password"
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        required />
                                    <button type='button' className='btn btn-circle btn-sm' onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                        {
                                            showConfirmPass ?
                                                <FaEyeSlash size={16} />
                                                :
                                                <FaEye size={16} />
                                        }
                                    </button>
                                </label>
                            </fieldset>
                            {
                                password !== confirmPassword && <p className='text-error text-sm'>Your passwords does not match!</p>
                            }

                            <div className="flex w-full flex-col mt-5">
                                <button type='submit' className='btn btn-primary text-white'>Register</button>
                                <div className="divider">OR</div>
                                <button type='button' className="btn btn-primary text-white" onClick={handleGoogleRegister}>
                                    <svg aria-label="Google logo" width="16" height="16" className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Register with Google
                                </button>
                            </div>
                        </form>
                        <p className='text-gray-500 mt-5'>Already have an account? <Link className='text-blue-500 underline' to="/authentication/register">Login</Link> now!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;