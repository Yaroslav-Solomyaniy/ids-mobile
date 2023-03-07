import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';
import {IUserData, ILoginParams, useLogin} from '../api/useAuth';

interface IAuth {
  user: IUserData | null;
  login: (credentials: ILoginParams) => void;
  logout: () => void;
  student: Boolean | null;
  error: string | null;
}

const defaultValue: IAuth = {
  user: null,
  login: () => undefined,
  logout: () => undefined,
  student: null,
  error: null,
};

export const authContext = createContext<IAuth>(defaultValue);

const getStorageData = async (): Promise<IUserData | null> => {
  try {
    const data: string | null =
      (await AsyncStorage.getItem('userData')) || null;

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (e) {
    return null;
  }
};

const setAsyncStorageUserData = async (value: IUserData) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userData', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const setAsyncStorageUserToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('accessToken', value);
  } catch (e) {
    console.log(e);
  }
};

const ClearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
  }
};

const AuthProvider = ({children}: {children: any}) => {
  const [user, setUser] = useState<IUserData | null>(null);
  const [isStudent, setIsStudent] = useState<Boolean | null>(null);
  const {data, login, error} = useLogin();

  useEffect(() => {
    if (data) {
      setAsyncStorageUserData(data);
      setAsyncStorageUserToken(data.accessToken);
      if (data.role === 'student') {
        setIsStudent(true);
      }
    }
  }, [data]);
  const logout = () => {
    ClearStorage();
    setUser(null);
    setIsStudent(null);
  };

  useEffect(() => {
    try {
      const recordToState = async () => {
        setUser(await getStorageData());
      };

      recordToState();
    } catch (e) {
      logout();
    }
  }, []);

  return (
    <authContext.Provider
      value={{user, student: isStudent, login, logout, error}}>
      {children}
    </authContext.Provider>
  );
};
export default AuthProvider;

export const AuthContext = (): IAuth => useContext(authContext);
