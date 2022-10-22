import { enableProdMode } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideAnimations } from '@angular/platform-browser/animations'
import { AppComponent } from './app/app.component'

import { environment } from './environments/environment'
import { provideRouter, provideRoutes } from '@angular/router'
import { routes } from './app/app.routes'

if (environment.production) {
	enableProdMode()
}

bootstrapApplication(AppComponent, {
	providers: [provideAnimations(), provideRouter(routes)],
}).catch(err => console.error(err))
