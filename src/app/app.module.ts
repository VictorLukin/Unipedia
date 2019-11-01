import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductViewerComponent } from './product-viewer/product-viewer.component';
import { ProductDeskComponent } from './product-desk/product-desk.component';
import { PostViewerComponent } from './post-viewer/post-viewer.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { RatingComponent } from './shared/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SigninComponent,
    UserAccountComponent,
    ProductEditorComponent,
    ProductViewerComponent,
    ProductDeskComponent,
    PostViewerComponent,
    PostEditorComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
