import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TaskCreateComponent } from './componentes/task/task-create/task-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListTaskComponent } from './componentes/task/list-task/list-task.component';
import { TaskModelComponent } from './componentes/task/task-model/task-model.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteTaskComponent } from './componentes/task/delete-task/delete-task.component';
import { EditTaskComponent } from './componentes/task/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskCreateComponent,
    ListTaskComponent,
    TaskModelComponent,
    DeleteTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
