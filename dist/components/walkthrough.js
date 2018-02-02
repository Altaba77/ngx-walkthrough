var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, HostListener, ElementRef, EventEmitter, ViewChild } from '@angular/core';
var WalkthroughComponent = (function () {
    function WalkthroughComponent() {
        this.useButton = false;
        this.hasGlow = false;
        this.isRound = false;
        this._focusElementSelector = null;
        this.onWalkthroughShowEvent = new EventEmitter();
        this.onWalkthroughHideEvent = new EventEmitter();
        this.onWalkthroughContentClickedEvent = new EventEmitter();
        this.DOM_WALKTHROUGH_CLASS = "walkthrough-background";
        this.DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS = ".walkthrough-text";
        this.DOM_WALKTHROUGH_TIP_TEXT_CLASS = ".walkthrough-tip-text-box";
        this.DOM_WALKTHROUGH_HOLE_CLASS = ".walkthrough-hole";
        this.DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS = ".walkthrough-icon";
        this.DOM_WALKTHROUGH_TIP_ICON_CLASS = ".walkthrough-tip-icon-text-box";
        this.DOM_WALKTHROUGH_ARROW_CLASS = ".walkthrough-arrow";
        this.DOM_WALKTHROUGH_DONE_BUTTON_CLASS = "walkthrough-done-button";
        this.DOM_TRANSCLUDE = "walkthrough-transclude";
        this.BUTTON_CAPTION_DONE = "Got it!";
        this.PADDING_HOLE = 5;
        this.PADDING_ARROW_START = 5;
        this.PADDING_ARROW_MARKER = 25;
        this.boolean = false;
        this.single_tap = require("../images/components/icons/Single_Tap.png");
        this.double_tap = require("../images/components/icons/Double_Tap.png");
        this.swipe_down = require("../images/components/icons/Swipe_Down.png");
        this.swipe_left = require("../images/components/icons/Swipe_Left.png");
        this.swipe_right = require("../images/components/icons/Swipe_Right.png");
        this.swipe_up = require("../images/components/icons/Swipe_Up.png");
        this.close_icon = "data:image/png;base64," +
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
            "z0uzKiG+YqDUjlG1519qR6/as6eCAhk60ejMJEviKIuhEW1LLQLoZgF1t77yy6VlWbYrdVtKM0j7" +
            "CtL+d0TgRhH4Umm85TPus8MKmcx7WQGEZlyqgPWYSgTIQhG2VnPLFSIsVd5aJxaBjubaf4vADfrA" +
            "XimjfqzN9xQq7mgWxOGmgjS89mmkRyD0yqr7ioDIoh1p6q4orT60gqzaffrY7lJBaYdAdiEgryLH" +
            "daWAoWmXKaQiTcPiKmnXchkdqfKpnoYSGTFnpIXbNHz+NGXDIO9dhbI1rxLiyAtpaYbHLmnZkxpm" +
            "5tTKSlT7qipYoRru/yrt+64qwv1lKwybkFfWnFeJN36mKp1q20oNL/M0vDwn0q6wzdMs6c6ePXux" +
            "RpFvqb1v6IOEDBvByc4at6ylQrnE4a24wKZ1pJGWfUMd2qT5zJpo27IbJZ3m6Y7JkyffJgKPiMiD" +
            "lu3CBcjIdcoy/ViycojD3P/MWAmGm6lTp35bc9k6BXYFJrRo3sbltlgf6ifq7wHLzjLV4G5L5XJL" +
            "SxxfCPOa1dw4ffr072lo/JE6kbYeVdGcIvIw2BZMmzZNNsvga5a94JgG6zxrSzMNoJ4xYqU5Im35" +
            "qVOnfijS6Mg5JSKvRWF+CvLAFs2zNm7SEIcriy/DKAyPRU0750jzwCmSNy/FsIlCgJfVfGdLHF8D" +
            "TmOjYIhIy5jTbMs2ltmsCSBPbZ8vg+WwpcECzhBn3E23AZfK8YwY08rkv07W46MizWo4VZkTXkRe" +
            "qwyWRQqvWS4VIG/ABIzNUIan32bnukuehMdEGuuTXHwIgInkUb3inI1JwNq4u2IiDs3hjIhRNBxs" +
            "07xmrNBY0ARNADaaRrZZdg/ME0ct0/CHQYLqJopIW6XF9dcTE+WRjhbplwgrrn82wMH0hFJxEDdS" +
            "kjSOIc9GtXs0di9XiKwgfzmOABgpfF9vUAiTgH3stJNEHGcfYT5RpP6PStua2suf2MGMI4VVu5ZL" +
            "my2KBXs4iJQ44hhfjTvZ8oovUkPmRpacv4xFQPPd1cLua7EJxiPgIHKuiyMOI8OobexcN9sm6Dgm" +
            "9bsDM2H3Y4sWwEGkwRdFHImNc5uGyNu0B3W5ReV5kggEwA4MI6JKX8FFSImiiEM9Tdamo53fNVpc" +
            "llaSP1siAHZgaJEcLkLTVhRxRm2TSXuzvhi8KblUgAAYgqVFESFOSoljIjT+qFDj8w9ybbOA25AE" +
            "DMHSkIxoOAkYKaXE2Xj/Z2uf6SqLyvIkFggUsZxtkTTATWriZMaulFVUms+i3jxJFAJgCaZRcSXv" +
            "YomDDKN7S+p9XUmB+WOFCFhiCjdjCjN2o5dEhMxOf5s0Hs/XvlJoovSnye/TIwCmYGvICTdjilVK" +
            "XGJeWUDfnGhGCcfKBVpiv6sdCaZga1FPecTJQdoQ7i2ArhRsCLvllluc559/3tm+fbt7bwFc1ZJY" +
            "YjtGnN/ENDmK27QhGOv0rFqPSgoG7GXLljldXV1OX1+fs3PnTkdDTUmq5EdtajqrVq1yent7Awl3" +
            "797NlkvgXa0eitiyiZp0TC/EERm+mBT0ha7U9jt7N3UL0rLCU089pY9zXDZu3FiQ68i6TTpNXVi3" +
            "bt14AcU7fQQFyq9X/8AWjJM4KMbB1ZiVwlHoRNFXulh9TExT7UjqR9P8smbNGmfz5s3OeecZ/QaO" +
            "SHPuvfde5/777/cX4d6jvfXSNhpA38A41LDwiwBXbJUnapyAeYPy6x00VBZ1JHh55plnCjrHGNs+" +
            "Tf6FDRs2BDMVn9BaHR+PzVurPhcxTuRBbQkcJeHoXWIGDUdHatWBpHo0nBRWr14dScCuXbsKM2fO" +
            "DBEgLS1s2bIlMo8Mk1RDbVLbKo0rYpzIg+oIHJPEYZyYQav7gUobllV+DSmR8xTMHD16tHDTTTcV" +
            "enp63DBr1qzCnj17IkljvtRXHiI6q3amLaeIcSIPKtN17nsLGDbr/BamHoMisFbJektME8xRvSfW" +
            "PXv37nX/1MXChQsDFTHX3XHHHa6lSbrHH3/cWbBgQSAND88++6yzYsUKR8fkQ3H1esFwLYx/Zqif" +
            "vTSUyBWcxolMCxDM1Ib5OmkL81bcEChDo3Do0KFITWNITZoP69VPadywiQfFw9WYi+sLuvd7UYgL" +
            "iIj7u75OT0MDcfV8wMp84YUXnBtuuMGqGceOHXPmzJnjHD582Cp9LRPJ6h3VGZ5rVCc/NY4TNO6f" +
            "iWSV5MRX1nBy4sQJd8jbt2+fsW0MnQyjjUgajVf7wNjqB6Mecd41tvNaIBrTxGaucsTx48ed++67" +
            "z0kiD9IeeeQR5/XXX69ya8ovXuM6xAW2byJKc3loWDIiGpy/8iHgEWc89aOvwZjGV25Nb2fMmOFq" +
            "3LXXXhtbL07le+65x7nmGqaQxpSiS5FfpiaJy4NHXFJCLw6LsuEE42Tr1q1OEmleoyGPZYAW6d6r" +
            "hrriXFCDPrJplEec0SXeiBqn5YDz8MMPR1qUzGlvvvlmCIPu7m7n6aefdrQcCMXV+4WIQ5uSLEqa" +
            "6HKVhjgjubXsOA7jtWvXuhZlab2eIYIDOspgWbJkifPEE084OsNfmrXezzb7UwEecpdXAzgX0ri8" +
            "vC8sdzI3AHHlOJnzbZ0m3dZhpk70Vepr6FOauvoqsbrYqS4VtmZsvPzsfmuhXprdfb799tvr2jew" +
            "lbH1KxMPinetKs84Mf7BZ524/b3WGcpXP6F+XFx+4dzInXfeaeXllx/Qeeihh5z169f7i3Dvly5d" +
            "WvEBpFChKV7QN507edkii8uVt02D5x9T1CMylF+WWr+2HYa17RD789ZQpoxfcLRgx44dbqms38o5" +
            "LAR5uL5OnjwZOCxU+kFk3HRjcTrletb9hoRw5B4m8qvQ5/Ry7PhXVAEaLvv1C5NLouJq+c47mlfJ" +
            "GREW49pwdZYvX+5qMR/Eiy++WMtuBOrCMBG2iwIvww+n9eo/vPYT163nwHkGEvhF80ivtnZu9b9r" +
            "9nsIZJiq5CPIAgNh+1the5ehrOOKP0Ya/9AIm4miea6Pjk4kYbFeb9LAVNhimJhkjCM/C7zEsooV" +
            "dfAPOsIQtA5iU+cRtgiAKdga0sNNJHFMfGMRcYVofnk1Li5/Xx4ClpjCDRy54tc4Xpi2FDC7t6ii" +
            "sQI+LSb/t1wEwBJMLfIHuElNnCo4qIXiWxYV5UksEChiedAiaSJxeKeN59U0Hj820YwUC+AyTwKG" +
            "YGlRcOhvWJZqHGUMmAqSBfSS1h3vmdLl8ckICMP3wTI5lRsb4iSKOFQysOcTVbDM6E251kUhY/cO" +
            "7IRh8Hde0VnhIjBMkiyKOMxOo8mvVf6vtWh0V/EUlEs6BMAODC1ywUVomRZFHGXx/52FEhPhF/nW" +
            "HpBVZEznz5Pf6882CTM5lB+0wAJs4SIkccRhpHwcSl3yQn8Frl9W0f6S1/mjAQHtdP9Fc9vLhmRE" +
            "w0HkcQa/r7K0HHYBrlRISkOeHu1z/U5e99DPXInMJYiAsBoUVjfq7dFgTOgJbXtbgd8ThCRO40hI" +
            "BuNcpzRH5aR9EkdtLskIgJGGye1glpzSjQX7SNKINaHNft2VCkkEK1r7QZ2dOzTZXu0+5P9EIiCM" +
            "DgijZZGRwZd4pt5WiBwmSWoijjQzFLq5MUiX5rvdGrutfrRgKGvCRQubj4TNEnXMZhRj64YtnFgx" +
            "apJyYtW4u66xpXwacULrktXydMeqtyH/hI0GE7BRB21IA+tIS9IPkO3v3TjnMN2fMepejXtXX9YR" +
            "jeWLdW/zUUQVM6HeibQRHflYJ23bbdkxPFKxQ6RXhi1xFAQRiUcbKFRru4Mydzn//lWRZzMUk21C" +
            "ikgbVXhQ89pOyw6iaTZaaf4Tvr4K2Q86X8E7YOSLCt5qcfk3nc0fEnHXn6vkiTCODPbqUNIvg+jE" +
            "PjGqWf9M1lbjvNogj78QY9QkDQ2vFcmbd66Rh6aJtE0DAwPbPOAMV6xIhkijj9grJy1xFIzx4R7K" +
            "9AqJu4q8/fphxSmdOJ1/rpAHaZoqfqLjfk/G4RLxnr8hg1JYS1riKBirB40zzndu4qGhA/IWYLAs" +
            "FHnl1EcxTSEibVgL7PXa0X4uRYMx+7EJUkm5QLKxh0us3aY2DBZ16IA6tlgbhxPSNSZrekAjy0q5" +
            "s3bZYFJMgyHy3xTpx5Ia56qxlOEb8l6qYP7rZ+N5+Q/cfyHn9JfVyfG3TXyHG0t9ekNa9h11w8oi" +
            "LHaXj595rSwgytW4Yt3uBh/EGS3NYoZBad9OfZ2t0sA50j7bfF59DXXVFHBGa7Sf60O8Ww1zz/Rb" +
            "NpBfnZZNGnVUonFeG1nfXaaQdgjs0ZfK/4Q1VwRm0Q6vPVW/6qMriLT9Wp/hDbFxGPvbBGnvKlR0" +
            "Ui4rwCDvswpphk0lF9sdHQsFxDqBcLmMF/ddo/7DcQN9bO/oQ3tAWvZKGe1keHxfoeKOZkUcfaAs" +
            "fhBitVQgg18EyG0CZo0IvLTRCCwS9p7a1av2/cbf7hT3bIpi9pc1p5XWkyVxXtnsJMzwHtJeNf8t" +
            "kQbepTXgVfqy0eS6idoxqva8pXZsSuFrjGovJr/7Y42oyHLeVYM42oHWXaxQCfCz5X1YKWPmOoWu" +
            "Wmkh2iWD44TCq8UTxgfpUJnCkPiBgvEYSNryq0Uc7WhTmKlgtdYjQ5zoy+c/QV+qJcRc+UG7pQFT" +
            "slpOFHel+f+ej+l+vzSrT+X/Ma4tKd57vkccFplLNYmjsZTP0HkhDxlJm7Rikaw6/lP0WSKwW9ep" +
            "urbryn+WzhJHl5ZWveOL18VdNI7wrPdDun6i6zFdD8mq7Zc29ytdlgDj5WdozGQ+UzkhqTZxXoUs" +
            "FRg6K9Y+r8AGvaJlDI2Y/FWVWhFHJ6jrAoWLFCqZ+5S94QTN/lABn2PVtMzf61oS59WLtwSrkx31" +
            "etTvtSOLKyRxrh+r0bhrnUWFXhn1BA4CmfsgsNk0EA2DMOaymhKm+lypJ3FeGzAmPAIr9Z16ZVbr" +
            "yn6kR5j1pmc1GtMIxHn9oi0cjUADU7vOvEKqcGU4PKmA5x+XVU3mMNWTKI1EnL+haB6LeIhkw7bW" +
            "7YQcdqRZOBMYGhtKag1IOZ2njWggBLKsIGQ9J0IMJjwBwhpGs9SWSGkG4qIa7u2+c/UCWkrwSPXm" +
            "S28ughzuCZyb8QJrL+5zyRGoPgL/B+Nop/F9kw+nAAAAAElFTkSuQmCC";
    }
    Object.defineProperty(WalkthroughComponent.prototype, "focusElementSelector", {
        get: function () {
            return this._focusElementSelector;
        },
        set: function (focusElementSelector) {
            if ((!this._focusElementSelector || focusElementSelector !== this._focusElementSelector) && this.isVisible) {
                this._focusElementSelector = focusElementSelector;
                this.setFocusOnElement();
            }
            else {
                this._focusElementSelector = focusElementSelector;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalkthroughComponent.prototype, "isActive", {
        set: function (isActive) {
            var _this = this;
            if (isActive) {
                this.setWalkthroughElements();
                this.isVisible = true;
                try {
                    if (this.focusElementSelector) {
                        this.setFocusOnElement();
                    }
                }
                catch (e) {
                    console.warn('failed to focus on element prior to timeout: ' + this.focusElementSelector);
                }
                if (this.focusElementSelector) {
                    setTimeout(function () {
                        _this.setFocusOnElement();
                    }, 100);
                }
                this.onWalkthroughShowEvent.emit();
            }
            else {
                this.isVisible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    WalkthroughComponent.prototype.onResize = function (event) {
        if (this.isVisible) {
            this.resizeHandler();
        }
    };
    WalkthroughComponent.prototype.resizeHandler = function () {
        if (this.focusElementSelector && this.isVisible) {
            this.setFocusOnElement();
        }
    };
    WalkthroughComponent.prototype.setWalkthroughElements = function () {
        var _this = this;
        var holeElements = this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_HOLE_CLASS);
        this.walkthroughHoleElements = holeElements[0];
        var textClass = (this.walkthroughType === "tip") ? this.DOM_WALKTHROUGH_TIP_TEXT_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS;
        this.walkthroughTextElement = this.element.nativeElement.querySelectorAll(textClass)[0];
        var iconClass = (this.walkthroughType === "tip") ? this.DOM_WALKTHROUGH_TIP_ICON_CLASS : this.DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS;
        this.walkthroughIconElement = this.element.nativeElement.querySelectorAll(iconClass)[0];
        this.walkthroughArrowElement = this.element.nativeElement.querySelectorAll(this.DOM_WALKTHROUGH_ARROW_CLASS)[0];
        setTimeout(function () {
            _this.closeIcon = _this.close_icon;
        }, 100);
        this.walkthroughIcon = this.getIcon(this.walkthroughIconWanted);
        this.buttonCaption = this.buttonCaption || this.BUTTON_CAPTION_DONE;
        if (this.hasBackdrop === undefined) {
            this.hasBackdrop = (this.walkthroughType !== "tip");
        }
    };
    WalkthroughComponent.prototype.ngAfterViewChecked = function () {
        var translude = this.element.nativeElement.querySelectorAll('.' + this.DOM_TRANSCLUDE);
        if (translude.length > 0 && translude[0].children.length > 0) {
            this.hasTransclude = true;
        }
    };
    WalkthroughComponent.prototype.getIcon = function (icon) {
        var retval = null;
        switch (icon) {
            case ("single_tap"):
                retval = this.single_tap;
                break;
            case ("double_tap"):
                retval = this.double_tap;
                break;
            case ("swipe_down"):
                retval = this.swipe_down;
                break;
            case ("swipe_left"):
                retval = this.swipe_left;
                break;
            case ("swipe_right"):
                retval = this.swipe_right;
                break;
            case ("swipe_up"):
                retval = this.swipe_up;
                break;
            case ("arrow"):
                retval = "";
                break;
        }
        if (retval === null && icon && icon.length > 0) {
            retval = icon;
        }
        else {
            this.toDataURL(retval).then(function (dataUrl) {
                retval = dataUrl;
                console.log("icon :", retval);
            });
        }
        return retval;
    };
    WalkthroughComponent.prototype.toDataURL = function (url) {
        return fetch(url)
            .then(function (response) { return response.blob(); })
            .then(function (blob) {
            return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                };
            });
        });
    };
    WalkthroughComponent.prototype.setArrowAndText = function (pointSubjectLeft, pointSubjectTop, pointSubjectWidth, pointSubjectHeight, paddingLeft) {
        var offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);
        var startLeft = offsetCoordinates.left + offsetCoordinates.width / 2;
        var startTop = offsetCoordinates.top + offsetCoordinates.height + this.PADDING_ARROW_START;
        var endLeft = 0;
        var isLine = false;
        if (Math.abs(startLeft - (pointSubjectLeft + pointSubjectWidth / 2)) < 10) {
            console.warn("Hole element and text are inline line arrow will be used");
            endLeft = pointSubjectLeft + pointSubjectWidth / 2;
            isLine = true;
        }
        else if (startLeft > pointSubjectLeft) {
            endLeft = pointSubjectLeft + paddingLeft + pointSubjectWidth;
        }
        else if (startLeft < pointSubjectLeft) {
            endLeft = pointSubjectLeft - paddingLeft;
        }
        var endTop;
        if (isLine) {
            endTop = pointSubjectTop - this.PADDING_ARROW_MARKER;
        }
        else {
            endTop = pointSubjectTop + (pointSubjectHeight / 2);
        }
        var arrowLeft, arrowRight, arrowTop, arrowBottom;
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
        var arrowSvgDom;
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
        }
        else {
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
        var arrowElement = this.element.nativeElement.querySelector(this.DOM_WALKTHROUGH_ARROW_CLASS);
        if (arrowElement.children.length > 0) {
            arrowElement.children[0].remove();
        }
        arrowElement.insertAdjacentHTML("afterbegin", arrowSvgDom);
    };
    WalkthroughComponent.prototype.isItemOnText = function (iconLeft, iconTop, iconRight, iconBottom) {
        var holeCoordinates = this.getOffsetCoordinates(this.walkthroughHoleElements);
        var offsetCoordinates = this.getOffsetCoordinates(this.walkthroughTextElement);
        var holeLeft = holeCoordinates.left;
        var holeRight = holeCoordinates.left + holeCoordinates.width;
        var holeTop = holeCoordinates.top;
        var holeBottom = holeCoordinates.top + holeCoordinates.height;
        var textLeft = document.body.clientWidth / 4;
        var textRight = document.body.clientWidth / 4 * 3;
        var textTop = offsetCoordinates.top;
        var textBottom = offsetCoordinates.top + offsetCoordinates.height;
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
    ;
    WalkthroughComponent.prototype.getOffsetCoordinates = function (focusElement) {
        var width;
        var height;
        var left;
        var top;
        width = focusElement.offsetWidth;
        height = focusElement.offsetHeight;
        left = focusElement.getBoundingClientRect().left;
        top = focusElement.getBoundingClientRect().top;
        var sameAncestorForFocusElementAndWalkthrough = this.getSameAncestor(focusElement);
        while (sameAncestorForFocusElementAndWalkthrough) {
            left = left - sameAncestorForFocusElementAndWalkthrough.offsetLeft;
            top = top - sameAncestorForFocusElementAndWalkthrough.offsetTop;
            sameAncestorForFocusElementAndWalkthrough = sameAncestorForFocusElementAndWalkthrough.offsetParent;
        }
        return { top: top, left: left, height: height, width: width };
    };
    WalkthroughComponent.prototype.getSameAncestor = function (focusElement) {
        var retval = null;
        var walkthroughElementParent = this.element.nativeElement.offsetParent;
        var focusElementParent = focusElement.offsetParent;
        var walkthroughAncestorIter = walkthroughElementParent;
        var focusElementAncestorIter = focusElementParent;
        while (walkthroughAncestorIter && !retval) {
            focusElementAncestorIter = focusElementParent;
            while (focusElementAncestorIter && !retval) {
                if (focusElementAncestorIter === walkthroughAncestorIter) {
                    retval = walkthroughAncestorIter;
                }
                else {
                    focusElementAncestorIter = focusElementAncestorIter.offsetParent;
                }
            }
            walkthroughAncestorIter = walkthroughAncestorIter.offsetParent;
        }
        return retval;
    };
    ;
    WalkthroughComponent.prototype.setIconAndText = function (iconLeft, iconTop, paddingLeft, paddingTop) {
        var offsetCoordinates = this.getOffsetCoordinates(this.walkthroughIconElement);
        var iconHeight = offsetCoordinates.height;
        var iconWidth = offsetCoordinates.width;
        var iconLeftWithPadding = iconLeft + paddingLeft - (iconWidth / 4);
        var iconTopWithPadding = iconTop + paddingTop - (iconHeight / 6);
        var iconRight = iconLeftWithPadding + iconWidth;
        var iconBottom = iconTopWithPadding + iconHeight;
        if (this.forceCaptionLocation === undefined && this.isItemOnText(iconLeftWithPadding, iconTopWithPadding, iconRight, iconBottom)) {
            this.forceCaptionLocation = "BOTTOM";
        }
        var iconLocation = "position: absolute;" +
            "left:" + iconLeftWithPadding + "px;" +
            "top:" + iconTopWithPadding + "px;";
        this.walkthroughIconElement.setAttribute('style', iconLocation);
    };
    ;
    WalkthroughComponent.prototype.setElementLocations = function () {
        var _this = this;
        var focusElement = (this.focusElementSelector) ? document.querySelectorAll(this.focusElementSelector) : null;
        if (focusElement && focusElement.length > 0) {
            if (focusElement.length > 1) {
                console.warn('Multiple items fit selector, displaying first visible as focus item');
            }
        }
        else {
            console.error('No element found with selector: ' + this.focusElementSelector);
            focusElement = null;
        }
        var htmlElement = focusElement[0];
        if (htmlElement) {
            var offsetCoordinates = this.getOffsetCoordinates(htmlElement);
            var width_1 = offsetCoordinates.width;
            var height_1 = offsetCoordinates.height;
            var left_1 = offsetCoordinates.left;
            var top_1 = offsetCoordinates.top;
            this.setFocus(left_1, top_1, width_1, height_1);
            var paddingLeft_1 = parseFloat(this.iconPaddingLeft);
            var paddingTop_1 = parseFloat(this.iconPaddingTop);
            if (!paddingLeft_1) {
                paddingLeft_1 = 0;
            }
            if (!paddingTop_1) {
                paddingTop_1 = 0;
            }
            if (this.walkthroughIconWanted && this.walkthroughIconWanted !== "arrow" && this.walkthroughType === "transparency") {
                setTimeout(function () {
                    _this.setIconAndText(left_1 + width_1 / 2, top_1 + height_1 / 2, paddingLeft_1, paddingTop_1);
                }, 200);
            }
            if (this.walkthroughIconWanted === "arrow") {
                setTimeout(function () {
                    _this.setArrowAndText(left_1, top_1 + paddingTop_1, width_1, height_1, paddingLeft_1);
                }, 200);
            }
            if (this.walkthroughType === "tip" &&
                this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
                (this.iconPaddingLeft || this.iconPaddingTop)) {
                this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
            }
        }
        else {
            if (this.focusElementSelector) {
                console.info('Unable to find element requested to be focused: ' + this.focusElementSelector);
            }
            else {
                if (this.walkthroughType === "tip" &&
                    this.walkthroughIconWanted && this.walkthroughIconWanted.length > 0 &&
                    (this.iconPaddingLeft || this.iconPaddingTop)) {
                    this.setTipIconPadding(this.iconPaddingLeft, this.iconPaddingTop);
                }
            }
        }
    };
    WalkthroughComponent.prototype.setFocus = function (left, top, width, height) {
        var holeDimensions = "left:" + (left - this.PADDING_HOLE) + "px;" +
            "top:" + (top - this.PADDING_HOLE) + "px;" +
            "width:" + (width + (2 * this.PADDING_HOLE)) + "px;" +
            "height:" + (height + (2 * this.PADDING_HOLE)) + "px;";
        if (this.walkthroughHoleElements) {
            this.walkthroughHoleElements.setAttribute('style', holeDimensions);
        }
    };
    ;
    WalkthroughComponent.prototype.setFocusOnElement = function () {
        this.setElementLocations();
    };
    WalkthroughComponent.prototype.onWalkthroughContentClicked = function () {
        this.onWalkthroughContentClickedEvent.emit();
    };
    WalkthroughComponent.prototype.setTipIconPadding = function (iconPaddingLeft, iconPaddingTop) {
        var iconLocation = "";
        if (iconPaddingTop) {
            iconLocation += "margin-top:" + iconPaddingTop + "px;";
        }
        if (iconPaddingLeft) {
            iconLocation += "right:" + iconPaddingLeft + "%;";
        }
        this.walkthroughIconElement.setAttribute('style', iconLocation);
    };
    ;
    WalkthroughComponent.prototype.onCloseClicked = function (event) {
        if ((!this.useButton) ||
            (event.currentTarget.className.indexOf(this.DOM_WALKTHROUGH_DONE_BUTTON_CLASS) > -1)) {
            this.closeWalkthrough();
        }
    };
    WalkthroughComponent.prototype.closeWalkthrough = function () {
        this.onWalkthroughHideEvent.emit();
        var arrowElement = this.element.nativeElement.querySelector(this.DOM_WALKTHROUGH_ARROW_CLASS);
        if (arrowElement.children.length > 0) {
            arrowElement.children[0].remove();
        }
        this.isVisible = false;
    };
    ;
    __decorate([
        Input("walkthrough-type"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "walkthroughType", void 0);
    __decorate([
        Input("button-caption"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "buttonCaption", void 0);
    __decorate([
        Input("use-button"),
        __metadata("design:type", Boolean)
    ], WalkthroughComponent.prototype, "useButton", void 0);
    __decorate([
        Input("main-caption"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "mainCaption", void 0);
    __decorate([
        Input("icon"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "walkthroughIconWanted", void 0);
    __decorate([
        Input("walkthrough-hero-image"),
        __metadata("design:type", Object)
    ], WalkthroughComponent.prototype, "walkthroughHeroImage", void 0);
    __decorate([
        Input("has-glow"),
        __metadata("design:type", Boolean)
    ], WalkthroughComponent.prototype, "hasGlow", void 0);
    __decorate([
        Input("force-caption-location"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "forceCaptionLocation", void 0);
    __decorate([
        Input("has-backdrop"),
        __metadata("design:type", Boolean)
    ], WalkthroughComponent.prototype, "hasBackdrop", void 0);
    __decorate([
        Input("is-round"),
        __metadata("design:type", Boolean)
    ], WalkthroughComponent.prototype, "isRound", void 0);
    __decorate([
        Input("icon-padding-left"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "iconPaddingLeft", void 0);
    __decorate([
        Input("icon-padding-top"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "iconPaddingTop", void 0);
    __decorate([
        Input("tip-icon-location"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "tipIconLocation", void 0);
    __decorate([
        Input("tip-color"),
        __metadata("design:type", String)
    ], WalkthroughComponent.prototype, "tipColor", void 0);
    __decorate([
        Input("focus-element-selector"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], WalkthroughComponent.prototype, "focusElementSelector", null);
    __decorate([
        Input("is-active"),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], WalkthroughComponent.prototype, "isActive", null);
    __decorate([
        Output("on-walkthrough-show"),
        __metadata("design:type", Object)
    ], WalkthroughComponent.prototype, "onWalkthroughShowEvent", void 0);
    __decorate([
        Output("on-walkthrough-hide"),
        __metadata("design:type", Object)
    ], WalkthroughComponent.prototype, "onWalkthroughHideEvent", void 0);
    __decorate([
        Output("on-walkthrough-content-clicked"),
        __metadata("design:type", Object)
    ], WalkthroughComponent.prototype, "onWalkthroughContentClickedEvent", void 0);
    __decorate([
        HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WalkthroughComponent.prototype, "onResize", null);
    __decorate([
        ViewChild("walkthroughcomponent"),
        __metadata("design:type", ElementRef)
    ], WalkthroughComponent.prototype, "element", void 0);
    WalkthroughComponent = __decorate([
        Component({
            selector: 'walkthrough',
            template: "\n  <div #walkthroughcomponent class=\"{{DOM_WALKTHROUGH_CLASS}}\" [hidden]=\"!isVisible\" [ngClass]=\"{'walkthrough-active': isVisible}\" (click)=\"onCloseClicked($event)\">\n  <div class=\"walkthrough-container walkthrough-container-transparency\" [hidden]=\"walkthroughType!=='transparency'\">\n    <div class=\"walkthrough-inner\">\n      <div class=\"{{DOM_TRANSCLUDE}}\">\n        <ng-content select=\"img\"></ng-content>\n      </div>\n      <div class=\"walkthrough-non-transclude-template\" [hidden]=\"hasTransclude\">\n        <div class=\"walkthrough-text-container\" [ngClass]=\"{'walkthrough-top': (!forceCaptionLocation || forceCaptionLocation==='TOP'), 'walkthrough-bottom': forceCaptionLocation==='BOTTOM'}\">\n          <pre class=\"walkthrough-element walkthrough-text\" [innerHTML]=\"mainCaption\"></pre>\n          <img *ngIf=\"walkthroughHeroImage\" class=\"walkthrough-element walkthrough-hero-image\" src=\"{{walkthroughHeroImage}}\" (click)=\"onWalkthroughContentClicked()\">\n        </div>\n        <img class=\"walkthrough-element walkthrough-icon\" [hidden]=\"walkthroughIconWanted && walkthroughIconWanted==='arrow'\" src=\"{{walkthroughIcon}}\">\n        <div class=\"walkthrough-element walkthrough-arrow\" [hidden]=\"walkthroughIconWanted!=='arrow'\"></div>\n        <button class=\"walkthrough-element walkthrough-button-positive walkthrough-done-button\" type=\"button\" *ngIf=\"useButton\" (click)=\"onCloseClicked($event)\">\n          {{buttonCaption}}\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"walkthrough-container walkthrough-container-tip\" [hidden]=\"walkthroughType!=='tip'\">\n    <div class=\"walkthrough-inner\" [ngClass]=\"{'walkthrough-top': ((!forceCaptionLocation && !tipLocation) || forceCaptionLocation==='TOP' || tipLocation =='TOP'), 'walkthrough-bottom': (forceCaptionLocation=='BOTTOM' || tipLocation =='BOTTOM')}\">\n      <img class=\"walkthrough-element walkthrough-tip-icon-text-box\" [ngClass]=\"{'walkthrough-tip-icon-image-front': tipIconLocation==='FRONT', 'walkthrough-tip-icon-image-back': tipIconLocation=='BACK'}\"\n        [hidden]=\"walkthroughIconWanted && walkthroughIconWanted==='arrow'\" src=\"{{walkthroughIcon}}\" alt=\"icon\">\n      <button class=\"walkthrough-done-button walkthrough-tip-done-button-text-box\" [ngClass]=\"{'walkthrough-tip-done-button-no-icon': !icon}\"\n        type=\"button\" *ngIf=\"useButton\" (click)=\"onCloseClicked($event)\">\n        <img class=\"walkthrough-tip-button-image-text-box\" src=\"{{closeIcon}}\" alt=\"x\">\n      </button>\n      <div class=\"walkthrough-element walkthrough-tip-text-box\" (click)=\"onWalkthroughContentClicked()\" [ngClass]=\"{'walkthrough-tip-text-box-color-black': tipColor=='BLACK', 'walkthrough-tip-text-box-color-white': tipColor=='WHITE'}\">\n        <pre [innerHTML]=\"mainCaption\"></pre>\n        <img *ngIf=\"walkthroughHeroImage\" class=\"walkthrough-element walkthrough-hero-image\" src=\"{{walkthroughHeroImage}}\">\n        <div class=\"{{DOM_TRANSCLUDE}}\">\n          <ng-content select=\"img\"></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"!hasBackdrop\" class=\"walkthrough-hole\" [ngClass]=\"{'walkthrough-hole-round': isRound}\">\n  </div>\n  <div [hidden]=\"!(hasGlow && (focusElementSelector))\" class=\"walkthrough-hole walkthrough-hole-glow\" [ngClass]=\"{'walkthrough-hole-round': isRound}\">\n  </div>\n</div>\n",
            styles: [
                "\n  .walkthrough-hole-glow {\n      position: absolute;\n      outline: none;\n      border: 2px solid #FFFF66 !important;\n      box-shadow: 0 0 36px #FFFF66 !important;\n      -webkit-appearance: none;\n      box-sizing: border-box;\n  }\n\n  .walkthrough-background {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: initial;\n      text-align: center;\n      -webkit-transition: height 0s ease-out .2s, opacity .2s ease-out;\n      -moz-transition: height 0s ease-out .2s, opacity .2s ease-out;\n      -o-transition: height 0s ease-out .2s, opacity .2s ease-out;\n      transition: height 0s ease-out .2s, opacity .2s ease-out;\n      opacity: 0;\n      height: 0;\n      overflow: hidden;\n      z-index: 1000;\n  }\n\n  .walkthrough-hole {\n      position: absolute;\n      -moz-box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);\n      -webkit-box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);\n      box-shadow: 0 0 0 1997px rgba(0, 0, 0, 0.8);\n      -webkit-appearance: none;\n  }\n\n  .walkthrough-element.walkthrough-text {\n      margin-top: 10%;\n      width: 50%;\n      color: #fff;\n      text-align: center;\n  }\n\n  .walkthrough-element.walkthrough-done-button {\n      position: absolute;\n      bottom: 30px;\n      height: 30px;\n      width: 80px;\n      display: inline-block;\n      right: 30px;\n      margin: 0 auto;\n  }\n\n  .walkthrough-button-positive {\n      border-color: #0c63ee;\n      background-color: #387ef5;\n      color: #fff;\n  }\n\n  .walkthrough-button-positive:hover {\n      color: #fff;\n      text-decoration: none;\n  }\n\n  .walkthrough-button-positive.active {\n      border-color: #0c63ee;\n      background-color: #0c63ee;\n      box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  .walkthrough-element.walkthrough-icon {\n      height: 200px;\n  }\n\n  .walkthrough-element.walkthrough-arrow {\n      color: #ffffff;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n  }\n\n  .walkthrough-element {\n      z-index: 1001;\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;\n  }\n\n  .walkthrough-background.walkthrough-active {\n      -webkit-transition: opacity .2s ease-out;\n      -moz-transition: opacity .2s ease-out;\n      -o-transition: opacity .2s ease-out;\n      transition: opacity .2s ease-out;\n      opacity: 1;\n      height: 100%;\n      pointer-events: all;\n  }\n\n  .walkthrough-transclude {\n      position: relative;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n  }\n\n  .walkthrough-hole-round {\n      border-radius: 200px;\n  }\n\n  .walkthrough-tip-text-box {\n      /*top: 128px;*/\n      position: relative;\n      margin-left: 16px;\n      margin-right: 16px;\n      border: 2px solid;\n      border-radius: 35px;\n      padding: 14px;\n      word-break: break-all !important;\n\n      /*margin-top: 0;*/\n      /*margin-bottom: 0;*/\n  }\n\n  .walkthrough-container {\n      float: left;\n      position: relative;\n      height: 100%;\n      width: 100%;\n  }\n\n  .walkthrough-inner {\n      position: fixed;\n      z-index: 3;\n      width: 100%;\n  }\n\n  .walkthrough-container-transparency > .walkthrough-inner {\n      height: 100%;\n  }\n\n  .walkthrough-text-container {\n      position: absolute;\n      width: 100%;\n  }\n\n  .walkthrough-container-tip .walkthrough-top, .walkthrough-container-transparency .walkthrough-top {\n      top: 15px;\n  }\n\n  .walkthrough-container-tip .walkthrough-bottom {\n      bottom: 0;\n  }\n\n  /* take 'done' button into consideration */\n  .walkthrough-container-transparency .walkthrough-bottom {\n      bottom: 70px;\n  }\n\n  .walkthrough-tip-icon-image-front {\n      z-index: 1002;\n  }\n\n  .walkthrough-tip-icon-image-back {\n      z-index: 999;\n  }\n\n  .walkthrough-tip-icon-text-box {\n      height: 142px;\n\n      /*right: 9%;*/\n      position: relative;\n      margin-bottom: -32px;\n      margin-right: -250px;\n\n      /*bottom: 70px;*/\n  }\n\n  .walkthrough-tip-done-button-text-box {\n      /*top: 109px;*/\n      /*bottom: 59px;*/\n      position: relative;\n      z-index: 1002;\n\n      /*right: -7px;*/\n      margin-top: 107px;\n      background-color: transparent;\n      border: 0;\n      float: right;\n  }\n\n  .walkthrough-tip-done-button-no-icon {\n      margin-top: -13px !important;\n  }\n\n  .walkthrough-tip-button-image-text-box {\n      width: 42px;\n      height: 42px;\n  }\n\n  .walkthrough-tip-text-box-color-black {\n      border-color: #ffffff;\n      background-color: #000000;\n      color: #ffffff;\n  }\n\n  .walkthrough-tip-text-box-color-white {\n      border-color: #000000;\n      background-color: #ffffff;\n  }\n\n  .walkthrough-hero-image {\n      margin-top: 15px;\n  }\n\n  .walkthrough-transclude img {\n      height: 100vh;\n      width: 100%;\n  }\n\n  pre {\n      white-space: pre-wrap;\n  }\n  "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WalkthroughComponent);
    return WalkthroughComponent;
}());
export { WalkthroughComponent };

//# sourceMappingURL=walkthrough.js.map
