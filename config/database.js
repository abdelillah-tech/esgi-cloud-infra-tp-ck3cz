module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-34-247-118-233.eu-west-1.compute.amazonaws.com',
        port: '5432',
        database: 'd4vesib4rfujc2',
        username: 'ggjkpmleygmitc',
        password: '020f7fce7e15ddfd8d5fae82ef3eb70bcfa08580fac31cb501ae9c6179c6aabb',
      },
      options: {
        ssl: false,
      },
    },
  },
});
