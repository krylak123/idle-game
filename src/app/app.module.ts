import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { BoardModule } from './features/board/board.module';
import { AppState } from '@store/app.state';
import { StatsEffects, StatsReducer } from '@store/stats';

const AppModules = [BoardModule];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModules,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      stats: StatsReducer,
    }),
    EffectsModule.forRoot([StatsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      logOnly: environment.PRODUCTION,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
