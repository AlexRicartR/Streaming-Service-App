
import React, {useState, useEffect} from 'react';
import { errorCheck } from '../../utils/validate';
import { useNavigate } from "react-router-dom";
import './Register.css';


const Register = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email : '',
        phone: '',
        password: '',
        password2: ''
    });

    const [userError, setUserError] = useState({
        emailError : '',
        phoneError : '',
        passwordError : '',
        password2Error : ''
    })

    const inputHandler = (e) => {

        setUser((prevState) => ( {
            ...prevState, 
            [e.target.name] : e.target.value
        }));

    }

    const errorHandler = (e) => {
        
        let error = '';

        error = errorCheck(e.target.name, e.target.value);

        if(e.target.name === "password2"){
            if(user.password !== user.password2){
                error = "Escribe el mismo password dos veces"
            }
        }

        setUserError((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));


    }

    return (
        <div className='registerDesign'>
             {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
             {/* <pre>{JSON.stringify(userError, null, 2)}</pre> */}
            <input type='email' name='email' placeholder='escribe un email' onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} className={userError.emailError === '' ? 'basicInput' : 'basicInput basicInputError'} />
            <div className='msgError'>{userError.emailError}</div>
            <input type='text' name='phone' placeholder='telefono' onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} className={userError.phoneError === '' ? 'basicInput' : 'basicInput basicInputError'} />
            <div className='msgError'>{userError.phoneError}</div>
            <input type='password' name='password' placeholder='password' onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} className={userError.passwordError === '' ? 'basicInput' : 'basicInput basicInputError'} />
            <div className='msgError'>{userError.passwordError}</div>
            <input type='password' name='password2' placeholder='otra vez password' onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)} className={userError.password2Error === '' ? 'basicInput' : 'basicInput basicInputError'} />
            <div className='msgError'>{userError.password2Error}</div>
            <button onClick={() => navigate("/login")}>
                logueate loco!
            </button>
        </div>
       
    )
}

export default Register;
