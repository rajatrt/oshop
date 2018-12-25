import { AppComponent } from './../app/app.component';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    AppComponentapiKey: "AIzaSyCF3eiOUFjkweiTRRxkvLzFCall7dpoxZw",
    authDomain: "oshop-7c3c1.firebaseapp.com",
    databaseURL: "https://oshop-7c3c1.firebaseio.com",
    projectId: "oshop-7c3c1",
    storageBucket: "oshop-7c3c1.appspot.com",
    messagingSenderId: "806229120743"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.