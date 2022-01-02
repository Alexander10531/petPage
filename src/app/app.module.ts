import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RequestsService } from './services/requests.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        RequestsService,
    ]
})
export class AppModule { }
