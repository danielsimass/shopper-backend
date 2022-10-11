import { dataConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = dataConfig;

      return dataSource.initialize();
    },
  },
];
