import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "./firebase";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
  confirmationPassword: string;
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const auth = useAuth();
  const currentUser = useUser();
  const [isProcessingSignup, setIsProcessingSignup] = useState(false);
  const router = useRouter();
  const signup = async (email: string, password: string) => {
    try {
      // setIsProcessingSignup(true);
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
      // setIsProcessingSignup(false);
    } catch (e) {
      console.error(e);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    password,
    confirmationPassword,
  }) => {
    if (password === confirmationPassword) {
      signup(email, password);
    } else {
      alert("パスワードが一致しません");
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Eメール</label>
        <input type="email" placeholder="example@test.com"
        {...register("email",{required: true})} 
        />
        {errors.email && <p>Eメールは必須です</p>}
      </div>

      <div>
        <label>パスワード</label>
        <input type="password"
        {...register("password",{required: true})} 
        />
        {errors.password && <p>パスワードは必須です</p>}
      </div>

      <div>
        <label>パスワード再入力</label>
        <input type="password" 
        {...register("confirmationPassword",{required: true})} 
        />
        {errors.confirmationPassword && <p>パスワードの再入力は必須です</p>}

      </div>
      <input type="submit" value="サインアップ" />
    </form>
    </>

  );
}