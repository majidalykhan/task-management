import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 8000,
  username: 'postgres',
  password: 'majidkhan',
  database: 'nest-taskmanagement',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
