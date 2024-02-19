import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideState, provideStore } from "@ngrx/store";
import { counterReducer } from "./states/counter/counter.reducers";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { cartReducer } from "./states/cart/cart.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState({ name: "counter", reducer: counterReducer }),
    provideState({name:"cart",reducer:cartReducer})
  ],
};
