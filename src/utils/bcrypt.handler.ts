import { compare, hash } from "bcryptjs";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const verify = async (pass: string, passHash: string) => {
  const isValid = compare(pass, passHash);
  return isValid;
};
export { encrypt, verify };
