import { DataSource } from 'typeorm';

export const dataConfig = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 8080,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: [__dirname + '/./migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
