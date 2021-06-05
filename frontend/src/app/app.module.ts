import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '@environments/environment';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, LayoutModule, SocketIoModule.forRoot(config)],
  bootstrap: [AppComponent],
})
export class AppModule {}
