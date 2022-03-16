import React from "react";
import {useForm} from "react-hook-form";

function Register (){
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch('http://localhost:4000/registerUser', {
            method:'POST',
            body: JSON.stringify(data)
        }).then(response => {
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                console.log('Somthing happened wrong');
            }
        }).catch(err => {
            console.log(err);
        });
    };

    //??(onOnSubmit)
    //fetch('/registerData', {
    //     method:'POST',
    //     body:JSON.stringify(data)
    // })
    // .catch(err => {
    //     console.log(err)
    //}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email"
                {...register("email",
                    {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})
                }
            />

            <input type="password" placeholder="Password"
                {...register("password", {required: true, minLength: 8})}
            />

            <input type="submit"/>
            {errors.email && <p>Invalid Email</p>}
            {errors.password && <p>Password Invalid, should be 8 characters long.</p>}
        </form>
    );
}

export default Register
