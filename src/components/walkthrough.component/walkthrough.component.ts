import { Swipe_Up } from './icons/Swipe_Up';
import { Swipe_Right } from './icons/Swipe_Right';
import { Swipe_Left } from './icons/Swipe_Left';
import { Swipe_Down } from './icons/Swipe_Down';
import { Double_Tap } from './icons/Double_Tap';
import { Single_Tap } from './icons/Single_Tap';
import { Hotspot_Close } from './icons/Hotspot_Close';
import { Component, Input, Output, HostListener, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';


const ZINDEX_NOT_SET = '-99999';
@Component({
  selector: 'walkthrough',
  template: `
  <div #walkthroughcomponent class="{{DOM_WALKTHROUGH_CLASS}}" [hidden]="!isVisible" [ngClass]="{'walkthrough-active': isVisible}" (click)="onCloseClicked($event)">
  <div class="walkthrough-container walkthrough-container-transparency" [hidden]="walkthroughType!=='transparency'">
    <div class="walkthrough-inner">
      <div class="{{DOM_TRANSCLUDE}}">
        <ng-content select="img"></ng-content>
      </div>
      <div class="walkthrough-non-transclude-template" [hidden]="hasTransclude">
        <div class="walkthrough-text-container" [ngClass]="{'walkthrough-top': (!forceCaptionLocation || forceCaptionLocation==='TOP'), 'walkthrough-bottom': forceCaptionLocation==='BOTTOM'}">
          <pre class="walkthrough-element walkthrough-text" [innerHTML]="mainCaption"></pre>
          <img *ngIf="walkthroughHeroImage" class="walkthrough-element walkthrough-hero-image" src="{{walkthroughHeroImage}}" (click)="onWalkthroughContentClicked()">
        </div>
        <img class="walkthrough-element walkthrough-icon" [hidden]="walkthroughIconWanted && walkthroughIconWanted==='arrow'" src="{{walkthroughIcon}}">
        <div class="walkthrough-element walkthrough-arrow" [hidden]="walkthroughIconWanted!=='arrow'"></div>
        <button class="walkthrough-element walkthrough-button-positive walkthrough-done-button" type="button" *ngIf="useButton" (click)="onCloseClicked($event)">
          {{buttonCaption}}
        </button>
      </div>
    </div>
  </div>
  <div class="walkthrough-container walkthrough-container-tip" [hidden]="walkthroughType!=='tip'">
    <div class="walkthrough-inner" [ngClass]="{'walkthrough-top': ((!forceCaptionLocation && !tipLocation) || forceCaptionLocation==='TOP' || tipLocation =='TOP'), 'walkthrough-bottom': (forceCaptionLocation=='BOTTOM' || tipLocation =='BOTTOM')}">
      <img class="walkthrough-element walkthrough-tip-icon-text-box" [ngClass]="{'walkthrough-tip-icon-image-front': tipIconLocation==='FRONT', 'walkthrough-tip-icon-image-back': tipIconLocation=='BACK'}"
        [hidden]="walkthroughIconWanted && walkthroughIconWanted==='arrow'" src="{{walkthroughIcon}}" alt="icon">
      <button class="walkthrough-done-button walkthrough-tip-done-button-text-box" [ngClass]="{'walkthrough-tip-done-button-no-icon': !icon}"
        type="button" *ngIf="useButton" (click)="onCloseClicked($event)">
        <img class="walkthrough-tip-button-image-text-box" src="{{closeIcon}}" alt="x">
      </button>
      <div class="walkthrough-element walkthrough-tip-text-box" (click)="onWalkthroughContentClicked()" [ngClass]="{'walkthrough-tip-text-box-color-black': tipColor=='BLACK', 'walkthrough-tip-text-box-color-white': tipColor=='WHITE'}">
        <pre [innerHTML]="mainCaption"></pre>
        <img *ngIf="walkthroughHeroImage" class="walkthrough-element walkthrough-hero-image" src="{{walkthroughHeroImage}}">
        <div class="{{DOM_TRANSCLUDE}}">
          <ng-content select="img"></ng-content>
        </div>
      </div>
    </div>
  </div>
  <div [hidden]="!hasBackdrop" class="walkthrough-hole" [ngClass]="{'walkthrough-hole-round': isRound}">
  </div>
  <div [hidden]="!(hasGlow && (focusElementSelector))" class="walkthrough-hole walkthrough-hole-glow" [ngClass]="{'walkthrough-hole-round': isRound}">
  </div>
</div>
`,
  styles: [
    `
  .walkthrough-hole-glow {
      position: absolute;
      outline: none;
      border: 2px solid #FFFF66 !important;
      box-shadow: 0 0 36px #FFFF66 !important;
      -webkit-appearance: none;
      box-sizing: border-box;
  }

  .walkthrough-background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: initial;
      text-align: center;
      -webkit-transition: height 0s ease-out .2s, opacity .2s ease-out;
      -moz-transition: height 0s ease-out .2s, opacity .2s ease-out;
      -o-transition: height 0s ease-out .2s, opacity .2s ease-out;
      transition: height 0s ease-out .2s, opacity .2s ease-out;
      opacity: 0;
      height: 0;
      overflow: hidden;
      z-index: 1000;
  }

  .walkthrough-hole {
      position: absolute;
      -moz-box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);
      box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);
      -webkit-appearance: none;
  }

  .walkthrough-element.walkthrough-text {
      margin-top: 10%;
      width: 50%;
      color: #fff;
      text-align: center;
  }

  .walkthrough-element.walkthrough-done-button {
      position: absolute;
      bottom: 30px;
      height: 30px;
      width: 80px;
      display: inline-block;
      right: 30px;
      margin: 0 auto;
  }

  .walkthrough-button-positive {
      border-color: #0c63ee;
      background-color: #387ef5;
      color: #fff;
  }

  .walkthrough-button-positive:hover {
      color: #fff;
      text-decoration: none;
  }

  .walkthrough-button-positive.active {
      border-color: #0c63ee;
      background-color: #0c63ee;
      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
  }

  .walkthrough-element.walkthrough-icon {
      height: 200px;
  }

  .walkthrough-element.walkthrough-arrow {
      color: #ffffff;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
  }

  .walkthrough-element {
      z-index: 1001;
      position: relative;
      margin-left: auto;
      margin-right: auto;
  }

  .walkthrough-background.walkthrough-active {
      -webkit-transition: opacity .2s ease-out;
      -moz-transition: opacity .2s ease-out;
      -o-transition: opacity .2s ease-out;
      transition: opacity .2s ease-out;
      opacity: 1;
      height: 100%;
      pointer-events: all;
  }

  .walkthrough-transclude {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
  }

  .walkthrough-hole-round {
      border-radius: 200px;
  }

  .walkthrough-tip-text-box {
      /*top: 128px;*/
      position: relative;
      margin-left: 16px;
      margin-right: 16px;
      border: 2px solid;
      border-radius: 35px;
      padding: 14px;
      word-break: break-all !important;

      /*margin-top: 0;*/
      /*margin-bottom: 0;*/
  }

  .walkthrough-container {
      float: left;
      position: relative;
      height: 100%;
      width: 100%;
  }

  .walkthrough-inner {
      z-index: 3;
      width: 100%;
  }

  .walkthrough-container-transparency > .walkthrough-inner {
      height: 100%;
  }

  .walkthrough-text-container {
      position: absolute;
      width: 100%;
  }

  .walkthrough-container-tip .walkthrough-top, .walkthrough-container-transparency .walkthrough-top {
      top: 15px;
  }

  .walkthrough-container-tip .walkthrough-bottom {
      bottom: 0;
  }

  /* take 'done' button into consideration */
  .walkthrough-container-transparency .walkthrough-bottom {
      bottom: 70px;
  }

  .walkthrough-tip-icon-image-front {
      z-index: 1002;
  }

  .walkthrough-tip-icon-image-back {
      z-index: 999;
  }

  .walkthrough-tip-icon-text-box {
      height: 142px;

      /*right: 9%;*/
      position: relative;
      margin-bottom: -32px;
      margin-right: -250px;

      /*bottom: 70px;*/
  }
  
  .walkthrough-tip-done-button-text-box {
      /*top: 109px;*/
      /*bottom: 59px;*/
      position: relative;
      z-index: 1002;

      /*right: -7px;*/
      margin-top: 107px;
      background-color: transparent;
      border: 0;
      float: right;
  }

  .walkthrough-tip-done-button-no-icon {
      margin-top: -13px !important;
  }

  .walkthrough-tip-button-image-text-box {
      width: 42px;
      height: 42px;
  }

  .walkthrough-tip-text-box-color-black {
      border-color: #ffffff;
      background-color: #000000;
      color: #ffffff;
  }

  .walkthrough-tip-text-box-color-white {
      border-color: #000000;
      background-color: #ffffff;
  }

  .walkthrough-hero-image {
      margin-top: 15px;
  }

  .walkthrough-transclude img {
      height: 100vh;
      width: 100%;
  }

  pre {
      white-space: pre-wrap;
  }
  `]
})
export class WalkthroughComponent implements AfterViewChecked {

  // members (must come first - tslint)
  _focusElementZindexes: string[] = [];

  DOM_WALKTHROUGH_CLASS = "walkthrough-background";
  DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS = ".walkthrough-text";
  DOM_WALKTHROUGH_TIP_TEXT_CLASS = ".walkthrough-tip-text-box";
  DOM_WALKTHROUGH_HOLE_CLASS = ".walkthrough-hole";
  DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS = ".walkthrough-icon";
  DOM_WALKTHROUGH_TIP_ICON_CLASS = ".walkthrough-tip-icon-text-box";
  DOM_WALKTHROUGH_ARROW_CLASS = ".walkthrough-arrow";
  DOM_WALKTHROUGH_DONE_BUTTON_CLASS = "walkthrough-done-button";
  DOM_TRANSCLUDE = "walkthrough-transclude";
  BUTTON_CAPTION_DONE = "Got it!";
  PADDING_HOLE = 5;
  PADDING_ARROW_START = 5;
  PADDING_ARROW_MARKER = 25;

  isVisible = false;
  hasTransclude = false;

  walkthroughHoleElements: HTMLElement;
  walkthroughTextElement: HTMLElement;
  walkthroughIconElement: HTMLElement;
  walkthroughArrowElement: HTMLElement;
  closeIcon: string;
  walkthroughIcon: any;

    // single_tap: string = require('../assets/Single_Tap.png');

    // double_tap: string = require('../assets/Double_Tap.png');

    // swipe_down: string = require('../assets/Swipe_Down.png');

    // swipe_left: string = require('../assets/Swipe_Left.png');

    // swipe_right: string = require('../assets/Swipe_Right.png');

    // swipe_up: string = require('../assets/Swipe_Up.png');

    // the element have been separated as ionic pro cannot handle class with very large string
    single_tap: string = new Single_Tap().single_tap;

    double_tap: string = new Double_Tap().double_tap;

    swipe_down: string = new Swipe_Down().swipe_down;

    swipe_left: string = new Swipe_Left().swipe_left;

    swipe_right: string = new Swipe_Right().swipe_right;

    swipe_up: string = new Swipe_Up().swipe_up;



  @Input('walkthrough-type') walkthroughType: string;
  @Input('button-caption') buttonCaption: string;
  @Input('use-button') useButton = false;
  @Input('main-caption') mainCaption: string;
  @Input('icon') walkthroughIconWanted: string;
  @Input('walkthrough-hero-image') walkthroughHeroImage: any;
  @Input('has-glow') hasGlow: boolean = false;
  @Input('force-caption-location') forceCaptionLocation: string;
  @Input('has-backdrop') hasBackdrop: boolean;

  @Input('is-round') isRound: boolean = false;
  @Input('icon-padding-left') iconPaddingLeft: string;
  @Input('icon-padding-top') iconPaddingTop: string;
  @Input('tip-icon-location') tipIconLocation: string;
  @Input('tip-color') tipColor: string;

  private _focusElementSelector: string;
  get focusElementSelector(): string {
    return this._focusElementSelector;
  }
  @Input('focus-element-selector')
  set focusElementSelector(focusElementSelector: string) {
    if ((!this._focusElementSelector || focusElementSelector !== this._focusElementSelector) && this.isVisible) {
      this._focusElementSelector = focusElementSelector;
      this.setFocusOnElement();
    } else {
      this._focusElementSelector = focusElementSelector;
    }
  }

  @Input('focus-element-interactive') focusElementInteractive = false;



  @Input('is-active')
  set isActive(isActive: boolean) {
    if (isActive) {
      this.setWalkthroughElements();
      this.isVisible = true;

      try {
        if (this.focusElementSelector) {
          this.setFocusOnElement();
        }
      } catch (e) {
        console.warn('failed to focus on element prior to timeout: ' + this.focusElementSelector);
      }

      // Must timeout to make sure we have final correct coordinates after screen totally load
      if (this.focusElementSelector) {
        setTimeout(() => {
          this.setFocusOnElement();
        }, 100);
      }

      this.onWalkthroughShowEvent.emit();

    } else {
      this.isVisible = false;
    }
  }

  @Output('on-walkthrough-show') onWalkthroughShowEvent = new EventEmitter<void>();
  @Output('on-walkthrough-hide') onWalkthroughHideEvent = new EventEmitter<void>();
  @Output('on-walkthrough-content-clicked') onWalkthroughContentClickedEvent = new EventEmitter<void>();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isVisible) {
      this.resizeHandler();
    }
  }



  @ViewChild('walkthroughcomponent') element: ElementRef;

  constructor() {
  }

  /**
   * resize handler method
   */
  resizeHandler() {
    if (this.focusElementSelector && this.isVisible) {
      this.setFocusOnElement();
    }
  }

  /**
   * init the element of the walkthrough
   */
  setWalkthroughElements() {
    let holeElements = this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_HOLE_CLASS);
    this.walkthroughHoleElements = holeElements[0] as HTMLElement;

    let textClass: string = (this.walkthroughType === 'tip') ? this.DOM_WALKTHROUGH_TIP_TEXT_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS;
    this.walkthroughTextElement = this.element.nativeElement.querySelectorAll(textClass)[0] as HTMLElement;

    let iconClass: string = (this.walkthroughType === 'tip') ? this.DOM_WALKTHROUGH_TIP_ICON_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS;
    this.walkthroughIconElement = this.element.nativeElement.querySelectorAll(iconClass)[0] as HTMLElement;

    this.walkthroughArrowElement = this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_ARROW_CLASS)[0] as HTMLElement;
    setTimeout(() => {
      this.closeIcon = new Hotspot_Close().close_icon;
    }, 100);
    this.walkthroughIcon = this.getIcon(this.walkthroughIconWanted);
    this.buttonCaption = this.buttonCaption || this.BUTTON_CAPTION_DONE;
    if (this.hasBackdrop === undefined) {
      this.hasBackdrop = (this.walkthroughType !== 'tip');
    }

  }

  /**
   * 
   */
  ngAfterViewChecked() {
    let translude = this.element.nativeElement.querySelectorAll('.' + this.DOM_TRANSCLUDE);
    if (translude.length > 0 && translude[0].children.length > 0) {
      this.hasTransclude = true;
    }
  }

  /**
   * Get the icon specify by the input
   * @param icon 
   */
  getIcon(icon: string) {
    let retval = '';
    switch (icon) {
      case ('single_tap'):
        retval = this.single_tap;
        break;
      case ('double_tap'):
        retval = this.double_tap;
        break;
      case ('swipe_down'):
        retval = this.swipe_down;
        break;
      case ('swipe_left'):
        retval = this.swipe_left;
        break;
      case ('swipe_right'):
        retval = this.swipe_right;
        break;
      case ('swipe_up'):
        retval = this.swipe_up;
        break;
      case ('arrow'):
        retval = ''; //Return nothing, using other dom element for arrow
        break;

    }
    if (retval === '' && icon && icon.length > 0) {
      retval = icon;
    } else {
      this.toDataURL(retval).then((dataUrl) => {
        retval = dataUrl;
        console.log('icon :', retval);
      });
    }
    return retval;
  }

  /**
   * Convert url in blob
   * @param url 
   */
  toDataURL(url: string): Promise<any> {
    return fetch(url)
      .then(response => response.blob())
      .then(blob => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }
        });
      })
  }

  /**
   * Set the text position accordint the hole and arrow position plus set the arrow
   * @param pointSubjectLeft 
   * @param pointSubjectTop 
   * @param pointSubjectWidth 
   * @param pointSubjectHeight 
   * @param paddingLeft 
   */
  setArrowAndText(pointSubjectLeft: number, pointSubjectTop: number, pointSubjectWidth: number, pointSubjectHeight: number, paddingLeft: number) {
    let offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);
    let startLeft = offsetCoordinates.left + offsetCoordinates.width / 2;
    let startTop = offsetCoordinates.top + offsetCoordinates.height + this.PADDING_ARROW_START;

    let endLeft = 0;
    let isLine = false;

    if (Math.abs(startLeft - (pointSubjectLeft + pointSubjectWidth / 2)) < 10) {
      console.warn('Hole element and text are inline line arrow will be used');
      endLeft = pointSubjectLeft + pointSubjectWidth / 2;
      isLine = true;
    } else if (startLeft > pointSubjectLeft) {//If hole left to text set arrow to point to middle right
      endLeft = pointSubjectLeft + paddingLeft + pointSubjectWidth;
    } else if (startLeft < pointSubjectLeft) {//If hole right to text set arrow to point to middle left
      endLeft = pointSubjectLeft - paddingLeft;
    }
    let endTop;

    if (isLine) {
      endTop = pointSubjectTop - this.PADDING_ARROW_MARKER;
    } else {
      endTop = pointSubjectTop + (pointSubjectHeight / 2);
    }

    let arrowLeft, arrowRight, arrowTop, arrowBottom;
    //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
    arrowLeft = (startLeft < endLeft) ? startLeft : endLeft;
    arrowRight = (startLeft < endLeft) ? endLeft : startLeft;
    arrowTop = (startTop < endTop) ? startTop : endTop;
    arrowBottom = (startTop < endTop) ? endTop : startTop;

    if (this.forceCaptionLocation === undefined && this.isItemOnText(arrowLeft, arrowTop, arrowRight, arrowBottom)) {
      this.forceCaptionLocation = 'BOTTOM';
    }

    if (this.forceCaptionLocation === 'BOTTOM') {
      if (isLine) {
        endTop = pointSubjectTop + pointSubjectHeight + this.PADDING_ARROW_MARKER;
      }
      startTop = offsetCoordinates.top - this.PADDING_ARROW_START;
    }

    let arrowSvgDom;

    if (isLine) {
      arrowSvgDom =
        '<svg width="100%" height="100%">' +
        '<defs>' +
        '<marker id="arrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">' +
        '<path d="M2,1 L2,10 L10,6 L2,2" style="fill:#fff;" />' +
        '</marker>' +
        '</defs>' +
        '<line x1=' + endLeft + " y1=" + startTop + " x2=" + endLeft + " y2=" + endTop + " " +
        'style="stroke:#fff; stroke-width: 2px; fill: none;' +
        'marker-end: url(#arrow);"/>' +
        '/>' +
        '</svg>';
    } else {
      arrowSvgDom =
        '<svg width="100%" height="100%">' +
        '<defs>' +
        '<marker id="arrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">' +
        '<path d="M2,1 L2,10 L10,6 L2,2" style="fill:#fff;" />' +
        '</marker>' +
        '</defs>' +
        '<path d="M' + startLeft + ',' + startTop + ' Q' + startLeft + ',' + endTop + ' ' + endLeft + ',' + endTop + '"' +
        'style="stroke:#fff; stroke-width: 2px; fill: none;' +
        'marker-end: url(#arrow);"/>' +
        '/>' +
        '</svg>';
    }


    let arrowElement = this.element.nativeElement.querySelector(this.DOM_WALKTHROUGH_ARROW_CLASS);
    if (arrowElement.children.length > 0) {
      arrowElement.children[0].remove();
    }
    arrowElement.insertAdjacentHTML('afterbegin', arrowSvgDom);
  }

  /**
   * Check if given icon covers text or if the text cover the hole
   * @param iconLeft 
   * @param iconTop 
   * @param iconRight 
   * @param iconBottom 
   */
  isItemOnText(iconLeft: number, iconTop: number, iconRight: number, iconBottom: number) {
    let holeCoordinates = this.getOffsetCoordinates(this.walkthroughHoleElements);
    let offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);

    let holeLeft = holeCoordinates.left;
    let holeRight = holeCoordinates.left + holeCoordinates.width;
    let holeTop = holeCoordinates.top;
    let holeBottom = holeCoordinates.top + holeCoordinates.height;

    let textLeft = document.body.clientWidth / 4;//needs to be calculated differently due to being a 'pre'. //offsetCoordinates.left;
    let textRight = document.body.clientWidth / 4 * 3;//offsetCoordinates.left + offsetCoordinates.width;
    let textTop = offsetCoordinates.top;
    let textBottom = offsetCoordinates.top + offsetCoordinates.height;

    if (!(holeRight < textLeft ||
      holeLeft > textRight ||
      holeBottom < textTop ||
      holeTop > textBottom)) {
      return true;
    }

    return !(iconRight < textLeft ||
      iconLeft > textRight ||
      iconBottom < textTop ||
      iconTop > textBottom);
  };

  /**
   * 
   * @param focusElement 
   */
  getOffsetCoordinates(focusElement: HTMLElement) {
    let width: number;
    let height: number;
    let left: number;
    let top: number;
    width = focusElement.offsetWidth;
    height = focusElement.offsetHeight;
    left = focusElement.getBoundingClientRect().left;
    top = focusElement.getBoundingClientRect().top;

    let sameAncestorForFocusElementAndWalkthrough = this.getSameAncestor(focusElement);
    while (sameAncestorForFocusElementAndWalkthrough) {
      left = left - sameAncestorForFocusElementAndWalkthrough.offsetLeft;
      top = top - sameAncestorForFocusElementAndWalkthrough.offsetTop;
      sameAncestorForFocusElementAndWalkthrough = sameAncestorForFocusElementAndWalkthrough.offsetParent as HTMLElement;
    }
    return { top: top, left: left, height: height, width: width };
  }

  //Check once
  getSameAncestor(focusElement: HTMLElement) {
    let retval = null;
    const walkthroughElementParent = this.element.nativeElement.offsetParent;
    const focusElementParent = focusElement.offsetParent as HTMLElement;
    let walkthroughAncestorIter = walkthroughElementParent as HTMLElement;
    let focusElementAncestorIter = focusElementParent as HTMLElement;

    while (walkthroughAncestorIter && !retval) {
      focusElementAncestorIter = focusElementParent; //reset
      while (focusElementAncestorIter && !retval) {
        if (focusElementAncestorIter === walkthroughAncestorIter) {
          retval = walkthroughAncestorIter;
        } else {
          focusElementAncestorIter = focusElementAncestorIter.offsetParent as HTMLElement;
        }
      }
      walkthroughAncestorIter = walkthroughAncestorIter.offsetParent as HTMLElement;
    }
    return retval;
  };

  /**
   * Sets the icon displayed according to directive argument
   * @param iconLeft
   * @param iconTop
   * @param paddingLeft
   * @param paddingTop
   */
  setIconAndText(iconLeft: number, iconTop: number, paddingLeft: number, paddingTop: number) {
    const offsetCoordinates = this.getOffsetCoordinates(this.walkthroughIconElement);
    const iconHeight = offsetCoordinates.height;
    const iconWidth = offsetCoordinates.width;
    const iconLeftWithPadding = iconLeft + paddingLeft - (iconWidth / 4);
    const iconTopWithPadding = iconTop + paddingTop - (iconHeight / 6);
    const iconRight = iconLeftWithPadding + iconWidth;
    const iconBottom = iconTopWithPadding + iconHeight;
    //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
    if (this.forceCaptionLocation === undefined && this.isItemOnText(iconLeftWithPadding, iconTopWithPadding, iconRight, iconBottom)) {
      this.forceCaptionLocation = 'BOTTOM';
    }

    let iconLocation =
      'position: absolute;' +
      'left:' + iconLeftWithPadding + 'px;' +
      'top:' + iconTopWithPadding + 'px;';
    this.walkthroughIconElement.setAttribute('style', iconLocation);
  }

  /**
   * Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
   */
  setElementLocations() {
    let selectorElements = (this.focusElementSelector) ? document.querySelectorAll(this.focusElementSelector) : null;
    if (selectorElements && selectorElements.length > 0) {
      if (selectorElements.length > 1) {
        console.warn('Multiple items fit selector, displaying first visible as focus item');
      }


    }
    else {
      console.error('No element found with selector: ' + this.focusElementSelector);
      selectorElements = null;
    }
    let htmlElement = null;
    if (selectorElements) {
      htmlElement = selectorElements[0] as HTMLElement;
    }
    if (htmlElement) {
      const offsetCoordinates = this.getOffsetCoordinates(htmlElement);
      const width = offsetCoordinates.width;
      const height = offsetCoordinates.height;
      const left = offsetCoordinates.left;
      const top = offsetCoordinates.top;

      this.setFocus(left, top, width, height);
      let paddingLeft = parseFloat(this.iconPaddingLeft);
      let paddingTop = parseFloat(this.iconPaddingTop);
      if (!paddingLeft) { paddingLeft = 0; }
      if (!paddingTop) { paddingTop = 0; }

      // If Gesture icon given bind it to hole as well
      if (this.walkthroughIconWanted && this.walkthroughIconWanted !== 'arrow' && this.walkthroughType === 'transparency') {
        setTimeout(() => {
          this.setIconAndText(left + width / 2, top + height / 2, paddingLeft, paddingTop);
        }, 200);
      }
      if (this.walkthroughIconWanted === 'arrow') {
        // Need to update text location according to conditional class added 'walkthrough-transparency-bottom'
        setTimeout(() => {
          this.setArrowAndText(left, top + paddingTop, width, height, paddingLeft);
        }, 200);
      }
      // if tip mode with icon that we want to set padding to, set it
      if (this.walkthroughType === 'tip' &&
        this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
        (this.iconPaddingLeft || this.iconPaddingTop)) {
        this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
      }
    } else {
      if (this.focusElementSelector) {
        console.info('Unable to find element requested to be focused: ' + this.focusElementSelector);
      } else {
        // if tip mode with icon that we want to set padding to, set it
        if (this.walkthroughType === 'tip' &&
          this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
          (this.iconPaddingLeft || this.iconPaddingTop)) {
          this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
        }
      }
    }

    if (this.focusElementInteractive && selectorElements) {
      for (let i = 0; i < selectorElements.length; ++i) {
        const selectorElement: HTMLElement = selectorElements.item(i) as HTMLElement;
        this._focusElementZindexes[i] = (selectorElement.style.zIndex !== '99999' && selectorElement.style.zIndex) ?
            selectorElement.style.zIndex :
            ZINDEX_NOT_SET;
        selectorElement.style.zIndex = '99999';
      }
    }
  }


  /**
   * Sets the walkthrough focus hole on given params with padding
   * @param left 
   * @param top 
   * @param width 
   * @param height 
   */
  setFocus(left: number, top: number, width: number, height: number) {
    let holeDimensions =
      'left:' + (left - this.PADDING_HOLE) + 'px;' +
      'top:' + (top - this.PADDING_HOLE) + 'px;' +
      'width:' + (width + (2 * this.PADDING_HOLE)) + 'px;' +
      'height:' + (height + (2 * this.PADDING_HOLE)) + 'px;';
    if (this.walkthroughHoleElements) {
      this.walkthroughHoleElements.setAttribute('style', holeDimensions);
    }
  };

  /**
   * Set the focus on one element
   */
  setFocusOnElement() {
    this.setElementLocations();
  }

  /**
   * Send an output event
   */
  onWalkthroughContentClicked() {
    this.onWalkthroughContentClickedEvent.emit();
  }

  /**
   * Set the padding of the tip icon
   * @param iconPaddingLeft 
   * @param iconPaddingTop 
   */
  setTipIconPadding(iconPaddingLeft: string, iconPaddingTop: string) {
    var iconLocation = '';
    if (iconPaddingTop) {
      iconLocation += 'margin-top:' + iconPaddingTop + 'px;';
    }
    if (iconPaddingLeft) {
      iconLocation += 'right:' + iconPaddingLeft + '%;';
    }
    this.walkthroughIconElement.setAttribute('style', iconLocation);
  }

  /**
   * Close the walkthrough
   * @param event 
   */
  onCloseClicked(event: any) {
    if ((!this.useButton) ||
      (event.currentTarget.className.indexOf(this.DOM_WALKTHROUGH_DONE_BUTTON_CLASS) > -1)) {
      this.closeWalkthrough();
    }

  }

  /**
   * close the walkthgrough and sen an output event
   */
  closeWalkthrough() {
    this.onWalkthroughHideEvent.emit();
    // to avoid disturbance with other SVG it is remove from the DOM
    let arrowElement = this.element.nativeElement.querySelector(this.DOM_WALKTHROUGH_ARROW_CLASS);
    if (arrowElement.children.length > 0) {
      arrowElement.children[0].remove();
    }
    this.isVisible = false;

    // reset z-index on selectedElement
    const selectedElements = (this.focusElementSelector) ? document.querySelectorAll(this.focusElementSelector) : null;
    if (selectedElements) {
      for (let i = 0; i < selectedElements.length; ++i) {
        const curElement: HTMLElement = selectedElements.item(i) as HTMLElement;
        console.log(`focus elem ${i} z-index is ${this._focusElementZindexes[i]} `);
        if (this._focusElementZindexes[i] !== ZINDEX_NOT_SET) {
          curElement.style.zIndex = this._focusElementZindexes[i];
        } else {
          curElement.style.zIndex = 'auto';
        }
      }
      this._focusElementZindexes = [];
    }
  }

}