import { useState } from "react";
import { useRegister } from "../Hooks";


const Register = () => {

    const [formValues, setFormValues] = useState({username : "", email : "", password : ""})

    const changeHandler = e => {
        setFormValues({...formValues, [e.target.name] : e.target.value});
    }

    const  {mutateAsync} = useRegister(); 

    const handleSubmit = async e => {
        e.preventDefault();
        mutateAsync(formValues);
    }

    return (
        <div className="container">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-4">
                    <div className="card p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">نام کاربری :</label>
                                <input type="text" className="form-control" name="username" value={formValues.username} onChange={e => changeHandler(e)}/>
                            </div>
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

export default Register;