import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run ui-webmethods.io:serve:development',
        production: 'nx run ui-webmethods.io:serve:production',
      },
      ciWebServerCommand: 'nx run ui-webmethods.io:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
