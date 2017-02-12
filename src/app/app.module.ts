import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisSampleApp } from './components/di_sample';
import { DiMisc } from './components/di_misc';

import { SimpleService, ParamsService } from './components/di_misc';

@NgModule({
  declarations: [
    AppComponent,
    DisSampleApp,
    DiMisc
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  SimpleService,
    {
      provide: ParamsService,
      useFactory: (): ParamsService => new ParamsService('Hello from JLab')
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
