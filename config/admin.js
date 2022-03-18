module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '807612035cf7e667cc4a571aeb78ba32'),
  },
});
