/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { IErrorHandler } from './app/contracts/IErrorHandler';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err =>
    {
      console.error(err);

      let handler = platformBrowserDynamic().injector.get(IErrorHandler);
      handler.Handle(err);
      
    });
