import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { BucketComponent } from './bucket/bucket.component';
import { BloodService } from './shared/bloodBank.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { DragAndDropModule } from 'angular-draggable-droppable';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    BloodBankComponent,
    PatientRecordComponent,
    BucketComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragAndDropModule
  ],
  providers: [BloodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
