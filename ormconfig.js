const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'kodo_test',
  synchronize: true,
  useNewUrlParser: true,
  entities: isProduction ? ['dist/server/entity/*.js'] : ['server/entity/*.ts'],
  logging: true,
};
