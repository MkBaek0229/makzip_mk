import { useForm } from "react-hook-form";

function LoginForm() {
  const { register } = useForm();
    
  return (
      <form action="">
        <input type="text" {...register("id", { required: true, maxLength : 10})} />
        <button>Login</button>
      </form>    
      
    )

    useForm<FormValue>      
    
}

export default LoginForm;