import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly usersModel: Model<User>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    try {
      const salt = bcrypt.genSaltSync(10);
      createUserInput.password = await bcrypt.hash(
        createUserInput.password,
        salt,
      );
      createUserInput.email = createUserInput.email.toLowerCase();
      const user = new this.usersModel(createUserInput);
      return user.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      return await this.usersModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(email: string) {
    const user = (
      await this.usersModel.findOne({ email: email.toLowerCase() })
    ).toObject();
    if (user === null) {
      throw new Error('User does not exist');
    } else {
      return user;
    }
  }
}
