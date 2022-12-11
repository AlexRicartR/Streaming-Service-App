import React, { useState } from "react";
import { Input } from "antd";
import { errorCheck } from "../../utils/validate";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { submitLogin } from "../../userSlices/userSlices";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userLogin = async (body) => {
        let resp = await axios.post("http://localhost:3000/users/loginUser", body);
        // if (resp.data === "Password or email is incorrect") {
        //     setUserError((prevState) => ({
        //         ...prevState,
        //         noEmail: "El email o la contraseña son incorrectos",
        //     }));

        // } else if (resp.data.message === "Login successful") {
        //     setUserError((prevState) => ({
        //         ...prevState,
        //         noEmail: "",
        //     }));


            let jwt = resp.data.jwt;
            let credentials = {
                token: jwt,
            };

            dispatch(submitLogin({ credentials: credentials }));

            localStorage.setItem("jwt", credentials.token);

            navigate("/");
        
    };

    // Hooks

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [userError, setUserError] = useState({
        emailError: "",
        passwordError: "",
        noEmail: "",
    });

    let body = {
        email: user.email,
        password: user.password,
    };

    // const validateBody = (body) => {
    //     if (
    //         body.email !== "" &&
    //         body.password &&
    //         userError.emailError === "" &&
    //         userError.passwordError === ""
    //     ) {
    //         return true;
    //     }
    // };

    const submitLogin = (e) => {
        e.preventDefault();
        userLogin(body);

        // if (validateBody(body)) {
        // } else {
        //     setUserError((prevState) => ({
        //         ...prevState,
        //         noEmail:
        //             "No se puede enviar el formulario. Revise que no hay campos vacíos y que el formato de los mismos es el correcto",
        //     }));

        // }
    };

    // Handler de los inputs

    const inputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const errorHandler = (field, value, type, password1) => {
        let error = "";

        error = errorCheck(value, type, password1);

        setUserError((prevState) => ({
            ...prevState,
            [field + "Error"]: error,
        }));
    };

    return (
        <div className="container-fluid bg-primary">
            <form
                className="bg-primary vh-100 d-flex justify-content-center align-items-center  mt-lg-0"
                onSubmit={(e) => submitLogin(e)}
            >
                <div className="row mt-5 justify-content-center">
                    <div className="text col-12 d-flex flex-column justify-content-between align-items-center ps-2 pe-2">
                        <h1 className="text-light mb-3 pb-5 text-center">
                            Please {" "}
                            <span className="colortxt2"> login!</span>{" "}
                        </h1>

                        <div className="errorInput mb-3 ft-5"> {userError.noEmail} </div>

                        {/* Inputs */}

                        <Input
                            className="inputs "
                            name="email"
                            onChange={(e) => inputHandler(e)}
                            type="email"
                            placeholder="Email"
                        />

                        <div className="errorInput mb-3"> {userError.emailError} </div>

                        <Input.Password
                            className="inputs"
                            name="password"
                            onChange={(e) => inputHandler(e)}
                            type="password"
                            placeholder="Password"
                        />

                        <div className="errorInput mb-3"> {userError.passwordError} </div>
                        <div className="boton mt-5">
                            <button onClick={(e) => submitLogin(e)}>Logueate</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;

