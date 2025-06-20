import UserModel from "../models/auth.model.js";
import { hashPassword, comparePassword } from "../lib/hashPassword.js";

export default class AuthRepository {
  async signup(user) {
    try {
      const hashedPassword = await hashPassword(user.password);

      const newUser = new UserModel({
        ...user,
        password: hashedPassword,
      });
      await newUser.save();

      const { password, ...userWithoutPassword } = newUser.toObject();
      return userWithoutPassword;
    } catch (error) {
      console.error(error);
      throw new Error(`Signup failed: ${error.message}`);
    }
  }

  async login(userData) {
    try {
      const user = await UserModel.findOne({ email: userData.email });
      if (!user) {
        throw new Error("Invalid email or password");
      }

      const isMatch = await comparePassword(userData.password, user.password);
      if (!isMatch) {
        throw new Error("Invalid email or password");
      }

      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    } catch (error) {
      console.error(error);
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  async logout() {
    try {
    } catch (error) {
      console.error(error);
      throw new Error(`Logout failed: ${error.message}`);
    }
  }
}
