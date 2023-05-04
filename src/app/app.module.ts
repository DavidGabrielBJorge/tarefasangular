import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TaskCreateComponent } from './componentes/task/task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { ListTaskComponent } from './componentes/task/list-task/list-task.component';
import { TaskModelComponent } from './componentes/task/task-model/task-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskCreateComponent,
    ListTaskComponent,
    TaskModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
