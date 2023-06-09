import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import * as jwt from "jsonwebtoken";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class AuthRepository {
  async signIn(accessKey: string, secretKey: string) {
    const payload = {
      access_key: accessKey,
      nonce: uuidv4(),
    };
    console.log(payload);
    jwt.sign(payload, secretKey, (err, token) => {
      if (err) {
        console.log(err);
      } else {
        console.log(token);
      }
    });
    return jwt.sign(payload, secretKey);
  }
}

export default AuthRepository;
