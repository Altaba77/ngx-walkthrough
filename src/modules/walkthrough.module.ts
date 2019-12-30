import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { WalkthroughComponent } from '../components/walkthrough.component/walkthrough.component';
import { NgModule, ModuleWithProviders } from '@angular/core';


@NgModule({
    declarations: [
        // Pipes.
        // Directives.
        // Components.
        WalkthroughComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // Pipes.
        // Directives.
        // Components.
        WalkthroughComponent
    ]
})
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class WalkthroughModule {

    /**
     * Use in AppModule: new instance of SumService.
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: WalkthroughModule,
            providers: []
        };
    }

}
