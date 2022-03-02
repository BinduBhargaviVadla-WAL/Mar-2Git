import { useFormik, Field, form } from "formik";
const Register = () => {
    let formik = useFormik({
        initialValues: {
            email: "",
            userName: "",
            password: "",
        },
            onSubmit(values) {
                console.log(values);
                let registeredUsers = [];
                if (localStorage.getItem("RegisteredUsers")) {
                    registeredUsers = JSON.parse(
                        localStorage.getItem("RegisteredUsers")
                    );
                    registeredUsers.push({
                        Email: formik.values.email,
                        userName: formik.values.userName,
                        password: formik.values.password
                    });
                    localStorage.setItem(
                        "RegisteredUsers",
                        JSON.stringify(registeredUsers)
                    );
                } else {
                    registeredUsers.push({
                        Email: formik.values.email,
                        userName: formik.values.userName,
                        password: formik.values.password
                    });
                    localStorage.setItem(
                        "RegisteredUsers",
                        JSON.stringify(registeredUsers)
                    );
                }
                alert("registered Successfully")
        },
        validate() {
            const errors = {};
            if (formik.values.email.length <= 5 || formik.values.email.length >= 30) {
                errors.email = "Email should be more than 5 characters and less than 30 characters";
            }
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
        <div className="content">
            <div className="register">
                <form onSubmit={formik.handleSubmit} noValidate>
                    <h1>Registration Form</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Id"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div className="text-danger">
                        {formik.errors.email ? formik.errors.email : null}
                    </div>
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
export default Register;