module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/kamon/dist/'   //任意
      : '/'
}
