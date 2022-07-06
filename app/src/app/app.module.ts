import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { InfoDialogComponent } from './shared/info-dialog/info-dialog.component';

@NgModule({
  declarations: [AppComponent, InfoDialogComponent],
  imports: [BrowserModule, FeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
