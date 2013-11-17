var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    root: rootPath,
    app: {
      name: 'Noditor -- ACE editor with SFTP'
    }


    
  },
  test: {
    root: rootPath,
    app: {
      name: 'Noditor -- ACE editor with SFTP'
    }
  },
  production: {}
}

