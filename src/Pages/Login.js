import { useState } from "react";
import { useLogin } from "../Hooks";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [formValues, setFormValues] = useState({email : "", password : ""})

    const navigate = useNavigate();

    const changeHandler = e => {
        setFormValues({...formValues, [e.target.name] : e.target.value});
    }

    const  {mutateAsync} = useLogin(); 

    const handleSubmit = async e => {
        e.preventDefault();
        const {data} = await mutateAsync(formValues);
        if(data.token) {
            localStorage.setItem("token", data.token);
            navigate("/admin");
        }
        
    }

    return (
        <div className="container">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-4">
                    <div className="card p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">ایمیل :</label>
                                <input type="email" className="form-control" name="email" value={formValues.email} onChange={e => changeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">پسورد :</label>
                                <input type="text" className="form-control" name="password" value={formValues.password} onChange={e => changeHandler(e)}/>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">ورود</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;