import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesComponent } from './routes/routes.component';
import { RoutesService } from './routes/routes.service';

const _routes: Routes = [
  { path: '', redirectTo: 'routes', pathMatch: 'full'},
  { path: 'routes', component: RoutesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(_routes)
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
