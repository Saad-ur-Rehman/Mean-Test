import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule,
         MatExpansionModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCreateComponent } from './Lists/list-create/list-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './Lists/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
