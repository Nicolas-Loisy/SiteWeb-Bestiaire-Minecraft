import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobCardComponent } from './mob-card/mob-card.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ListeMobsComponent } from './liste-mobs/liste-mobs.component';

@NgModule({
  declarations: [
    AppComponent,
    MobCardComponent,
    MenuComponent,
    FooterComponent,
    ListeMobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
