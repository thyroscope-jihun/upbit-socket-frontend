import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class AccountRepository {
  async signIn(accessKey: string, secretKey: string) {
    const payload = {
      access_key: accessKey,
      nonce: uuidv4(),
    };
    return jwt.sign(payload, secretKey);
  }
}

export default AccountRepository;
