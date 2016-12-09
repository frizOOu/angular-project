import { Component } from '@angular/core';
import {NgModule} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: 'app/Templates/tpl1.html',
})
export class AppComponent { }




@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);