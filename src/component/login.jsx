import axios from "axios";
import { useRef } from "react";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = {
      email: email.current.value,
      password: password.current.value,
    };
    if (account.email && account.password) {
      const response = await axios.post("", account);
    }
  };

  const handleChange = (e)=>{
      console.log(e.target);
  }

  return <form onSubmit={handleSubmit}>
    {/* <input type="email" onChange={handleChange} />
    <input type="password" onChange={handleChange} /> */}
  </form>;
};

export default Login;
