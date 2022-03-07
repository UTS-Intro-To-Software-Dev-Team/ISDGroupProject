import React from "react";
import {useForm} from "react-hook-form";

function Register (){
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email"
                {...register("email",
                    {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})
                }
            />

            <input type="password" placeholder="Password"
                {...register("password", {required: true, minLength: 8})
                }
            />

            <input type="submit"/>
            {errors.email && <p>Invalid Email</p>}
            {errors.password && <p>Password Invalid</p>}
        </form>
    );
}

export default Register
