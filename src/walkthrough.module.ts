import { NgModule } from '@angular/core';
import { WalkthroughComponent } from './components/walkthrough';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [WalkthroughComponent],
	imports: [CommonModule],
	exports: [WalkthroughComponent]
})
export class WalkthroughModule {}
