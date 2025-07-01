import { Routes } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"", component:AppComponent},
    {path:"child", component:ChildCompComponent}
];
