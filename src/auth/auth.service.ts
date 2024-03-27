import { hash } from 'bcrypt';
import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };
    return this.userModel.create(userObject);
  }

  async login(userObjectLogin: LoginAuthDto) {
    const { email } = userObjectLogin;
    const findUser = this.userModel.findOne({ email });
    if (!findUser) new HttpException('User not found', 404);

    const checkPassword = 
  }
}
