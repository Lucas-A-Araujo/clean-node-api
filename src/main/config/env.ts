export default {
  mongoUrl: process.env.MONG_URL || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 5050
}
