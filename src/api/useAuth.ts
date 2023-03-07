import {useState} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export interface ILoginParams {
  email: string;
  password: string;
}
export interface IUserData {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  role: 'admin' | 'student' | 'curator' | 'teacher';
  accessToken: string;
  refreshToken: string;
}

interface ILogin {
  data: IUserData | null;
  login: (params: ILoginParams) => void;
  error: string | null;
}

interface IDecodedData {
  sub: number;
  role: string;
  iat: number;
  exp: number;
}

export const useLogin = (): ILogin => {
  const [data, setData] = useState<IUserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = (params: ILoginParams) => {
    axios
      .post('https://dev-csbc.fox.ck.ua/auth/login', params)
      .then(response => {
        const decode: IDecodedData = jwt_decode(
          `${response.data?.accessToken}`,
        );
        setData({...response.data, role: decode.role});
      })
      .catch(e => {
        setError(e.response.data.message);
      });
  };

  return {data, login, error};
};
