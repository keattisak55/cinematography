import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GenreNamePipe } from './services/pipe/genre-name.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PopularComponent } from './components/popular/popular.component';
import { TrendingComponent } from './components/trending/trending.component';
import { AllComponent } from './components/all/all.component';
 

@NgModule({
  declarations: [
    AppComponent,
    GenreNamePipe,
    HomeComponent,
    NavComponent,
    PopularComponent,
    TrendingComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
