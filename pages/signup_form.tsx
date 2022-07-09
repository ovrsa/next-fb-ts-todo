import { useForm } from "react-hook-form";
// import Header from "./Header";
import { useState } from "react";
import { useAuth, useUser } from "./firebase";
import { useRef } from 'react';
import { auth } from './firebase';

export function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const auth = useAuth();

  const SignUp = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      auth.createUserWithEmailAndPassword(email.value, password.value);
      
  }
}
  // const onSubmit: SubmitHandler<Inputs> = ({
  //   email,
  //   password,
  //   confirmationPassword,
  // }) => {
  //   if (password === confirmationPassword) {
  //     signup(email, password);
  //   } else {
  //     alert("パスワードが一致しません");
  //   }
  // };

// firebaseにメソッドを渡す


  console.log(data);
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      {/* <Header /> */}
      
      {/* メールアドレス */}
      <div>
        <label>Eメール</label>
        <input type="email" placeholder="example@test.com"
        {...register("email",{required: true})} 
        />
      </div>

      {/* パスワード*/}
      <div>
        <label>パスワード</label>
        <input type="password" placeholder="パスワードを入力"
        {...register("password",{required: true})} />
      </div>

      {/* パスワード再入力*/}
      {/* <div>
      <label>パスワード再入力</label>
        <input type="password" 
        {...register("confirmationPassword",{required: true})} 
        />
      </div> */}
      <input type="submit" />
      
    </form>
  );
}

export default App;