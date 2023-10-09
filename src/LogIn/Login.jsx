import { useState } from "react"
import "./Login.css"
import Navbar from "../NavBar/Navbar";

function Login() {

  const [formData, setFormData] = useState({
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Phone Number:', formData.phoneNumber);
  };

  return (
    <>
    <Navbar/>
    <div className="login-container">
     <div className="login-content">
     <h1>Login</h1>
     <p>Mobile number used for membership registration enter</p>
     <form onSubmit={handleSubmit}>
        <div className="form-login">
          <label>Mobile number :</label>
          <span>+91</span>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="login-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
     </div>
    </div>
    </>
  )
}

export default Login