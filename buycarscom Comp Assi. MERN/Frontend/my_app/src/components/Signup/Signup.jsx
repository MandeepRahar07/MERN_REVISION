import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Assuming you are using Redux
import { SingupPost } from '../Redux/actions';


function SignupD() {
  const [UserData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    city: '',
  });

  const dispatch = useDispatch();
   
  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...UserData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(SingupPost(UserData));
  }

  return (
    <div>
      Signup
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="name"
          value={UserData.name}
          onChange={handlechange}
        />

        <input
          type="text"
          name="email"
          value={UserData.email}
          onChange={handlechange}
        />

        <input
          type="password"
          name="password"
          value={UserData.password}
          onChange={handlechange}
        />

        <input
          type="text"
          name="phoneNumber"
          value={UserData.phoneNumber}
          onChange={handlechange}
        />

        <input
          type="text"
          name="city"
          value={UserData.city}
          onChange={handlechange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignupD;
