import { useFormik, Field, form } from "formik";
import { useState } from "react";
const Login = () => {
    let users = [];
    console.log(users);
    let [logedUsers, setLogedUsers] = useState([]);
    let formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
        },
        onSubmit(values) {
            console.log(`form submit`);
            console.log(values);
            let logedUsers = [];
            let userNameInput = String(formik.values.userName)
            let passwordInput = formik.values.password
            let logged = 0;
            if(localStorage.getItem("RegisteredUsers")){
                users = JSON.parse(localStorage.getItem("RegisteredUsers"));
                users.map((val,index) => {
                    if((userNameInput == val.userName) && (passwordInput == val.password)){
                        console.log("loged")
                        logged = 1;
                        localStorage.setItem("Users",JSON.stringify(userNameInput));
                    }    
                })
            }    
                if(logged){
                    console.log("Logged in");
                    alert("Logged In")
                }
                else{
                    console.log("Not Logged in");
                    alert("Please Enter valid Username and Password")
                }
        },
        validate() {
            const errors = {};
            if (formik.values.password.length <= 4 || formik.values.password.length >= 20) {
                errors.password = "Password must be min 4 characters and max 20 characters";
            }
            if (formik.values.userName <= 18 || formik.values.userName >= 120) {
                errors.age = "userName should be a number between 18 and 120"
            }
            return errors;
        },
    });
    console.log(`Formiks:${formik}`);
    
    return (
        <div className="login">
            <div className="register">
                <form onSubmit={formik.handleSubmit} noValidate>
                    <h1>Registration Form</h1>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Enter User Name"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                    />
                    <div className="text-danger">
                        {formik.errors.userName ? formik.errors.userName : null}
                    </div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <div className="text-danger">
                        {formik.errors.password ? formik.errors.password : null}
                    </div>
                    <button type="submit" className="submitBtn">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login;