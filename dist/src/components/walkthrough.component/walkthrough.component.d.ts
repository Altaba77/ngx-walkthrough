import { ElementRef, EventEmitter } from '@angular/core';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
export declare class WalkthroughComponent implements AfterViewChecked {
    _focusElementZindexes: string[];
    DOM_WALKTHROUGH_CLASS: string;
    DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS: string;
    DOM_WALKTHROUGH_TIP_TEXT_CLASS: string;
    DOM_WALKTHROUGH_HOLE_CLASS: string;
    DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS: string;
    DOM_WALKTHROUGH_TIP_ICON_CLASS: string;
    DOM_WALKTHROUGH_ARROW_CLASS: string;
    DOM_WALKTHROUGH_DONE_BUTTON_CLASS: string;
    DOM_TRANSCLUDE: string;
    BUTTON_CAPTION_DONE: string;
    PADDING_HOLE: number;
    PADDING_ARROW_START: number;
    PADDING_ARROW_MARKER: number;
    isVisible: boolean;
    hasTransclude: boolean;
    walkthroughHoleElements: HTMLElement;
    walkthroughTextElement: HTMLElement;
    walkthroughIconElement: HTMLElement;
    walkthroughArrowElement: HTMLElement;
    closeIcon: string;
    walkthroughIcon: any;
    single_tap: string;
    double_tap: string;
    swipe_down: string;
    swipe_left: string;
    swipe_right: string;
    swipe_up: string;
    walkthroughType: string;
    buttonCaption: string;
    useButton: boolean;
    mainCaption: string;
    walkthroughIconWanted: string;
    walkthroughHeroImage: any;
    hasGlow: boolean;
    forceCaptionLocation: string;
    hasBackdrop: boolean;
    isRound: boolean;
    iconPaddingLeft: string;
    iconPaddingTop: string;
    tipIconLocation: string;
    tipColor: string;
    private _focusElementSelector;
    focusElementSelector: string;
    focusElementInteractive: boolean;
    isActive: boolean;
    onWalkthroughShowEvent: EventEmitter<void>;
    onWalkthroughHideEvent: EventEmitter<void>;
    onWalkthroughContentClickedEvent: EventEmitter<void>;
    onResize(event: any): void;
    element: ElementRef;
    constructor();
    /**
     * resize handler method
     */
    resizeHandler(): void;
    /**
     * init the element of the walkthrough
     */
    setWalkthroughElements(): void;
    /**
     *
     */
    ngAfterViewChecked(): void;
    /**
     * Get the icon specify by the input
     * @param icon
     */
    getIcon(icon: string): string;
    /**
     * Convert url in blob
     * @param url
     */
    toDataURL(url: string): Promise<any>;
    /**
     * Set the text position accordint the hole and arrow position plus set the arrow
     * @param pointSubjectLeft
     * @param pointSubjectTop
     * @param pointSubjectWidth
     * @param pointSubjectHeight
     * @param paddingLeft
     */
    setArrowAndText(pointSubjectLeft: number, pointSubjectTop: number, pointSubjectWidth: number, pointSubjectHeight: number, paddingLeft: number): void;
    /**
     * Check if given icon covers text or if the text cover the hole
     * @param iconLeft
     * @param iconTop
     * @param iconRight
     * @param iconBottom
     */
    isItemOnText(iconLeft: number, iconTop: number, iconRight: number, iconBottom: number): boolean;
    /**
     *
     * @param focusElement
     */
    getOffsetCoordinates(focusElement: HTMLElement): {
        top: number;
        left: number;
        height: number;
        width: number;
    };
    getSameAncestor(focusElement: HTMLElement): HTMLElement | null;
    /**
     * Sets the icon displayed according to directive argument
     * @param iconLeft
     * @param iconTop
     * @param paddingLeft
     * @param paddingTop
     */
    setIconAndText(iconLeft: number, iconTop: number, paddingLeft: number, paddingTop: number): void;
    /**
     * Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
     */
    setElementLocations(): void;
    /**
     * Sets the walkthrough focus hole on given params with padding
     * @param left
     * @param top
     * @param width
     * @param height
     */
    setFocus(left: number, top: number, width: number, height: number): void;
    /**
     * Set the focus on one element
     */
    setFocusOnElement(): void;
    /**
     * Send an output event
     */
    onWalkthroughContentClicked(): void;
    /**
     * Set the padding of the tip icon
     * @param iconPaddingLeft
     * @param iconPaddingTop
     */
    setTipIconPadding(iconPaddingLeft: string, iconPaddingTop: string): void;
    /**
     * Close the walkthrough
     * @param event
     */
    onCloseClicked(event: any): void;
    /**
     * close the walkthgrough and sen an output event
     */
    closeWalkthrough(): void;
}
