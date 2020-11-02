const packageJson = require('../../package.json');

export const environment = {
  appName: 'Hare',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '/hare',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
