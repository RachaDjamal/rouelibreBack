module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '051cc1ec887b4ea69ad178407208b39d'),
  },
});
