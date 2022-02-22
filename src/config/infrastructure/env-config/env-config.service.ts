import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../domain/database.interface';

@Injectable()
export class EnvConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST');
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME');
  }

  getDatabasePassword(): string {
    return this.configService.get('DATABASE_PASSWORD');
  }

  getDatabasePort(): number {
    return this.configService.get('DATABASE_PORT');
  }

  getDatabaseSchema(): string {
    return this.configService.get('DATABASE_SCHEMA');
  }

  getDatabaseSync(): boolean {
    return this.configService.get('DATABASE_SYNCHRONIZE');
  }

  getDatabaseUser(): string {
    return this.configService.get('DATABASE_USER');
  }
}
