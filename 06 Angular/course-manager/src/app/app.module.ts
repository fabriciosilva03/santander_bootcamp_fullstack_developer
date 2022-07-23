import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponet } from './star/star.component';
import { RelplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.componet';
import { Erro404Componennt } from './erro-404/erro-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponet,
    RelplacePipe,
    NavBarComponent,
    Erro404Componennt,
    CourseInfoComponent,
    
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: Erro404Componennt
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
