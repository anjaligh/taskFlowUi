import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HeaderComponent } from './core/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { BreadcrumbsComponent } from "src/app/shared/breadcrumbs/breadcrumbs.component";
import { SummaryCardComponent } from './shared/summary-card/summary-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbsComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
