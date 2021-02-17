import { User, UserDocument } from './userModel';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDto, LoginDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUser: UserDto) {
    const saltRounds = 10;
    var obj = createUser;

    let salt = await bcrypt.genSalt(saltRounds);

    let hashed = await bcrypt.hash(obj.password, salt);

    obj.password = hashed;
    const user = new this.userModel(obj);
    let promise = await user.save();

    return promise;
  }

  async login(attempt: LoginDto) {
    let user = await this.userModel.findOne({ email: attempt.email });

    // fetching user
    if (!user) return { message: 'user does not exist', exists: false };

    // comparing passwords
    let isValid = await bcrypt.compare(attempt.password, user.password);

    if (isValid) return { username: user.username, email: user.email };
    return { message: 'password is not valid', exists: true };
  }
}
