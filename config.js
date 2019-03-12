// Create and export configuration variables

// COntainer for all the environment
const environment = {};

// Staging (deafult) enviroment
environment.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: 'staging'
};

// Production enviroment
environment.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: 'production'
};

// Determine which envioroment was passed as a command-line argument
const currentEnvironment =
  typeof process.env.NODE_ENV == 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

// Check that the current enviroment is one of the environment above, if not, default to staging
const environmentToExport =
  typeof environment[currentEnvironment] == 'object'
    ? environment[currentEnvironment]
    : environment.staging;

// Export the module
module.exports = environmentToExport;
