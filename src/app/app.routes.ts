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
import { NewsChild1Component } from './comp/newsChilds/news-child1/news-child1.component';
import { NewsChild2Component } from './comp/newsChilds/news-child2/news-child2.component';
import { TokenInjectionComponent } from './tokenInj/token-injection/token-injection.component';
import { ObservableComponent } from './comp/observable/observable.component';
import { DataFromApiComponent } from './comp/observable2/data-from-api/data-from-api.component';
import { OfComponent } from './comp/rxjsOperators/creationOperators/of/of.component';
import { FromComponent } from './comp/rxjsOperators/creationOperators/from/from.component';
import { IntervalComponent } from './comp/rxjsOperators/creationOperators/interval/interval.component';
import { TimerComponent } from './comp/rxjsOperators/creationOperators/timer/timer.component';
import { EmptyComponent } from './comp/rxjsOperators/creationOperators/empty/empty.component';

import { MapComponent } from './comp/rxjsOperators/pipeableOperators/map/map.component';
import { FilterComponent } from './comp/rxjsOperators/pipeableOperators/filter/filter.component';
import { FromeventComponent } from './comp/rxjsOperators/pipeableOperators/fromevent/fromevent.component';
import { MergemapComponent } from './comp/rxjsOperators/pipeableOperators/mergemap/mergemap.component';
import { ConcatmapComponent } from './comp/rxjsOperators/pipeableOperators/concatmap/concatmap.component';
import { SwitchmapComponent } from './comp/rxjsOperators/pipeableOperators/switchmap/switchmap.component';
import { ExhaustmapComponent } from './comp/rxjsOperators/pipeableOperators/exhaustmap/exhaustmap.component';
import { SignalComponent } from './comp/Signals/signal/signal.component';
import { CreationComponent } from './comp/Signals/creation/creation.component';
import { TodoListComponent } from './comp/Signals/todo-list/todo-list.component';
import { ComputedSignalsComponent } from './comp/Signals/computed-signals/computed-signals.component';
import { EffectSignalsComponent } from './comp/Signals/effect-signals/effect-signals.component';
import { UntrackSignalsComponent } from './comp/Signals/untrack-signals/untrack-signals.component';
import { CartsignalComponent } from './comp/Signals/cartsignal/cartsignal.component';
import { LinkedSignalComponent } from './comp/Signals/linked-signal/linked-signal.component';
import { ConvtObsToSignalComponent } from './comp/Signals/convt-obs-to-signal/convt-obs-to-signal.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "home", component: BlankComponent },
    { path: "child", component: ChildCompComponent },
    { path: "about", component: AboutComponent },
    { path: "tokenInj", component: TokenInjectionComponent },
    {
        path: "news", component: NewsComponent,
        children: [
            { path: "newschild1", component: NewsChild1Component },
            { path: "newschild2", component: NewsChild2Component }
        ]
    },
    {
        path: "work", component: WorkComponent, children: [
            { path: "wchild1/:id/:name", component: Wc1Component },
            { path: "wchild2", component: Wc2Component },
            { path: "**", component: Comp404Component }
        ]
    },

    {
        path: "observable", component: ObservableComponent, children: [
            { path: "datafromapi", component: DataFromApiComponent },
            { path: "of", component: OfComponent },
            { path: "from", component: FromComponent },
            { path: "interval", component: IntervalComponent },
            { path: "timer", component: TimerComponent },
            { path: "empty", component: EmptyComponent },

            // pipeable operators
            { path: "map", component: MapComponent },
            { path: "filter", component: FilterComponent },
            { path: "fromevent", component: FromeventComponent },
            { path: "mergemap", component: MergemapComponent },
            { path: "concatmap", component: ConcatmapComponent },
            { path: "switchmap", component: SwitchmapComponent },
            { path: "exhaustmap", component: ExhaustmapComponent },
        ]
    },

    // Signal
    {
        path: "signal", component: SignalComponent, children: 
        [
            { path: "creation", component: CreationComponent },
            { path: "todolist", component: TodoListComponent },
            { path: "computedsignals", component: ComputedSignalsComponent },
            { path: "effectsignals", component: EffectSignalsComponent },
            { path: "untracksignals", component: UntrackSignalsComponent },
            { path: "cartsignals", component: CartsignalComponent },
            { path: "linkedsignals", component: LinkedSignalComponent },
            { path: "obstosignal", component: ConvtObsToSignalComponent },
        ]
    },
    { path: "**", component: Comp404Component },
];
