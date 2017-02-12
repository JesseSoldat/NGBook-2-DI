import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisSampleApp } from './components/di_sample';
import { DiMisc } from './components/di_misc';
import { SimpleApi } from './components/simple_api';
import { ComplexApp } from './components/complex';
import { ApiValueUrl } from './components/api_url';

import { SimpleService, ParamsService } from './components/di_misc';
import { ApiService } from './services/api_service';
import { ViewPortService } from './services/viewport_service';
import { ApiValueService, API_URL } from './services/api_value_service';

const isProduction: boolean = true;

@NgModule({
  declarations: [
    AppComponent,
    DisSampleApp,
    DiMisc,
    SimpleApi,
    ComplexApp,
    ApiValueUrl
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  ApiValueService,
  {
    provide: API_URL, 
    useValue: isProduction ?
      'https://production-api.sample.com' :
      'http://dev-api.sample.com'
  },
  ApiService,
  {
    provide: 'ApiServiceAlias', useExisting: ApiService
  },
  SimpleService,
  ViewPortService,
  {
    provide: ParamsService,
    useFactory: (): ParamsService => new ParamsService('Hello from JLab')
  },
  {
    provide: 'SizeService',
    useFactory: (viewport: any) => {
      return viewport.determineService();
    },
    deps: [ViewPortService]
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
