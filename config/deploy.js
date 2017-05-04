module.exports = function(deployTarget) {
  var ENV = { };

  if (deployTarget === 'production') {
    ENV.sftp = {
      host: 'martinic.nl',
      remoteDir: '/home/martinic/http-docs/sftptest',
      remoteUser: process.env.remoteUser,
      privateKey: process.env.privateKey
    };
  }

  return ENV;
};
