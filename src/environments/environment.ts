// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_JAVA: 'http://172.22.43.51:30000/api/pipeline',
  URL_JAVA_GRAPH: 'http://172.22.43.51:30000/api/graph',
  URL_GOOGLE: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
  API_KEY_GOOGLE: 'AIzaSyA0wl0GTeqSZQOnYkpG_OMYkmw9J8KEOwY'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
