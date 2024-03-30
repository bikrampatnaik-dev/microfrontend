import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run namaste-react:serve',
        production: 'nx run namaste-react:preview',
      },
      ciWebServerCommand: 'nx run namaste-react:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
