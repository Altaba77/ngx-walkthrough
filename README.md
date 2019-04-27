# ngx-walkthrough

Update of https://github.com/souly1/ng-walkthrough for angular > 6

One of the most common design challenges emerging in mobile design is that of 'invitation' - creating an explanation walk through during user first interaction with the app so to engage him.
Following Theresa Neil's design patterns from [Mobile Design Pattern Gallery] (http://www.amazon.com/gp/product/1449314325/ref=as_li_ss_tl?ie=UTF8&tag=uxbo09-20&linkCode=as2&camp=217145&creative=399373&creativeASIN=1449314325)

This angular component implements a walkthrough via one of the following patterns: the transparency pattern or the tip pattern (an explanation about the different patterns can be found online at [ux booth](http://www.uxbooth.com/articles/mobile-design-patterns/))

Get the [Changelog](https://github.com/Altaba77/ngx-walkthrough/blob/master/CHANGELOG.md).

# Special features

 - Use the transparency walkthrough either using transclude or given attributes which contain basics such as text, gesture image, 'got it' button
 - In transparency walkthrough easily highlight a DOM element (see demo)
 - Use any image you want or choose a gesture image from the given collection (such as swipe with direction or tap) and place it bound to the element mentioned above.
 - automatically moves text to bottom if item is covering the text with icon or arrow
 - In tip mode add an Icon to sit on top or behind the tip text box

## ScreenShots

Transparency walkthrough in Classic, Classic with arrow mode and Totally customizable mode respectively (these screenshots have been realized on the previous version of the library, the design can be slightly different now):

![alt tag](/screenshots/screenshot1.png)
![alt tag](/screenshots/screenshot2.png)
![alt tag](/screenshots/screenshot3.png)

Tip walkthrough mode:

![alt tag](/screenshots/screenshot4.png)

# Demo

A demo of the previous version was created to show (**Note**: that the attributes have been changed, see example bellow):
 * The 2 basic transparency overlay types in 3 demoes fitting the screenshot examples -  one basic template, one with arrows, and the last freestyle one using transclude.
 * The tip mode walkthrough
[Demo can be found here](http://plnkr.co/edit/kHM9zHCxAA3gPYvedmdw?p=preview)

## Requirements

- Angular 6 or superior

## Installation

* **NPM**: `npm install ngx-walkthrough`
* **Bower**: `bower install ngx-walkthrough`

## Usage

Import the module in your appplication module

```ts
import { WalkthroughModule } from 'ngx-walkthrough';
```

then declare it in your app imports:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WalkthroughModule } from 'ngx-walkthrough';

@NgModule({
  imports: [
    BrowserModule,
    WalkthroughModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

You can now use the component, add the element to your HTML:
```html
<ngx-walkthrough [walkthrough-type]="'X'">
  ...
</ngx-walkthrough>
```
and use one of the two configurations:
    1> Place any HTML code as you like instead of the three dotes as this uses the Angular transclude ability. Make sure to specify [walkthrough-type]="transparency" or "tip" for this to work.
    2> Use the additional optional properties the component has to quickly create a walkthrough screen.

## Usage Example 1 - transparency Non transclude option

```html
<ngx-walkthrough
            [is-round]="true"
            [walkthrough-type]="'transparency'"
            [focus-element-selector]="'#focusItem'"
            [icon]="'single_tap'"
            [main-caption]="'This is some text'"
            [is-active]="true"
            [use-button]="true">
</ngx-walkthrough>
```

## Usage Example 2 - transparency using transclude option

```html
<ngx-walkthrough [is-active]="true" [walkthrough-type]="'transparency'">
  <img src="images/ImageTutorialExample.png" style="height: 100vh; width: 100%;">
</ngx-walkthrough>
```

## Usage Example 3 - tip type walkthrough

```html
<ngx-walkthrough
            [walkthrough-type]="'tip'"
            [icon]="'images/myLogo.png'"
            [tip-icon-location]="'FRONT'"
            [tip-location]="'TOP'"
            [main-caption]="'This is some text'"
            [tip-color]="'BLACK'"
            [is-active]="true"
            [use-button]="true">
</ngx-walkthrough>
```

## Usage Example 4 - transparency Non transclude option full code with output
```ts
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <walkthrough
                [is-round]="true"
                [walkthrough-type]="'transparency'"
                [focus-element-selector]="'#focusItem'"
                [icon]="'arrow'"
                [main-caption]="'This is some text'"
                [is-active]="true"
                [use-button]="true"
                (on-walkthrough-show)="myShowFunction()"
                (on-walkthrough-hide)="myHideFunction()">
    </walkthrough>
  `
})
export class MyApp {
  constructor() {
  }
  myShowFunction(){
    console.log("show event");
  }
   myHideFunction(){
    console.log("hide event");
  }
}
```

## component Attributes
Inputs:
- `is-active` (mandatory) - Any walkthrough type. Bound element controls display the component. Set 'true' to bound element in order to display.
- `walkthrough-type` (mandatory) - Any walkthrough type. Specifies what type of walkthrough to display. Currently supported are 'transparency' and 'tip' types
- `focus-element-selector` (optional) - Any walkthrough type. CSS selector of DOM element we want to give focus to, if value set to empty string "" all screen will be grayed out. Throws warning if multiple elements return as results and displays first as selected
- `is-round` (optional) - Any walkthrough type. Set to 'true' if you want the focused area to be round, otherwise it will be square set to the size of the DOM element
- `has-backdrop` (optional - Any walkthrough type. Set to 'true' if you want the walkthrough to have a darkened backdrop. default is true for 'transparency' type and false for 'tip' type
- `has-glow` (optional) - Any walkthrough type. Set to 'true' if you want the focused area to have a glow around it
- `icon` (optional) - Any walkthrough type. If set to any of the predefined values ("single_tap", "double_tap", "swipe_down", "swipe_left", "swipe_right", "swipe_up"), in such case the icon will be bound to focus element (if exists. Any other icon can be used and will be loaded from supplied folder
- `main-caption` (optional) - Any walkthrough type. This is the text that will be displayed in the walk-through. Text can be formatted
- `use-button` (optional) - Any walkthrough type. set to 'true' you want a button displayed that most be clicked in order to close walkthrough, otherwise clicking anywhere while walkthrough displayed will close it
- `button-caption` (optional) - Customize the text of the dismiss button if present, default is "Got it!".
- `walkthrough-hero-image` (optional) - Any walkthrough type. Image to display in walkthrough rigth below caption text
- `icon-padding-left` (optional) - For any walkthrough type. Add padding to the icon (or arrow) from the left in percentage
- `icon-padding-top` (optional) - For any walkthrough type. Add padding to the icon (or arrow) from the top in pixels
- `tip-icon-location` (optional) - For tip walkthrough. In case there is an overlap between the tip text box and the tip icon you can define here which is on top. Either "FRONT" or "BACK"
- `force-caption-location` (optional) - Any walkthrough type. Set caption location at the top of screen or closer to bottom. Acceptable values: "TOP" or "BOTTOM"
- `tip-color` (optional) - For tip walkthrough. Define the tip textbox background color. Currently supports "BLACK" or "WHITE" values
- `focus-element-interactive` (optional, defaults to false)  - Will bring the focus element (or elements) into the foreground, allowing the user to interact with them during the walkthrough

Ouputs:
- `on-walkthrough-show` - Any walkthrough type. Emit a void event when walkthrough is displayed
- `on-walkthrough-hide` - Any walkthrough type. Emit a void event when walkthrough is hidden
- `on-walkthrough-content-clicked` - Any walkthrough type. Emit a void event when walkthrough context or hero image clicked

## Testing

On going...

## License

As Angular itself, this module is released under the permissive [MIT license](http://revolunet.mit-license.org). Your contributions are always welcome.
