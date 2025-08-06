import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      email: 'test@test.com',
      password: '123456', 
    },
  ];

  async findByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
