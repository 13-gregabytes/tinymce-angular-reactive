import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FormComponent } from './app/app.component';

bootstrapApplication(FormComponent, appConfig)
  .catch((err) => console.error(err));
