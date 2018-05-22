import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DatepickerModule, AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header/header.component'; 
import { CandidatesComponent } from './candidates/candidates.component';

import { CandidatesService } from './candidates.service';

@NgModule({
  declarations: [AppComponent, HeaderBarComponent, CandidatesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})

export class AppModule {
}