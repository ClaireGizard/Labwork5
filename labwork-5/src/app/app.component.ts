import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


/**
 * Claire Gizard -- 1106363
 * Pierre Munin -- 1106420
 */
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'LoginPage';
 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Plugins available.
      // Higher level things.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
