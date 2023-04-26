import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class AuthRepository {
  async signIn(email: string, password: string) {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, {
      email,
      password,
    });
    return data;
  }
}

export default AuthRepository;
