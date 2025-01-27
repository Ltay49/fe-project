import { useState } from "react";
import { useUser } from "../../UserContext";

export default function SignInButton({ username, name, avatar}) {
  const [password, setPassword] = useState("");
  const { profile, error, signIn } = useUser();

  const passwordHandler = (e) => {
    setPassword(e.target.value); 
  };

  const handleClick = (e) => {
    e.preventDefault();
    signIn(username,password,name,avatar);
  };

  return (
    <div>
      <input 
        type="password" 
        value={password} 
        onChange={passwordHandler} 
        placeholder="Enter password" 
      />
      <button onClick={handleClick}>Sign In</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

