import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4a9d956fa40c46d6a056d1392f7d8aca',
  appName: 'tlove',
  webDir: 'dist',
  server: {
    url: 'https://4a9d956f-a40c-46d6-a056-d1392f7d8aca.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;