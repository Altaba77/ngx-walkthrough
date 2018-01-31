import { Component, Input, Output, HostListener, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { WalkthroughTapIconsPath } from './ngWalkthroughTapIconsPath';

@Component({
  selector: 'walkthrough',
  templateUrl: 'walkthrough.html'
})
export class WalkthroughComponent implements AfterViewChecked {
  @Input("walkthrough-type") walkthroughType: string;
  @Input("button-caption") buttonCaption: string;
  @Input("use-button") useButton: boolean = false;
  @Input("main-caption") mainCaption: string;
  @Input("icon") walkthroughIconWanted: string;
  @Input("walkthrough-hero-image") walkthroughHeroImage: any;
  @Input("has-glow") hasGlow: boolean = false;
  @Input("force-caption-location") forceCaptionLocation: string;
  @Input("has-backdrop") hasBackdrop: boolean;

  @Input("is-round") isRound: boolean = false;
  @Input("icon-padding-left") iconPaddingLeft: string;
  @Input("icon-padding-top") iconPaddingTop: string;
  @Input("tip-icon-location") tipIconLocation: string;
  @Input("tip-color") tipColor: string;

  private _focusElementSelector: string = null;
  get focusElementSelector(): string {
    return this._focusElementSelector;
  }
  @Input("focus-element-selector")
  set focusElementSelector(focusElementSelector: string) {
    if ((!this._focusElementSelector || focusElementSelector !== this._focusElementSelector) && this.isVisible) {
      this._focusElementSelector = focusElementSelector;
      this.setFocusOnElement();
    } else {
      this._focusElementSelector = focusElementSelector;
    }
  }


  @Input("is-active")
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

      //Must timeout to make sure we have final correct coordinates after screen totally load
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

  @Output("on-walkthrough-show") onWalkthroughShowEvent = new EventEmitter<void>();
  @Output("on-walkthrough-hide") onWalkthroughHideEvent = new EventEmitter<void>();
  @Output("on-walkthrough-content-clicked") onWalkthroughContentClickedEvent = new EventEmitter<void>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isVisible) {
      this.resizeHandler();
    }
  }


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

  ngWalkthroughTapIcons: WalkthroughTapIconsPath = new WalkthroughTapIconsPath();

  isVisible; boolean = false;
  hasTransclude: boolean;

  walkthroughHoleElements: HTMLElement;
  walkthroughTextElement: HTMLElement;
  walkthroughIconElement: HTMLElement;
  walkthroughArrowElement: HTMLElement;
  closeIcon: any;
  walkthroughIcon: any;

  @ViewChild("walkthrough-component") element: ElementRef;

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

    let textClass: string = (this.walkthroughType === "tip") ? this.DOM_WALKTHROUGH_TIP_TEXT_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS;
    this.walkthroughTextElement = this.element.nativeElement.querySelectorAll(textClass)[0] as HTMLElement;

    let iconClass: string = (this.walkthroughType === "tip") ? this.DOM_WALKTHROUGH_TIP_ICON_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS;
    this.walkthroughIconElement = this.element.nativeElement.querySelectorAll(iconClass)[0] as HTMLElement;

    this.walkthroughArrowElement = this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_ARROW_CLASS)[0] as HTMLElement;
    setTimeout(() => {
      this.closeIcon = this.close_icon;
    }, 100);
    this.walkthroughIcon = this.getIcon(this.walkthroughIconWanted);
    this.buttonCaption = this.buttonCaption || this.BUTTON_CAPTION_DONE;
    if (this.hasBackdrop === undefined) {
      this.hasBackdrop = (this.walkthroughType !== "tip");
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
  getIcon(icon) {
    let retval = null;
    if (this.ngWalkthroughTapIcons) {
      switch (icon) {
        case ("single_tap"):
          retval = this.ngWalkthroughTapIcons.single_tap;
          break;
        case ("double_tap"):
          retval = this.ngWalkthroughTapIcons.double_tap;
          break;
        case ("swipe_down"):
          retval = this.ngWalkthroughTapIcons.swipe_down;
          break;
        case ("swipe_left"):
          retval = this.ngWalkthroughTapIcons.swipe_left;
          break;
        case ("swipe_right"):
          retval = this.ngWalkthroughTapIcons.swipe_right;
          break;
        case ("swipe_up"):
          retval = this.ngWalkthroughTapIcons.swipe_up;
          break;
        case ("arrow"):
          retval = ""; //Return nothing, using other dom element for arrow
          break;
      }
    }
    if (retval === null && icon && icon.length > 0) {
      retval = icon;
    } else {
      this.toDataURL(retval).then((dataUrl) => {
        retval = dataUrl;
        console.log("icon :", retval);
      });
    }
    return retval;
  }

  /**
   * Convert url in blob
   * @param url 
   */
  toDataURL(url) {
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
  setArrowAndText(pointSubjectLeft, pointSubjectTop, pointSubjectWidth, pointSubjectHeight, paddingLeft) {
    let offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);
    let startLeft = offsetCoordinates.left + offsetCoordinates.width / 2;
    let startTop = offsetCoordinates.top + offsetCoordinates.height + this.PADDING_ARROW_START;

    let endLeft = 0;
    let isLine = false;

    if (Math.abs(startLeft - (pointSubjectLeft + pointSubjectWidth / 2)) < 10) {
      console.warn("Hole element and text are inline line arrow will be used");
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
      this.forceCaptionLocation = "BOTTOM";
    }

    if (this.forceCaptionLocation === "BOTTOM") {
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
    arrowElement.insertAdjacentHTML("afterbegin", arrowSvgDom);
  }

  /**
   * Check if given icon covers text or if the text cover the hole
   * @param iconLeft 
   * @param iconTop 
   * @param iconRight 
   * @param iconBottom 
   */
  isItemOnText(iconLeft, iconTop, iconRight, iconBottom) {
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
      sameAncestorForFocusElementAndWalkthrough = sameAncestorForFocusElementAndWalkthrough.offsetParent;
    }
    return { top: top, left: left, height: height, width: width };
  }

  //Check once
  getSameAncestor(focusElement: HTMLElement) {
    let retval = null;
    let walkthroughElementParent = this.element.nativeElement.offsetParent;
    let focusElementParent = focusElement.offsetParent as HTMLElement;
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
  setIconAndText(iconLeft, iconTop, paddingLeft, paddingTop) {
    let offsetCoordinates = this.getOffsetCoordinates(this.walkthroughIconElement);
    let iconHeight = offsetCoordinates.height;
    let iconWidth = offsetCoordinates.width;
    let iconLeftWithPadding = iconLeft + paddingLeft - (iconWidth / 4);
    let iconTopWithPadding = iconTop + paddingTop - (iconHeight / 6);
    let iconRight = iconLeftWithPadding + iconWidth;
    let iconBottom = iconTopWithPadding + iconHeight;
    //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
    if (this.forceCaptionLocation === undefined && this.isItemOnText(iconLeftWithPadding, iconTopWithPadding, iconRight, iconBottom)) {
      this.forceCaptionLocation = "BOTTOM";
    }

    let iconLocation =
      "position: absolute;" +
      "left:" + iconLeftWithPadding + "px;" +
      "top:" + iconTopWithPadding + "px;";
    this.walkthroughIconElement.setAttribute('style', iconLocation);
  };

  /**
   * Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
   */
  setElementLocations() {
    let focusElement = (this.focusElementSelector) ? document.querySelectorAll(this.focusElementSelector) : null;
    if (focusElement && focusElement.length > 0) {
      if (focusElement.length > 1) {
        console.warn('Multiple items fit selector, displaying first visible as focus item');

      }

    }
    else {
      console.error('No element found with selector: ' + this.focusElementSelector);
      focusElement = null;
    }
    let htmlElement = focusElement[0] as HTMLElement;
    if (htmlElement) {
      let offsetCoordinates = this.getOffsetCoordinates(htmlElement);
      let width = offsetCoordinates.width;
      let height = offsetCoordinates.height;
      let left = offsetCoordinates.left;
      let top = offsetCoordinates.top;

      this.setFocus(left, top, width, height);
      let paddingLeft = parseFloat(this.iconPaddingLeft);
      let paddingTop = parseFloat(this.iconPaddingTop);
      if (!paddingLeft) { paddingLeft = 0; }
      if (!paddingTop) { paddingTop = 0; }

      //If Gesture icon given bind it to hole as well
      if (this.walkthroughIconWanted && this.walkthroughIconWanted !== "arrow" && this.walkthroughType === "transparency") {
        setTimeout(() => {
          this.setIconAndText(left + width / 2, top + height / 2, paddingLeft, paddingTop);
        }, 200);
      }
      if (this.walkthroughIconWanted === "arrow") {
        //Need to update text location according to conditional class added 'walkthrough-transparency-bottom'
        setTimeout(() => {
          this.setArrowAndText(left, top + paddingTop, width, height, paddingLeft);
        }, 200);
      }
      //if tip mode with icon that we want to set padding to, set it
      if (this.walkthroughType === "tip" &&
        this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
        (this.iconPaddingLeft || this.iconPaddingTop)) {
        this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
      }
    } else {
      if (this.focusElementSelector) {
        console.info('Unable to find element requested to be focused: ' + this.focusElementSelector);
      } else {
        //if tip mode with icon that we want to set padding to, set it
        if (this.walkthroughType === "tip" &&
          this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
          (this.iconPaddingLeft || this.iconPaddingTop)) {
          this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
        }
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
  setFocus(left, top, width, height) {
    let holeDimensions =
      "left:" + (left - this.PADDING_HOLE) + "px;" +
      "top:" + (top - this.PADDING_HOLE) + "px;" +
      "width:" + (width + (2 * this.PADDING_HOLE)) + "px;" +
      "height:" + (height + (2 * this.PADDING_HOLE)) + "px;";
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
  setTipIconPadding(iconPaddingLeft, iconPaddingTop) {
    var iconLocation = "";
    if (iconPaddingTop) {
      iconLocation += "margin-top:" + iconPaddingTop + "px;";
    }
    if (iconPaddingLeft) {
      iconLocation += "right:" + iconPaddingLeft + "%;";
    }
    this.walkthroughIconElement.setAttribute('style', iconLocation);
  };

  /**
   * Close the walkthrough
   * @param event 
   */
  onCloseClicked(event) {
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
  };

  close_icon = "data:image/png;base64," +
    "iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL" +
    "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6" +
    "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg" +
    "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K" +
    "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm" +
    "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9" +
    "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0" +
    "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0" +
    "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0" +
    "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp" +
    "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv" +
    "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog" +
    "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg" +
    "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjExMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg" +
    "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl" +
    "bFlEaW1lbnNpb24+MTEwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl" +
    "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg" +
    "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNzowNSAyMTowNzo0NzwveG1wOk1vZGlmeURhdGU+CiAg" +
    "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s" +
    "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K36AZ" +
    "FwAAETZJREFUeAHtnWuMVdUZhvcMMBeRQXGmSrVemqaUHyUabERIoWhQE02alKYk+qdNS38Apoht" +
    "YiwQo3hJEwaVgm3AWmM0ATvxR5tGodSMSVtsQGlrSjFNtVYFC1IHEZgZZk7fZ3v2zN5nX9ba5+xz" +
    "G/aXLPZl3d93f2t961vrDI6TS1Mi0NKUrXacNrW7XWFKMUzWlTBJgT61Fq+6OAWF0eJ1RNezxTCs" +
    "K2FQYUihqaQZiIOETl/o0H3W7YbcMwqnfQGyG1ayBiCrjqI95xcDpNW6nRAJiScVPlZAUxtKag1I" +
    "UudpyzSFLoXzkhLWOA4SP1E4UbzyXHdpBOLQrgsVIIw5qpEFzYPA/ykwV9ZN6kkchsVFCmhZPdtR" +
    "DvhoHUPohwoYODWXegCGhkEYGlaP+rMEGQLRQAisqQbWEjjqYkicoYClOJEEC/S4AkNoTebAWhGH" +
    "ZXixAuuviSysBz9QwCKtqlSbOMrvVkDTspK21tbWRW1tbYtU4OyWlhbK7ywUCm26n6SANvs1elRx" +
    "aAHXEcUzJ53W/TFdDw4NDfWPjo726z7LRTiaR/lV075qEodn4xIFrpXK9Z2dnUtVyNzh4eGekZGR" +
    "KZ9yUWmxmmRbWpxJkyYNT5ky5ahK23/69Ok+Xf9UecmuR+aIysEzk7lUizgsRYZG/5eftvFf6ujo" +
    "WCFtmCeypmdFlKkRECkSB6TVe8+cObNV6f9hypMQz9zH0IkFmqlUg7getbDsobG9vf1GacCawcHB" +
    "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";

}