---
title: Angular 9 lazy and pre loading
date: "2020-03-17T18:30:00.284Z"
description: "Implement lazy loading and pre loading in Angular"
---

Lazy loading is a very useful (large application with many routes for example) but sometimes you need to preload somes modules.

## Setup your new angular application

First create your new project (Write yes for adding Angular routing)
```
ng new myapp
```

Go to the root folder of the app

```
cd myapp
```

## Create two modules, one for lazy loading, and one for pre loading

Lazy loading module :

```
ng generate module lazyloadingmodule --route lazy --module app.module
```

Pre loading module :

```
ng generate module preloadingmodule --route preload --module app.module
```

### app-routing.module.ts

As you can see, the file app-routing.module.ts is now updated with :

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazyloadingmodule/lazyloadingmodule.module').then(m => m.LazyloadingmoduleModule)
  },
  {
    path: 'preload',
    loadChildren: () => import('./preloadingmodule/preloadingmodule.module').then(m => m.PreloadingmoduleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

The loadChildren property is used to specify the module that needs to be lazy-loaded when it is first navigated to.

In Angular 8, dynamic import syntax was introduced for lazy-loaded routes as one of the new features instead of a custom string as in previous versions.

Now we need to update our preload route with a custom preload strategy.
We add a preload flag to the routes you want to preload and then check for the flag when determining whether to preload the lazy-loaded module:

```javascript
  {
    path: 'preload',
    loadChildren: () => import('./preloadingmodule/preloadingmodule.module').then(m => m.PreloadingmoduleModule),
    data: { preload: true } // preload flag
  }
```

And then we are going to create a service that implements PreloadingStrategy interface. To implement the interface, we are going to add a preload function. The preload function accepts two arguments – a route and a loader function:

And the loader function loads the lazy-loaded module asynchronously when called.

Inside the preload function, we are going to check If the preload flag is set to true, and then return the loader function else we return a null observable.

```javascript
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class MyPreloadingStrategyService implements PreloadingStrategy {

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            return load();
        } else {
            return of(null);
        }
    }

}
```

## Set Up the preload service for preloading strategy

And finally, we need to set the preload service we created above as the preloading strategy. First you need to MyPreloadingStrategyService in param of preloadingStrategy and add in providers our new service MyPreloadingStrategyService.

```javascript
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: MyPreloadingStrategyService }
    )
  ],
  exports: [RouterModule],
  providers: [MyPreloadingStrategyService]
})
export class AppRoutingModule { }
```

## Set Up the Interface

We will create a list of modules in app.component.html with hyperlinks to link to each component.

**app.component.html**

```html
<ul>
  <li>
    <a routerLink="lazy">Lazy loading module</a>
  </li>
  <li>
    <a routerLink="preload">Pre loading module</a>
  </li>
</ul>
<router-outlet></router-outlet>
```


## The result 

Start your server with 

```
ng serve
```

Here is the result when you load at first time your app, only pre loading module is added :  *preloadingmodule-preloadingmodule-module.js*

![alt text][preloadingmodule]

[preloadingmodule]: pre-loading-module.png


And when you navigate to lazy module, the file *lazyloadingmodule-lazyloadingmodule-module.js* is added :

![alt text][lazyloadingmodule]

[lazyloadingmodule]: lazy-loading-module.png

## Resources

- https://levelup.gitconnected.com/a-guide-to-lazy-loading-modules-in-angular-15925dfbfd7f

- https://dev.to/mainawycliffe/lazy-loading-modules-preloading-strategy-in-angular-8-2d6o