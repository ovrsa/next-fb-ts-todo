// ユーザ情報を含むuserを共有することが可能になる
import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from './firebase';

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [user, setUser] = useState('');

  const value = {
    user,
  };

  useEffect(() => {
    // ユーザがサインイン、サインアウトを監視するメソッドonAuthStateChanged
    // FirebaseではリスナーとしてonAuthStateChangedはサインイン、サインアウトが行われると実行され、
    // サインインの場合はuserオブジェクトにuserに関する値を持ちます。サインアウトの場合はnullとなる
    const unsubscribed = auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}