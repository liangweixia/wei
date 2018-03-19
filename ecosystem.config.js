module.exports = {
    apps : [{
      name        : "worker",
      script      : "./bin/www",
      watch       : true,
      env: {
        "NODE_ENV": "development",
      },
      env_production : {
         "NODE_ENV": "production"
      },
      exec_mode  : "cluster"
    }]
  }