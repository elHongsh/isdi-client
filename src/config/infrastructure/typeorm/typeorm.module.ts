import { Module } from '@nestjs/common';
import { EnvConfigService } from '../env-config/env-config.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from '../env-config/env-config.module';

export const getTypeOrmModuleOptions = (
  config: EnvConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.getDatabaseHost(),
  port: config.getDatabasePort(),
  username: config.getDatabaseUser(),
  password: config.getDatabasePassword(),
  database: config.getDatabaseName(),
  entities: [`${__dirname}./../../../**/*.entity{.ts,.js}`],
  synchronize: true,
  schema: process.env.DATABASE_SCHEMA,
  ssl: false,
});

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvConfigModule],
      inject: [EnvConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeormModule {}
