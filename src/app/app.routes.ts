import { Routes } from '@angular/router';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './comp/about/about.component';
import { NewsComponent } from './comp/news/news.component';
import { WorkComponent } from './comp/work/work.component';
import { Comp404Component } from './other/comp404/comp404.component';
import { BlankComponent } from './other/blank/blank.component';
import { Wc1Component } from './workChild/wc1/wc1.component';
import { Wc2Component } from './workChild/wc2/wc2.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "home", component: BlankComponent },
    { path: "child", component: ChildCompComponent },
    { path: "about", component: AboutComponent },
    { path: "news", component: NewsComponent },
    { path: "work", component: WorkComponent, children:[
        {path:"wchild1/:id/:name", component:Wc1Component},
        {path:"wchild2", component:Wc2Component},
        { path: "**", component: Comp404Component }
    ] },
    { path: "**", component: Comp404Component },
];
