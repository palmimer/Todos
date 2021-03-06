import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { TodoModalComponentModule } from './app/todo-modal/todo-modal.component.module';
import './polyfills';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//platformBrowserDynamic()
//  .bootstrapModule(TodoModalComponentModule)
//  .then(ref => {
//    // Ensure Angular destroys itself on hot reloads.
//    if (window['ngRef']) {
//      window['ngRef'].destroy();
//    }
//    window['ngRef'] = ref;

//    // Otherwise, log the boot error
//  })
//  .catch(err => console.error(err));
