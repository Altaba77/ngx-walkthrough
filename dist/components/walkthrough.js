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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb21wb25lbnRzL3dhbGt0aHJvdWdoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbnZhciBXYWxrdGhyb3VnaENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2Fsa3Rocm91Z2hDb21wb25lbnQoKSB7XG4gICAgICAgIHRoaXMudXNlQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzR2xvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUm91bmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZm9jdXNFbGVtZW50U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLm9uV2Fsa3Rocm91Z2hTaG93RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMub25XYWxrdGhyb3VnaEhpZGVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5vbldhbGt0aHJvdWdoQ29udGVudENsaWNrZWRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5ET01fV0FMS1RIUk9VR0hfQ0xBU1MgPSBcIndhbGt0aHJvdWdoLWJhY2tncm91bmRcIjtcbiAgICAgICAgdGhpcy5ET01fV0FMS1RIUk9VR0hfVFJBTlNQQVJFTkNZX1RFWFRfQ0xBU1MgPSBcIi53YWxrdGhyb3VnaC10ZXh0XCI7XG4gICAgICAgIHRoaXMuRE9NX1dBTEtUSFJPVUdIX1RJUF9URVhUX0NMQVNTID0gXCIud2Fsa3Rocm91Z2gtdGlwLXRleHQtYm94XCI7XG4gICAgICAgIHRoaXMuRE9NX1dBTEtUSFJPVUdIX0hPTEVfQ0xBU1MgPSBcIi53YWxrdGhyb3VnaC1ob2xlXCI7XG4gICAgICAgIHRoaXMuRE9NX1dBTEtUSFJPVUdIX1RSQU5TUEFSRU5DWV9JQ09OX0NMQVNTID0gXCIud2Fsa3Rocm91Z2gtaWNvblwiO1xuICAgICAgICB0aGlzLkRPTV9XQUxLVEhST1VHSF9USVBfSUNPTl9DTEFTUyA9IFwiLndhbGt0aHJvdWdoLXRpcC1pY29uLXRleHQtYm94XCI7XG4gICAgICAgIHRoaXMuRE9NX1dBTEtUSFJPVUdIX0FSUk9XX0NMQVNTID0gXCIud2Fsa3Rocm91Z2gtYXJyb3dcIjtcbiAgICAgICAgdGhpcy5ET01fV0FMS1RIUk9VR0hfRE9ORV9CVVRUT05fQ0xBU1MgPSBcIndhbGt0aHJvdWdoLWRvbmUtYnV0dG9uXCI7XG4gICAgICAgIHRoaXMuRE9NX1RSQU5TQ0xVREUgPSBcIndhbGt0aHJvdWdoLXRyYW5zY2x1ZGVcIjtcbiAgICAgICAgdGhpcy5CVVRUT05fQ0FQVElPTl9ET05FID0gXCJHb3QgaXQhXCI7XG4gICAgICAgIHRoaXMuUEFERElOR19IT0xFID0gNTtcbiAgICAgICAgdGhpcy5QQURESU5HX0FSUk9XX1NUQVJUID0gNTtcbiAgICAgICAgdGhpcy5QQURESU5HX0FSUk9XX01BUktFUiA9IDI1O1xuICAgICAgICB0aGlzLmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaW5nbGVfdGFwID0gcmVxdWlyZShcIi4uL2ltYWdlcy9jb21wb25lbnRzL2ljb25zL1NpbmdsZV9UYXAucG5nXCIpO1xuICAgICAgICB0aGlzLmRvdWJsZV90YXAgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2NvbXBvbmVudHMvaWNvbnMvRG91YmxlX1RhcC5wbmdcIik7XG4gICAgICAgIHRoaXMuc3dpcGVfZG93biA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvY29tcG9uZW50cy9pY29ucy9Td2lwZV9Eb3duLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5zd2lwZV9sZWZ0ID0gcmVxdWlyZShcIi4uL2ltYWdlcy9jb21wb25lbnRzL2ljb25zL1N3aXBlX0xlZnQucG5nXCIpO1xuICAgICAgICB0aGlzLnN3aXBlX3JpZ2h0ID0gcmVxdWlyZShcIi4uL2ltYWdlcy9jb21wb25lbnRzL2ljb25zL1N3aXBlX1JpZ2h0LnBuZ1wiKTtcbiAgICAgICAgdGhpcy5zd2lwZV91cCA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvY29tcG9uZW50cy9pY29ucy9Td2lwZV9VcC5wbmdcIik7XG4gICAgICAgIHRoaXMuY2xvc2VfaWNvbiA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICtcbiAgICAgICAgICAgIFwiaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUc0QUFBQnVDQVlBQUFER1d5YjdBQUFBQVhOU1IwSUFyczRjNlFBQUFBbHdTRmx6QUFBTFwiICtcbiAgICAgICAgICAgIFwiRXdBQUN4TUJBSnFjR0FBQUJDWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNlwiICtcbiAgICAgICAgICAgIFwiZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURVdU5DNHdJajRLSUNBZ1BISmtaanBTUkVZZ1wiICtcbiAgICAgICAgICAgIFwiZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0S1wiICtcbiAgICAgICAgICAgIFwiSUNBZ0lDQWdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlLSUNBZ0lDQWdJQ0FnSUNBZ2VHMXNibk02ZEdsbVwiICtcbiAgICAgICAgICAgIFwiWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOVwiICtcbiAgICAgICAgICAgIFwiSW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdlpYaHBaaTh4TGpBdklnb2dJQ0FnSUNBZ0lDQWdJQ0I0Yld4dWN6cGtZejBpYUhSMFwiICtcbiAgICAgICAgICAgIFwiY0RvdkwzQjFjbXd1YjNKbkwyUmpMMlZzWlcxbGJuUnpMekV1TVM4aUNpQWdJQ0FnSUNBZ0lDQWdJSGh0Ykc1ek9uaHRjRDBpYUhSMFwiICtcbiAgICAgICAgICAgIFwiY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMeUkrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1PbEpsYzI5c2RYUnBiMjVWYm1sMFwiICtcbiAgICAgICAgICAgIFwiUGpFOEwzUnBabVk2VW1WemIyeDFkR2x2YmxWdWFYUStDaUFnSUNBZ0lDQWdJRHgwYVdabU9rTnZiWEJ5WlhOemFXOXVQalU4TDNScFwiICtcbiAgICAgICAgICAgIFwiWm1ZNlEyOXRjSEpsYzNOcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9saFNaWE52YkhWMGFXOXVQamN5UEM5MGFXWm1PbGhTWlhOdlwiICtcbiAgICAgICAgICAgIFwiYkhWMGFXOXVQZ29nSUNBZ0lDQWdJQ0E4ZEdsbVpqcFBjbWxsYm5SaGRHbHZiajR4UEM5MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGdvZ1wiICtcbiAgICAgICAgICAgIFwiSUNBZ0lDQWdJQ0E4ZEdsbVpqcFpVbVZ6YjJ4MWRHbHZiajQzTWp3dmRHbG1aanBaVW1WemIyeDFkR2x2Ymo0S0lDQWdJQ0FnSUNBZ1wiICtcbiAgICAgICAgICAgIFwiUEdWNGFXWTZVR2w0Wld4WVJHbHRaVzV6YVc5dVBqRXhNRHd2WlhocFpqcFFhWGhsYkZoRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUNBZ1wiICtcbiAgICAgICAgICAgIFwiSUR4bGVHbG1Pa052Ykc5eVUzQmhZMlUrTVR3dlpYaHBaanBEYjJ4dmNsTndZV05sUGdvZ0lDQWdJQ0FnSUNBOFpYaHBaanBRYVhobFwiICtcbiAgICAgICAgICAgIFwiYkZsRWFXMWxibk5wYjI0K01URXdQQzlsZUdsbU9sQnBlR1ZzV1VScGJXVnVjMmx2Ymo0S0lDQWdJQ0FnSUNBZ1BHUmpPbk4xWW1wbFwiICtcbiAgICAgICAgICAgIFwiWTNRK0NpQWdJQ0FnSUNBZ0lDQWdJRHh5WkdZNlUyVnhMejRLSUNBZ0lDQWdJQ0FnUEM5a1l6cHpkV0pxWldOMFBnb2dJQ0FnSUNBZ1wiICtcbiAgICAgICAgICAgIFwiSUNBOGVHMXdPazF2WkdsbWVVUmhkR1UrTWpBeE5Ub3dOem93TlNBeU1Ub3dOem8wTnp3dmVHMXdPazF2WkdsbWVVUmhkR1UrQ2lBZ1wiICtcbiAgICAgICAgICAgIFwiSUNBZ0lDQWdJRHg0YlhBNlEzSmxZWFJ2Y2xSdmIydytVR2w0Wld4dFlYUnZjaUF6TGpJdU1Ud3ZlRzF3T2tOeVpXRjBiM0pVYjI5c1wiICtcbiAgICAgICAgICAgIFwiUGdvZ0lDQWdJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUNBZ1BDOXlaR1k2VWtSR1BnbzhMM2c2ZUcxd2JXVjBZVDRLMzZBWlwiICtcbiAgICAgICAgICAgIFwiRndBQUVUWkpSRUZVZUFIdG5XdU1WZFVaaHZjTU1CZVJRWEdtU3JWZW1xYVVIeVVhYkVSSW9XaFFFMDJhbEtZaytxZE5TMzhBcG9odFwiICtcbiAgICAgICAgICAgIFwiWWl3UW8zaEpFd2FWZ20zQVdtTTBBVHZ4UjV0R29kU01TVnRzUUdsclNqRk50VllGQzFJSEVaZ1paazdmWjN2MnpONW5YOWJhNSt4elwiICtcbiAgICAgICAgICAgIFwiRy9hWExQWmwzZDkzZjJ0OTYxdnJESTZUUzFNaTBOS1VyWGFjTnJXN1hXRktNVXpXbFRCSmdUNjFGcSs2T0FXRjBlSjFSTmV6eFRDc1wiICtcbiAgICAgICAgICAgIFwiSzJGUVlVaWhxYVFaaUlPRVRsL28wSDNXN1liY013cW5mUUd5RzFheUJpQ3JqcUk5NXhjRHBOVzZuUkFKaVNjVlBsWkFVeHRLYWcxSVwiICtcbiAgICAgICAgICAgIFwiVXVkcHl6U0ZMb1h6a2hMV09BNFNQMUU0VWJ6eVhIZHBCT0xRcmdzVklJdzVxcEVGellQQS95a3dWOVpONmtrY2hzVkZDbWhaUGR0UlwiICtcbiAgICAgICAgICAgIFwiRHZob0hVUG9od29ZT0RXWGVnQ0doa0VZR2xhUCtyTUVHUUxSUUFpc3FRYldFampxWWtpY29ZQ2xPSkVFQy9TNEFrTm9UZWJBV2hHSFwiICtcbiAgICAgICAgICAgIFwiWlhpeEF1dXZpU3lzQno5UXdDS3RxbFNiT01ydlZrRFRzcEsyMXRiV1JXMXRiWXRVNE95V2xoYks3eXdVQ20yNm42U0FOdnMxZWxSeFwiICtcbiAgICAgICAgICAgIFwiYUFIWEVjVXpKNTNXL1RGZER3NE5EZldQam83MjZ6N0xSVGlhUi9sVjA3NXFFb2RuNHhJRnJwWEs5WjJkblV0VnlOemg0ZUdla1pHUlwiICtcbiAgICAgICAgICAgIFwiS1o5eVVXbXhtbVJiV3B4Smt5WU5UNWt5NWFoSzIzLzY5T2srWGY5VWVjbXVSK2FJeXNFems3bFVpemdzUllaRy81ZWZ0dkZmNnVqb1wiICtcbiAgICAgICAgICAgIFwiV0NGdG1DZXlwbWRGbEtrUkVDa1NCNlRWZTgrY09iTlY2ZjloeXBNUXo5ekgwSWtGbXFsVWc3Z2V0YkRzb2JHOXZmMUdhY0Nhd2NIQlwiICtcbiAgICAgICAgICAgIFwiejB1ektpRytZcURVamxHMTUxOXFSNi9hczZlQ0FoazYwZWpNSkV2aUtJdWhFVzFMTFFMb1pnRjF0Nzd5eTZWbFdiWXJkVnRLTTBqN1wiICtcbiAgICAgICAgICAgIFwiQ3RMK2QwVGdSaEg0VW1tODVUUHVzOE1LbWN4N1dRR0VabHlxZ1BXWVNnVElRaEcyVm5QTEZTSXNWZDVhSnhhQmp1YmFmNHZBRGZyQVwiICtcbiAgICAgICAgICAgIFwiWGltamZxek45eFFxN21nV3hPR21nalM4OW1ta1J5RDB5cXI3aW9ESW9oMXA2cTRvclQ2MGdxemFmZnJZN2xKQmFZZEFkaUVncnlMSFwiICtcbiAgICAgICAgICAgIFwiZGFXQW9XbVhLYVFpVGNQaUttblhjaGtkcWZLcG5vWVNHVEZucElYYk5IeitOR1hESU85ZGhiSTFyeExpeUF0cGFZYkhMbW5aa3hwbVwiICtcbiAgICAgICAgICAgIFwiNXRUS1NsVDdxaXBZb1JydS95cnQrNjRxd3YxbEt3eWJrRmZXbkZlSk4zNm1LcDFxMjBvTkwvTTB2RHduMHE2d3pkTXM2YzZlUFh1eFwiICtcbiAgICAgICAgICAgIFwiUnBGdnFiMXY2SU9FREJ2QnljNGF0NnlsUXJuRTRhMjR3S1oxcEpHV2ZVTWQycVQ1ekpwbzI3SWJKWjNtNlk3Smt5ZmZKZ0tQaU1pRFwiICtcbiAgICAgICAgICAgIFwibHUzQ0JjaklkY295L1ZpeWNvakQzUC9NV0FtR202bFRwMzViYzlrNkJYWUZKclJvM3NibHRsZ2Y2aWZxN3dITHpqTFY0RzVMNVhKTFwiICtcbiAgICAgICAgICAgIFwiU3h4ZkNQT2ExZHc0ZmZyMDcybG8vSkU2a2JZZVZkR2NJdkl3MkJaTW16Wk5Oc3ZnYTVhOTRKZ0c2enhyU3pNTm9KNHhZcVU1SW0zNVwiICtcbiAgICAgICAgICAgIFwicVZPbmZpalM2TWc1SlNLdlJXRitDdkxBRnMyek5tN1NFSWNyaXkvREtBeVBSVTA3NTBqendDbVNOeS9Gc0lsQ2dKZlZmR2RMSEY4RFwiICtcbiAgICAgICAgICAgIFwiVG1PallJaEl5NWpUYk1zMmx0bXNDU0JQYlo4dmcrV3dwY0VDemhCbjNFMjNBWmZLOFl3WTA4cmt2MDdXNDZNaXpXbzRWWmtUWGtSZVwiICtcbiAgICAgICAgICAgIFwicXd5V1JRcXZXUzRWSUcvQUJJek5VSWFuMzJibnVrdWVoTWRFR3V1VFhId0lnSW5rVWIzaW5JMUp3TnE0dTJJaURzM2hqSWhSTkJ4c1wiICtcbiAgICAgICAgICAgIFwiMDd4bXJOQlkwQVJOQURhYVJyWlpkZy9NRTBjdDAvQ0hRWUxxSm9wSVc2WEY5ZGNURStXUmpoYnBsd2dycm44MndNSDBoRkp4RURkU1wiICtcbiAgICAgICAgICAgIFwia2pTT0ljOUd0WHMwZGk5WGlLd2dmem1PQUJncGZGOXZVQWlUZ0gzc3RKTkVIR2NmWVQ1UnBQNlBTdHVhMnN1ZjJNR01JNFZWdTVaTFwiICtcbiAgICAgICAgICAgIFwibXkyS0JYczRpSlE0NGhoZmpUdlo4b292VWtQbVJwYWN2NHhGUVBQZDFjTHVhN0VKeGlQZ0lIS3VpeU1PSThPb2JleGNOOXNtNkRnbVwiICtcbiAgICAgICAgICAgIFwiOWJzRE0ySDNZNHNXd0VHa3dSZEZISW1OYzV1R3lOdTBCM1c1UmVWNWtnZ0V3QTRNSTZKS1g4RkZTSW1paUVNOVRkYW1vNTNmTlZwY1wiICtcbiAgICAgICAgICAgIFwibGxhU1Axc2lBSFpnYUpFY0xrTFRWaFJ4Um0yVFNYdXp2aGk4S2JsVWdBQVlncVZGRVNGT1NvbGpJalQrcUZEajh3OXliYk9BMjVBRVwiICtcbiAgICAgICAgICAgIFwiRE1IU2tJeG9PQWtZS2FYRTJYai9aMnVmNlNxTHl2SWtGZ2dVc1p4dGtUVEFUV3JpWk1hdWxGVlVtcytpM2p4SkZBSmdDYVpSY1NYdlwiICtcbiAgICAgICAgICAgIFwiWW9tRERLTjdTK3A5WFVtQitXT0ZDRmhpQ2pkakNqTjJvNWRFaE14T2Y1czBIcy9YdmxKb292U255ZS9USXdDbVlHdklDVGRqaWxWS1wiICtcbiAgICAgICAgICAgIFwiWEdKZVdVRGZuR2hHQ2NmS0JWcGl2NnNkQ2FaZ2ExRlBlY1RKUWRvUTdpMkFyaFJzQ0x2bGxsdWM1NTkvM3RtK2ZidDdid0ZjMVpKWVwiICtcbiAgICAgICAgICAgIFwiWWp0R25OL0VORG1LMjdRaEdPdjByRnFQU2dvRzdHWExsamxkWFYxT1gxK2ZzM1BuVGtkRFRVbXE1RWR0YWpxclZxMXllbnQ3QXdsM1wiICtcbiAgICAgICAgICAgIFwiNzk3TmxrdmdYYTBlaXRpeWlacDBUQy9FRVJtK21CVDBoYTdVOWp0N04zVUwwckxDVTA4OXBZOXpYRFp1M0ZpUTY4aTZUVHBOWFZpM1wiICtcbiAgICAgICAgICAgIFwiYnQxNEFjVTdmUVFGeXE5WC84QVdqSk00S01iQjFaaVZ3bEhvUk5GWHVsaDlURXhUN1VqcVI5UDhzbWJOR21mejVzM09lZWNaL1FhT1wiICtcbiAgICAgICAgICAgIFwiU0hQdXZmZGU1Lzc3Ny9jWDRkNmp2ZlhTTmhwQTM4QTQxTER3aXdCWGJKVW5hcHlBZVlQeTZ4MDBWQloxSkhoNTVwbG5DanJIR05zK1wiICtcbiAgICAgICAgICAgIFwiVGY2RkRSczJCRE1WbjlCYUhSK1B6VnVyUGhjeFR1UkJiUWtjSmVIb1hXSUdEVWRIYXRXQnBIbzBuQlJXcjE0ZFNjQ3VYYnNLTTJmT1wiICtcbiAgICAgICAgICAgIFwiREJFZ0xTMXMyYklsTW84TWsxUkRiVkxiS28wcllweklnK29JSEpQRVlaeVlRYXY3Z1VvYmxsVitEU21SOHhUTUhEMTZ0SERUVFRjVlwiICtcbiAgICAgICAgICAgIFwiZW5wNjNEQnIxcXpDbmoxN0lrbGp2dFJYSGlJNnEzYW1MYWVJY1NJUEt0TjE3bnNMR0Rici9CYW1Ib01pc0ZiSmVrdE1FOHhSdlNmV1wiICtcbiAgICAgICAgICAgIFwiUFh2MzduWC8xTVhDaFFzREZUSFgzWEhISGE2bFNickhIMy9jV2JCZ1FTQU5EODgrKzZ5ellzVUtSOGZrUTNIMWVzRndMWXgvWnFpZlwiICtcbiAgICAgICAgICAgIFwidlRTVXlCV2N4b2xNQ3hETTFJYjVPbWtMODFiY0VDaERvM0RvMEtGSVRXTklUWm9QNjlWUGFkeXdpUWZGdzlXWWkrc0x1dmQ3VVlnTFwiICtcbiAgICAgICAgICAgIFwiaUlqN3U3NU9UME1EY2ZWOHdNcDg0WVVYbkJ0dXVNR3FHY2VPSFhQbXpKbmpIRDU4MkNwOUxSUEo2aDNWR1o1clZDYy9OWTRUTk82ZlwiICtcbiAgICAgICAgICAgIFwiaVdTVjVNUlgxbkJ5NHNRSmQ4amJ0Mitmc1cwTW5ReWpqVWdhalZmN3dOanFCNk1lY2Q0MXR2TmFJQnJUeEdhdWNzVHg0OGVkKys2N1wiICtcbiAgICAgICAgICAgIFwiejBraUQ5SWVlZVFSNS9YWFg2OXlhOG92WHVNNnhBVzJieUpLYzNsb1dESWlHcHkvOGlIZ0VXYzg5YU92d1pqR1YyNU5iMmZNbU9GcVwiICtcbiAgICAgICAgICAgIFwiM0xYWFhodGJMMDdsZSs2NXg3bm1HcWFReHBTaVM1RmZwaWFKeTROSFhGSkNMdzZMc3VFRTQyVHIxcTFPRW1sZW95R1BaWUFXNmQ2clwiICtcbiAgICAgICAgICAgIFwiaHJyaVhGQ0RQckpwbEVlYzBTWGVpQnFuNVlEejhNTVBSMXFVekdsdnZ2bG1DSVB1N203bjZhZWZkclFjQ01YVis0V0lRNXVTTEVxYVwiICtcbiAgICAgICAgICAgIFwiNkhLVmhqZ2p1YlhzT0E3anRXdlh1aFpsYWIyZUlZSURPc3BnV2JKa2lmUEVFMDg0T3NOZm1yWGV6emI3VXdFZWNwZFhBemdYMHJpOFwiICtcbiAgICAgICAgICAgIFwidkM4c2R6STNBSEhsT0puemJaMG0zZFpocGs3MFZlcHI2Rk9hdXZvcXNicllxUzRWdG1ac3ZQenNmbXVoWHByZGZiNzk5dHZyMmpld1wiICtcbiAgICAgICAgICAgIFwibGJIMUt4TVBpbmV0S3M4NE1mN0JaNTI0L2IzV0djcFhQNkYrWEZ4KzRkekluWGZlYWVYbGx4L1FlZWloaDV6MTY5ZjdpM0R2bHk1ZFwiICtcbiAgICAgICAgICAgIFwiV3ZFQnBGQ2hLVjdRTjUwN2Vka2lpOHVWdDAyRDV4OVQxQ015bEYrV1dyKzJIWWExN1JENzg5WlFwb3hmY0xSZ3g0NGRicW1zMzhvNVwiICtcbiAgICAgICAgICAgIFwiTEFSNXVMNU9uandaT0N4VStrRmszSFJqY1RybGV0Yjlob1J3NUI0bThxdlE1L1J5N1BoWFZBRWFMdnYxQzVOTG91SnErYzQ3bWxmSlwiICtcbiAgICAgICAgICAgIFwiR1JFVzQ5cHdkWll2WCs1cU1SL0VpeSsrV010dUJPckNNQkcyaXdJdnd3K245ZW8vdlBZVDE2M253SGtHRXZoRjgwaXZ0blp1OWI5clwiICtcbiAgICAgICAgICAgIFwiOW5zSVpKaXE1Q1BJQWdOaCsxdGhlNWVock9PS1AwWWEvOUFJbTRtaWVhNlBqazRrWWJGZWI5TEFWTmhpbUpoa2pDTS9DN3pFc29vVlwiICtcbiAgICAgICAgICAgIFwiZGZBUE9zSVF0QTVpVStjUnRnaUFLZGdhMHNOTkpIRk1mR01SY1lWb2ZuazFMaTUvWHg0Q2xwakNEUnk1NHRjNFhwaTJGREM3dDZpaVwiICtcbiAgICAgICAgICAgIFwic1FJK0xTYi90MXdFd0JKTUxmSUh1RWxObkNvNHFJWGlXeFlWNVVrc0VDaGllZEFpYVNKeGVLZU41OVUwSGo4MjBZd1VDK0F5VHdLR1wiICtcbiAgICAgICAgICAgIFwiWUdsUmNPaHZXSlpxSEdVTW1BcVNCZlNTMWgzdm1kTGw4Y2tJQ01QM3dUSTVsUnNiNGlTS09GUXlzT2NUVmJETTZFMjUxa1VoWS9jT1wiICtcbiAgICAgICAgICAgIFwiN0lSaDhIZGUwVm5oSWpCTWtpeUtPTXhPbzhtdlZmNnZ0V2gwVi9FVWxFczZCTUFPREMxeXdVVm9tUlpGSEdYeC81MkZFaFBoRi9uV1wiICtcbiAgICAgICAgICAgIFwiSHBCVlpFem56NVBmNjg4MkNUTTVsQiswd0FKczRTSWtjY1JocEh3Y1NsM3lRbjhGcmw5VzBmNlMxL21qQVFIdGRQOUZjOXZMaG1SRVwiICtcbiAgICAgICAgICAgIFwidzBIa2NRYS9yN0swSEhZQnJsUklTa09lSHUxei9VNWU5OURQWEluTUpZaUFzQm9VVmpmcTdkRmdUT2dKYlh0YmdkOFRoQ1JPNDBoSVwiICtcbiAgICAgICAgICAgIFwiQnVOY3B6Ukg1YVI5RWtkdExza0lnSkdHeWUxZ2xwelNqUVg3U05LSU5hSE5mdDJWQ2trRUsxcjdRWjJkT3pUWlh1MCs1UDlFSWlDTVwiICtcbiAgICAgICAgICAgIFwiRGdpalpaR1J3WmQ0cHQ1V2lCd21TV29pampRekZMcTVNVWlYNXJ2ZEdydXRmclJnS0d2Q1JRdWJqNFRORW5YTVpoUmo2NFl0bkZneFwiICtcbiAgICAgICAgICAgIFwiYXBKeVl0VzR1NjZ4cFh3YWNVTHJrdFh5ZE1lcXR5SC9oSTBHRTdCUkIyMUlBK3RJUzlJUGtPM3YzVGpuTU4yZk1lcGVqWHRYWDlZUlwiICtcbiAgICAgICAgICAgIFwiamVXTGRXL3pVVVFWTTZIZWliUVJIZmxZSjIzYmJka3hQRkt4UTZSWGhpMXhGQVFSaVVjYktGUnJ1NE15ZHpuLy9sV1Jaek1VazIxQ1wiICtcbiAgICAgICAgICAgIFwiaWtnYlZYaFE4OXBPeXc2aWFUWmFhZjRUdnI0SzJRODZYOEU3WU9TTEN0NXFjZmszbmMwZkVuSFhuNnZraVRDT0RQYnFVTkl2ZytqRVwiICtcbiAgICAgICAgICAgIFwiUGpHcVdmOU0xbGJqdk5vZ2o3OFFZOVFrRFEydkZjbWJkNjZSaDZhSnRFMERBd1BiUE9BTVY2eEloa2lqajlnckp5MXhGSXp4NFI3S1wiICtcbiAgICAgICAgICAgIFwiOUFxSnU0cTgvZnBoeFNtZE9KMS9ycEFIYVpvcWZxTGpmay9HNFJMeG5yOGhnMUpZUzFyaUtCaXJCNDB6em5kdTRxR2hBL0lXWUxBc1wiICtcbiAgICAgICAgICAgIFwiRkhubDFFY3hUU0VpYlZnTDdQWGEwWDR1UllNeCs3RUpVa201UUxLeGgwdXMzYVkyREJaMTZJQTZ0bGdiaHhQU05TWnJla0FqeTBxNVwiICtcbiAgICAgICAgICAgIFwiczNiWllGSk1neUh5M3hUcHg1SWE1NnF4bE9FYjhsNnFZUDdyWitONStRL2NmeUhuOUpmVnlmRzNUWHlIRzB0OWVrTmE5aDExdzhvaVwiICtcbiAgICAgICAgICAgIFwiTEhhWGo1OTVyU3dneXRXNFl0M3VCaC9FR1MzTllvWkJhZDlPZloydDBzQTUwajdiZkY1OURYWFZGSEJHYTdTZjYwTzhXdzF6ei9SYlwiICtcbiAgICAgICAgICAgIFwiTnBCZm5aWk5HblZVb25GZUcxbmZYYWFRZGdqczBaZksvNFExVndSbTBRNnZQVlcvNnFNcmlMVDlXcC9oRGJGeEdQdmJCR252S2xSMFwiICtcbiAgICAgICAgICAgIFwiVWk0cndDRHZzd3BwaGswbEY5c2RIUXNGeERxQmNMbU1GL2Rkby83RGNRTjliTy9vUTN0QVd2WktHZTFrZUh4Zm9lS09aa1VjZmFBc1wiICtcbiAgICAgICAgICAgIFwiZmhCaXRWUWdnMThFeUcwQ1pvMEl2TFRSQ0N3UzlwN2ExYXYyL2NiZjdoVDNiSXBpOXBjMXA1WFdreVZ4WHRuc0pNendIdEplTmY4dFwiICtcbiAgICAgICAgICAgIFwia1FiZXBUWGdWZnF5MGVTNmlkb3hxdmE4cFhac1N1RnJqR292SnIvN1k0Mm95SExlVllNNDJvSFdYYXhRQ2ZDejVYMVlLV1BtT29XdVwiICtcbiAgICAgICAgICAgIFwiV21raDJpV0Q0NFRDcThVVHhnZnBVSm5Da1BpQmd2RVlTTnJ5cTBVYzdXaFRtS2xndGRZalE1em95K2MvUVYrcUpjUmMrVUc3cFFGVFwiICtcbiAgICAgICAgICAgIFwic2xwT0ZIZWwrZitlaitsK3Z6U3JUK1gvTWE0dEtkNTd2a2NjRnBsTE5ZbWpzWlRQMEhraER4bEptN1Jpa2F3Ni9sUDBXU0t3VzllcFwiICtcbiAgICAgICAgICAgIFwidXJicnluK1d6aEpIbDVaV3ZlT0wxOFZkTkk3d3JQZER1bjZpNnpGZEQ4bXE3WmMyOXl0ZGxnRGo1V2RvekdRK1V6a2hxVFp4WG9Vc1wiICtcbiAgICAgICAgICAgIFwiRlJnNks5WStyOEFHdmFKbERJMlkvRldWV2hGSEo2anJBb1dMRkNxWis1Uzk0UVROL2xBQm4yUFZ0TXpmNjFvUzU5V0x0d1Nya3gzMVwiICtcbiAgICAgICAgICAgIFwiZXRUdnRTT0xLeVJ4cmgrcjBiaHJuVVdGWGhuMUJBNENtZnNnc05rMEVBMkRNT2F5bWhLbStseXBKM0ZlR3pBbVBBSXI5WjE2WlZiclwiICtcbiAgICAgICAgICAgIFwieW42a1I1ajFwbWMxR3RNSXhIbjlvaTBjalVBRFU3dk92RUtxY0dVNFBLbUE1eCtYVlUzbU1OV1RLSTFFbkwraGFCNkxlSWhrdzdiV1wiICtcbiAgICAgICAgICAgIFwiN1lRY2RxUlpPQk1ZR2h0S2FnMUlPWjJualdnZ0JMS3NJR1E5SjBJTUpqd0J3aHBHczlTV1NHa0c0cUlhN3UyK2MvVUNXa3J3U1BYbVwiICtcbiAgICAgICAgICAgIFwiUzI4dWdoenVDWnliOFFKckwrNXp5UkdvUGdML0IrTm9wL0Y5a3crbkFBQUFBRWxGVGtTdVFtQ0NcIjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJmb2N1c0VsZW1lbnRTZWxlY3RvclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzRWxlbWVudFNlbGVjdG9yO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmb2N1c0VsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgaWYgKCghdGhpcy5fZm9jdXNFbGVtZW50U2VsZWN0b3IgfHwgZm9jdXNFbGVtZW50U2VsZWN0b3IgIT09IHRoaXMuX2ZvY3VzRWxlbWVudFNlbGVjdG9yKSAmJiB0aGlzLmlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZvY3VzRWxlbWVudFNlbGVjdG9yID0gZm9jdXNFbGVtZW50U2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGb2N1c09uRWxlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9jdXNFbGVtZW50U2VsZWN0b3IgPSBmb2N1c0VsZW1lbnRTZWxlY3RvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpc0FjdGl2ZVwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRXYWxrdGhyb3VnaEVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzRWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzT25FbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdmYWlsZWQgdG8gZm9jdXMgb24gZWxlbWVudCBwcmlvciB0byB0aW1lb3V0OiAnICsgdGhpcy5mb2N1c0VsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzRWxlbWVudFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0Rm9jdXNPbkVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vbldhbGt0aHJvdWdoU2hvd0V2ZW50LmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplSGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUucmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNFbGVtZW50U2VsZWN0b3IgJiYgdGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNPbkVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLnNldFdhbGt0aHJvdWdoRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBob2xlRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuRE9NX1dBTEtUSFJPVUdIX0hPTEVfQ0xBU1MpO1xuICAgICAgICB0aGlzLndhbGt0aHJvdWdoSG9sZUVsZW1lbnRzID0gaG9sZUVsZW1lbnRzWzBdO1xuICAgICAgICB2YXIgdGV4dENsYXNzID0gKHRoaXMud2Fsa3Rocm91Z2hUeXBlID09PSBcInRpcFwiKSA/IHRoaXMuRE9NX1dBTEtUSFJPVUdIX1RJUF9URVhUX0NMQVNTIDogdGhpcy5ET01fV0FMS1RIUk9VR0hfVFJBTlNQQVJFTkNZX1RFWFRfQ0xBU1M7XG4gICAgICAgIHRoaXMud2Fsa3Rocm91Z2hUZXh0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGV4dENsYXNzKVswXTtcbiAgICAgICAgdmFyIGljb25DbGFzcyA9ICh0aGlzLndhbGt0aHJvdWdoVHlwZSA9PT0gXCJ0aXBcIikgPyB0aGlzLkRPTV9XQUxLVEhST1VHSF9USVBfSUNPTl9DTEFTUyA6IHRoaXMuRE9NX1dBTEtUSFJPVUdIX1RSQU5TUEFSRU5DWV9JQ09OX0NMQVNTO1xuICAgICAgICB0aGlzLndhbGt0aHJvdWdoSWNvbkVsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGljb25DbGFzcylbMF07XG4gICAgICAgIHRoaXMud2Fsa3Rocm91Z2hBcnJvd0VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuRE9NX1dBTEtUSFJPVUdIX0FSUk9XX0NMQVNTKVswXTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZUljb24gPSBfdGhpcy5jbG9zZV9pY29uO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgICB0aGlzLndhbGt0aHJvdWdoSWNvbiA9IHRoaXMuZ2V0SWNvbih0aGlzLndhbGt0aHJvdWdoSWNvbldhbnRlZCk7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2FwdGlvbiA9IHRoaXMuYnV0dG9uQ2FwdGlvbiB8fCB0aGlzLkJVVFRPTl9DQVBUSU9OX0RPTkU7XG4gICAgICAgIGlmICh0aGlzLmhhc0JhY2tkcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQmFja2Ryb3AgPSAodGhpcy53YWxrdGhyb3VnaFR5cGUgIT09IFwidGlwXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdDaGVja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhbnNsdWRlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkRPTV9UUkFOU0NMVURFKTtcbiAgICAgICAgaWYgKHRyYW5zbHVkZS5sZW5ndGggPiAwICYmIHRyYW5zbHVkZVswXS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1RyYW5zY2x1ZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUuZ2V0SWNvbiA9IGZ1bmN0aW9uIChpY29uKSB7XG4gICAgICAgIHZhciByZXR2YWwgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKGljb24pIHtcbiAgICAgICAgICAgIGNhc2UgKFwic2luZ2xlX3RhcFwiKTpcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0aGlzLnNpbmdsZV90YXA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChcImRvdWJsZV90YXBcIik6XG4gICAgICAgICAgICAgICAgcmV0dmFsID0gdGhpcy5kb3VibGVfdGFwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAoXCJzd2lwZV9kb3duXCIpOlxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRoaXMuc3dpcGVfZG93bjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgKFwic3dpcGVfbGVmdFwiKTpcbiAgICAgICAgICAgICAgICByZXR2YWwgPSB0aGlzLnN3aXBlX2xlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChcInN3aXBlX3JpZ2h0XCIpOlxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRoaXMuc3dpcGVfcmlnaHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChcInN3aXBlX3VwXCIpOlxuICAgICAgICAgICAgICAgIHJldHZhbCA9IHRoaXMuc3dpcGVfdXA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIChcImFycm93XCIpOlxuICAgICAgICAgICAgICAgIHJldHZhbCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldHZhbCA9PT0gbnVsbCAmJiBpY29uICYmIGljb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dmFsID0gaWNvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9EYXRhVVJMKHJldHZhbCkudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgICAgICAgIHJldHZhbCA9IGRhdGFVcmw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpY29uIDpcIiwgcmV0dmFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR2YWw7XG4gICAgfTtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUudG9EYXRhVVJMID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IHJldHVybiByZXNwb25zZS5ibG9iKCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZS5zZXRBcnJvd0FuZFRleHQgPSBmdW5jdGlvbiAocG9pbnRTdWJqZWN0TGVmdCwgcG9pbnRTdWJqZWN0VG9wLCBwb2ludFN1YmplY3RXaWR0aCwgcG9pbnRTdWJqZWN0SGVpZ2h0LCBwYWRkaW5nTGVmdCkge1xuICAgICAgICB2YXIgb2Zmc2V0Q29vcmRpbmF0ZXMgPSB0aGlzLmdldE9mZnNldENvb3JkaW5hdGVzKHRoaXMud2Fsa3Rocm91Z2hUZXh0RWxlbWVudCk7XG4gICAgICAgIHZhciBzdGFydExlZnQgPSBvZmZzZXRDb29yZGluYXRlcy5sZWZ0ICsgb2Zmc2V0Q29vcmRpbmF0ZXMud2lkdGggLyAyO1xuICAgICAgICB2YXIgc3RhcnRUb3AgPSBvZmZzZXRDb29yZGluYXRlcy50b3AgKyBvZmZzZXRDb29yZGluYXRlcy5oZWlnaHQgKyB0aGlzLlBBRERJTkdfQVJST1dfU1RBUlQ7XG4gICAgICAgIHZhciBlbmRMZWZ0ID0gMDtcbiAgICAgICAgdmFyIGlzTGluZSA9IGZhbHNlO1xuICAgICAgICBpZiAoTWF0aC5hYnMoc3RhcnRMZWZ0IC0gKHBvaW50U3ViamVjdExlZnQgKyBwb2ludFN1YmplY3RXaWR0aCAvIDIpKSA8IDEwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJIb2xlIGVsZW1lbnQgYW5kIHRleHQgYXJlIGlubGluZSBsaW5lIGFycm93IHdpbGwgYmUgdXNlZFwiKTtcbiAgICAgICAgICAgIGVuZExlZnQgPSBwb2ludFN1YmplY3RMZWZ0ICsgcG9pbnRTdWJqZWN0V2lkdGggLyAyO1xuICAgICAgICAgICAgaXNMaW5lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFydExlZnQgPiBwb2ludFN1YmplY3RMZWZ0KSB7XG4gICAgICAgICAgICBlbmRMZWZ0ID0gcG9pbnRTdWJqZWN0TGVmdCArIHBhZGRpbmdMZWZ0ICsgcG9pbnRTdWJqZWN0V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhcnRMZWZ0IDwgcG9pbnRTdWJqZWN0TGVmdCkge1xuICAgICAgICAgICAgZW5kTGVmdCA9IHBvaW50U3ViamVjdExlZnQgLSBwYWRkaW5nTGVmdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW5kVG9wO1xuICAgICAgICBpZiAoaXNMaW5lKSB7XG4gICAgICAgICAgICBlbmRUb3AgPSBwb2ludFN1YmplY3RUb3AgLSB0aGlzLlBBRERJTkdfQVJST1dfTUFSS0VSO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5kVG9wID0gcG9pbnRTdWJqZWN0VG9wICsgKHBvaW50U3ViamVjdEhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnJvd0xlZnQsIGFycm93UmlnaHQsIGFycm93VG9wLCBhcnJvd0JvdHRvbTtcbiAgICAgICAgYXJyb3dMZWZ0ID0gKHN0YXJ0TGVmdCA8IGVuZExlZnQpID8gc3RhcnRMZWZ0IDogZW5kTGVmdDtcbiAgICAgICAgYXJyb3dSaWdodCA9IChzdGFydExlZnQgPCBlbmRMZWZ0KSA/IGVuZExlZnQgOiBzdGFydExlZnQ7XG4gICAgICAgIGFycm93VG9wID0gKHN0YXJ0VG9wIDwgZW5kVG9wKSA/IHN0YXJ0VG9wIDogZW5kVG9wO1xuICAgICAgICBhcnJvd0JvdHRvbSA9IChzdGFydFRvcCA8IGVuZFRvcCkgPyBlbmRUb3AgOiBzdGFydFRvcDtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VDYXB0aW9uTG9jYXRpb24gPT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzSXRlbU9uVGV4dChhcnJvd0xlZnQsIGFycm93VG9wLCBhcnJvd1JpZ2h0LCBhcnJvd0JvdHRvbSkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VDYXB0aW9uTG9jYXRpb24gPSBcIkJPVFRPTVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcmNlQ2FwdGlvbkxvY2F0aW9uID09PSBcIkJPVFRPTVwiKSB7XG4gICAgICAgICAgICBpZiAoaXNMaW5lKSB7XG4gICAgICAgICAgICAgICAgZW5kVG9wID0gcG9pbnRTdWJqZWN0VG9wICsgcG9pbnRTdWJqZWN0SGVpZ2h0ICsgdGhpcy5QQURESU5HX0FSUk9XX01BUktFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0VG9wID0gb2Zmc2V0Q29vcmRpbmF0ZXMudG9wIC0gdGhpcy5QQURESU5HX0FSUk9XX1NUQVJUO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhcnJvd1N2Z0RvbTtcbiAgICAgICAgaWYgKGlzTGluZSkge1xuICAgICAgICAgICAgYXJyb3dTdmdEb20gPVxuICAgICAgICAgICAgICAgICc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkZWZzPicgK1xuICAgICAgICAgICAgICAgICAgICAnPG1hcmtlciBpZD1cImFycm93XCIgbWFya2VyV2lkdGg9XCIxM1wiIG1hcmtlckhlaWdodD1cIjEzXCIgcmVmeD1cIjJcIiByZWZ5PVwiNlwiIG9yaWVudD1cImF1dG9cIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNMiwxIEwyLDEwIEwxMCw2IEwyLDJcIiBzdHlsZT1cImZpbGw6I2ZmZjtcIiAvPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9tYXJrZXI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2RlZnM+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGluZSB4MT0nICsgZW5kTGVmdCArIFwiIHkxPVwiICsgc3RhcnRUb3AgKyBcIiB4Mj1cIiArIGVuZExlZnQgKyBcIiB5Mj1cIiArIGVuZFRvcCArIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlPVwic3Ryb2tlOiNmZmY7IHN0cm9rZS13aWR0aDogMnB4OyBmaWxsOiBub25lOycgK1xuICAgICAgICAgICAgICAgICAgICAnbWFya2VyLWVuZDogdXJsKCNhcnJvdyk7XCIvPicgK1xuICAgICAgICAgICAgICAgICAgICAnLz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJvd1N2Z0RvbSA9XG4gICAgICAgICAgICAgICAgJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRlZnM+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bWFya2VyIGlkPVwiYXJyb3dcIiBtYXJrZXJXaWR0aD1cIjEzXCIgbWFya2VySGVpZ2h0PVwiMTNcIiByZWZ4PVwiMlwiIHJlZnk9XCI2XCIgb3JpZW50PVwiYXV0b1wiPicgK1xuICAgICAgICAgICAgICAgICAgICAnPHBhdGggZD1cIk0yLDEgTDIsMTAgTDEwLDYgTDIsMlwiIHN0eWxlPVwiZmlsbDojZmZmO1wiIC8+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L21hcmtlcj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvZGVmcz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNJyArIHN0YXJ0TGVmdCArICcsJyArIHN0YXJ0VG9wICsgJyBRJyArIHN0YXJ0TGVmdCArICcsJyArIGVuZFRvcCArICcgJyArIGVuZExlZnQgKyAnLCcgKyBlbmRUb3AgKyAnXCInICtcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlPVwic3Ryb2tlOiNmZmY7IHN0cm9rZS13aWR0aDogMnB4OyBmaWxsOiBub25lOycgK1xuICAgICAgICAgICAgICAgICAgICAnbWFya2VyLWVuZDogdXJsKCNhcnJvdyk7XCIvPicgK1xuICAgICAgICAgICAgICAgICAgICAnLz4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFycm93RWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5ET01fV0FMS1RIUk9VR0hfQVJST1dfQ0xBU1MpO1xuICAgICAgICBpZiAoYXJyb3dFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGFycm93RWxlbWVudC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBhcnJvd0VsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBhcnJvd1N2Z0RvbSk7XG4gICAgfTtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUuaXNJdGVtT25UZXh0ID0gZnVuY3Rpb24gKGljb25MZWZ0LCBpY29uVG9wLCBpY29uUmlnaHQsIGljb25Cb3R0b20pIHtcbiAgICAgICAgdmFyIGhvbGVDb29yZGluYXRlcyA9IHRoaXMuZ2V0T2Zmc2V0Q29vcmRpbmF0ZXModGhpcy53YWxrdGhyb3VnaEhvbGVFbGVtZW50cyk7XG4gICAgICAgIHZhciBvZmZzZXRDb29yZGluYXRlcyA9IHRoaXMuZ2V0T2Zmc2V0Q29vcmRpbmF0ZXModGhpcy53YWxrdGhyb3VnaFRleHRFbGVtZW50KTtcbiAgICAgICAgdmFyIGhvbGVMZWZ0ID0gaG9sZUNvb3JkaW5hdGVzLmxlZnQ7XG4gICAgICAgIHZhciBob2xlUmlnaHQgPSBob2xlQ29vcmRpbmF0ZXMubGVmdCArIGhvbGVDb29yZGluYXRlcy53aWR0aDtcbiAgICAgICAgdmFyIGhvbGVUb3AgPSBob2xlQ29vcmRpbmF0ZXMudG9wO1xuICAgICAgICB2YXIgaG9sZUJvdHRvbSA9IGhvbGVDb29yZGluYXRlcy50b3AgKyBob2xlQ29vcmRpbmF0ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgdGV4dExlZnQgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC8gNDtcbiAgICAgICAgdmFyIHRleHRSaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLyA0ICogMztcbiAgICAgICAgdmFyIHRleHRUb3AgPSBvZmZzZXRDb29yZGluYXRlcy50b3A7XG4gICAgICAgIHZhciB0ZXh0Qm90dG9tID0gb2Zmc2V0Q29vcmRpbmF0ZXMudG9wICsgb2Zmc2V0Q29vcmRpbmF0ZXMuaGVpZ2h0O1xuICAgICAgICBpZiAoIShob2xlUmlnaHQgPCB0ZXh0TGVmdCB8fFxuICAgICAgICAgICAgaG9sZUxlZnQgPiB0ZXh0UmlnaHQgfHxcbiAgICAgICAgICAgIGhvbGVCb3R0b20gPCB0ZXh0VG9wIHx8XG4gICAgICAgICAgICBob2xlVG9wID4gdGV4dEJvdHRvbSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKGljb25SaWdodCA8IHRleHRMZWZ0IHx8XG4gICAgICAgICAgICBpY29uTGVmdCA+IHRleHRSaWdodCB8fFxuICAgICAgICAgICAgaWNvbkJvdHRvbSA8IHRleHRUb3AgfHxcbiAgICAgICAgICAgIGljb25Ub3AgPiB0ZXh0Qm90dG9tKTtcbiAgICB9O1xuICAgIDtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUuZ2V0T2Zmc2V0Q29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoZm9jdXNFbGVtZW50KSB7XG4gICAgICAgIHZhciB3aWR0aDtcbiAgICAgICAgdmFyIGhlaWdodDtcbiAgICAgICAgdmFyIGxlZnQ7XG4gICAgICAgIHZhciB0b3A7XG4gICAgICAgIHdpZHRoID0gZm9jdXNFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBoZWlnaHQgPSBmb2N1c0VsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBsZWZ0ID0gZm9jdXNFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIHRvcCA9IGZvY3VzRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICAgIHZhciBzYW1lQW5jZXN0b3JGb3JGb2N1c0VsZW1lbnRBbmRXYWxrdGhyb3VnaCA9IHRoaXMuZ2V0U2FtZUFuY2VzdG9yKGZvY3VzRWxlbWVudCk7XG4gICAgICAgIHdoaWxlIChzYW1lQW5jZXN0b3JGb3JGb2N1c0VsZW1lbnRBbmRXYWxrdGhyb3VnaCkge1xuICAgICAgICAgICAgbGVmdCA9IGxlZnQgLSBzYW1lQW5jZXN0b3JGb3JGb2N1c0VsZW1lbnRBbmRXYWxrdGhyb3VnaC5vZmZzZXRMZWZ0O1xuICAgICAgICAgICAgdG9wID0gdG9wIC0gc2FtZUFuY2VzdG9yRm9yRm9jdXNFbGVtZW50QW5kV2Fsa3Rocm91Z2gub2Zmc2V0VG9wO1xuICAgICAgICAgICAgc2FtZUFuY2VzdG9yRm9yRm9jdXNFbGVtZW50QW5kV2Fsa3Rocm91Z2ggPSBzYW1lQW5jZXN0b3JGb3JGb2N1c0VsZW1lbnRBbmRXYWxrdGhyb3VnaC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQsIGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGggfTtcbiAgICB9O1xuICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZS5nZXRTYW1lQW5jZXN0b3IgPSBmdW5jdGlvbiAoZm9jdXNFbGVtZW50KSB7XG4gICAgICAgIHZhciByZXR2YWwgPSBudWxsO1xuICAgICAgICB2YXIgd2Fsa3Rocm91Z2hFbGVtZW50UGFyZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICB2YXIgZm9jdXNFbGVtZW50UGFyZW50ID0gZm9jdXNFbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgdmFyIHdhbGt0aHJvdWdoQW5jZXN0b3JJdGVyID0gd2Fsa3Rocm91Z2hFbGVtZW50UGFyZW50O1xuICAgICAgICB2YXIgZm9jdXNFbGVtZW50QW5jZXN0b3JJdGVyID0gZm9jdXNFbGVtZW50UGFyZW50O1xuICAgICAgICB3aGlsZSAod2Fsa3Rocm91Z2hBbmNlc3Rvckl0ZXIgJiYgIXJldHZhbCkge1xuICAgICAgICAgICAgZm9jdXNFbGVtZW50QW5jZXN0b3JJdGVyID0gZm9jdXNFbGVtZW50UGFyZW50O1xuICAgICAgICAgICAgd2hpbGUgKGZvY3VzRWxlbWVudEFuY2VzdG9ySXRlciAmJiAhcmV0dmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzRWxlbWVudEFuY2VzdG9ySXRlciA9PT0gd2Fsa3Rocm91Z2hBbmNlc3Rvckl0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dmFsID0gd2Fsa3Rocm91Z2hBbmNlc3Rvckl0ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb2N1c0VsZW1lbnRBbmNlc3Rvckl0ZXIgPSBmb2N1c0VsZW1lbnRBbmNlc3Rvckl0ZXIub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhbGt0aHJvdWdoQW5jZXN0b3JJdGVyID0gd2Fsa3Rocm91Z2hBbmNlc3Rvckl0ZXIub2Zmc2V0UGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR2YWw7XG4gICAgfTtcbiAgICA7XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLnNldEljb25BbmRUZXh0ID0gZnVuY3Rpb24gKGljb25MZWZ0LCBpY29uVG9wLCBwYWRkaW5nTGVmdCwgcGFkZGluZ1RvcCkge1xuICAgICAgICB2YXIgb2Zmc2V0Q29vcmRpbmF0ZXMgPSB0aGlzLmdldE9mZnNldENvb3JkaW5hdGVzKHRoaXMud2Fsa3Rocm91Z2hJY29uRWxlbWVudCk7XG4gICAgICAgIHZhciBpY29uSGVpZ2h0ID0gb2Zmc2V0Q29vcmRpbmF0ZXMuaGVpZ2h0O1xuICAgICAgICB2YXIgaWNvbldpZHRoID0gb2Zmc2V0Q29vcmRpbmF0ZXMud2lkdGg7XG4gICAgICAgIHZhciBpY29uTGVmdFdpdGhQYWRkaW5nID0gaWNvbkxlZnQgKyBwYWRkaW5nTGVmdCAtIChpY29uV2lkdGggLyA0KTtcbiAgICAgICAgdmFyIGljb25Ub3BXaXRoUGFkZGluZyA9IGljb25Ub3AgKyBwYWRkaW5nVG9wIC0gKGljb25IZWlnaHQgLyA2KTtcbiAgICAgICAgdmFyIGljb25SaWdodCA9IGljb25MZWZ0V2l0aFBhZGRpbmcgKyBpY29uV2lkdGg7XG4gICAgICAgIHZhciBpY29uQm90dG9tID0gaWNvblRvcFdpdGhQYWRkaW5nICsgaWNvbkhlaWdodDtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VDYXB0aW9uTG9jYXRpb24gPT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzSXRlbU9uVGV4dChpY29uTGVmdFdpdGhQYWRkaW5nLCBpY29uVG9wV2l0aFBhZGRpbmcsIGljb25SaWdodCwgaWNvbkJvdHRvbSkpIHtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VDYXB0aW9uTG9jYXRpb24gPSBcIkJPVFRPTVwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpY29uTG9jYXRpb24gPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTtcIiArXG4gICAgICAgICAgICBcImxlZnQ6XCIgKyBpY29uTGVmdFdpdGhQYWRkaW5nICsgXCJweDtcIiArXG4gICAgICAgICAgICBcInRvcDpcIiArIGljb25Ub3BXaXRoUGFkZGluZyArIFwicHg7XCI7XG4gICAgICAgIHRoaXMud2Fsa3Rocm91Z2hJY29uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaWNvbkxvY2F0aW9uKTtcbiAgICB9O1xuICAgIDtcbiAgICBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUuc2V0RWxlbWVudExvY2F0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGZvY3VzRWxlbWVudCA9ICh0aGlzLmZvY3VzRWxlbWVudFNlbGVjdG9yKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5mb2N1c0VsZW1lbnRTZWxlY3RvcikgOiBudWxsO1xuICAgICAgICBpZiAoZm9jdXNFbGVtZW50ICYmIGZvY3VzRWxlbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoZm9jdXNFbGVtZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ011bHRpcGxlIGl0ZW1zIGZpdCBzZWxlY3RvciwgZGlzcGxheWluZyBmaXJzdCB2aXNpYmxlIGFzIGZvY3VzIGl0ZW0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGVsZW1lbnQgZm91bmQgd2l0aCBzZWxlY3RvcjogJyArIHRoaXMuZm9jdXNFbGVtZW50U2VsZWN0b3IpO1xuICAgICAgICAgICAgZm9jdXNFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaHRtbEVsZW1lbnQgPSBmb2N1c0VsZW1lbnRbMF07XG4gICAgICAgIGlmIChodG1sRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldENvb3JkaW5hdGVzID0gdGhpcy5nZXRPZmZzZXRDb29yZGluYXRlcyhodG1sRWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgd2lkdGhfMSA9IG9mZnNldENvb3JkaW5hdGVzLndpZHRoO1xuICAgICAgICAgICAgdmFyIGhlaWdodF8xID0gb2Zmc2V0Q29vcmRpbmF0ZXMuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGxlZnRfMSA9IG9mZnNldENvb3JkaW5hdGVzLmxlZnQ7XG4gICAgICAgICAgICB2YXIgdG9wXzEgPSBvZmZzZXRDb29yZGluYXRlcy50b3A7XG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzKGxlZnRfMSwgdG9wXzEsIHdpZHRoXzEsIGhlaWdodF8xKTtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nTGVmdF8xID0gcGFyc2VGbG9hdCh0aGlzLmljb25QYWRkaW5nTGVmdCk7XG4gICAgICAgICAgICB2YXIgcGFkZGluZ1RvcF8xID0gcGFyc2VGbG9hdCh0aGlzLmljb25QYWRkaW5nVG9wKTtcbiAgICAgICAgICAgIGlmICghcGFkZGluZ0xlZnRfMSkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0XzEgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwYWRkaW5nVG9wXzEpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXzEgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMud2Fsa3Rocm91Z2hJY29uV2FudGVkICYmIHRoaXMud2Fsa3Rocm91Z2hJY29uV2FudGVkICE9PSBcImFycm93XCIgJiYgdGhpcy53YWxrdGhyb3VnaFR5cGUgPT09IFwidHJhbnNwYXJlbmN5XCIpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0SWNvbkFuZFRleHQobGVmdF8xICsgd2lkdGhfMSAvIDIsIHRvcF8xICsgaGVpZ2h0XzEgLyAyLCBwYWRkaW5nTGVmdF8xLCBwYWRkaW5nVG9wXzEpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy53YWxrdGhyb3VnaEljb25XYW50ZWQgPT09IFwiYXJyb3dcIikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRBcnJvd0FuZFRleHQobGVmdF8xLCB0b3BfMSArIHBhZGRpbmdUb3BfMSwgd2lkdGhfMSwgaGVpZ2h0XzEsIHBhZGRpbmdMZWZ0XzEpO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy53YWxrdGhyb3VnaFR5cGUgPT09IFwidGlwXCIgJiZcbiAgICAgICAgICAgICAgICB0aGlzLndhbGt0aHJvdWdoSWNvbldhbnRlZCAmJiB0aGlzLndhbGt0aHJvdWdoSWNvbldhbnRlZC5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgKHRoaXMuaWNvblBhZGRpbmdMZWZ0IHx8IHRoaXMuaWNvblBhZGRpbmdUb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXBJY29uUGFkZGluZyh0aGlzLmljb25QYWRkaW5nTGVmdCwgdGhpcy5pY29uUGFkZGluZ1RvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c0VsZW1lbnRTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnVW5hYmxlIHRvIGZpbmQgZWxlbWVudCByZXF1ZXN0ZWQgdG8gYmUgZm9jdXNlZDogJyArIHRoaXMuZm9jdXNFbGVtZW50U2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2Fsa3Rocm91Z2hUeXBlID09PSBcInRpcFwiICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Fsa3Rocm91Z2hJY29uV2FudGVkICYmIHRoaXMud2Fsa3Rocm91Z2hJY29uV2FudGVkLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuaWNvblBhZGRpbmdMZWZ0IHx8IHRoaXMuaWNvblBhZGRpbmdUb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGlwSWNvblBhZGRpbmcodGhpcy5pY29uUGFkZGluZ0xlZnQsIHRoaXMuaWNvblBhZGRpbmdUb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLnNldEZvY3VzID0gZnVuY3Rpb24gKGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgaG9sZURpbWVuc2lvbnMgPSBcImxlZnQ6XCIgKyAobGVmdCAtIHRoaXMuUEFERElOR19IT0xFKSArIFwicHg7XCIgK1xuICAgICAgICAgICAgXCJ0b3A6XCIgKyAodG9wIC0gdGhpcy5QQURESU5HX0hPTEUpICsgXCJweDtcIiArXG4gICAgICAgICAgICBcIndpZHRoOlwiICsgKHdpZHRoICsgKDIgKiB0aGlzLlBBRERJTkdfSE9MRSkpICsgXCJweDtcIiArXG4gICAgICAgICAgICBcImhlaWdodDpcIiArIChoZWlnaHQgKyAoMiAqIHRoaXMuUEFERElOR19IT0xFKSkgKyBcInB4O1wiO1xuICAgICAgICBpZiAodGhpcy53YWxrdGhyb3VnaEhvbGVFbGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy53YWxrdGhyb3VnaEhvbGVFbGVtZW50cy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaG9sZURpbWVuc2lvbnMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICA7XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLnNldEZvY3VzT25FbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldEVsZW1lbnRMb2NhdGlvbnMoKTtcbiAgICB9O1xuICAgIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZS5vbldhbGt0aHJvdWdoQ29udGVudENsaWNrZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub25XYWxrdGhyb3VnaENvbnRlbnRDbGlja2VkRXZlbnQuZW1pdCgpO1xuICAgIH07XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLnNldFRpcEljb25QYWRkaW5nID0gZnVuY3Rpb24gKGljb25QYWRkaW5nTGVmdCwgaWNvblBhZGRpbmdUb3ApIHtcbiAgICAgICAgdmFyIGljb25Mb2NhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChpY29uUGFkZGluZ1RvcCkge1xuICAgICAgICAgICAgaWNvbkxvY2F0aW9uICs9IFwibWFyZ2luLXRvcDpcIiArIGljb25QYWRkaW5nVG9wICsgXCJweDtcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWNvblBhZGRpbmdMZWZ0KSB7XG4gICAgICAgICAgICBpY29uTG9jYXRpb24gKz0gXCJyaWdodDpcIiArIGljb25QYWRkaW5nTGVmdCArIFwiJTtcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndhbGt0aHJvdWdoSWNvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIGljb25Mb2NhdGlvbik7XG4gICAgfTtcbiAgICA7XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLm9uQ2xvc2VDbGlja2VkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICgoIXRoaXMudXNlQnV0dG9uKSB8fFxuICAgICAgICAgICAgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lLmluZGV4T2YodGhpcy5ET01fV0FMS1RIUk9VR0hfRE9ORV9CVVRUT05fQ0xBU1MpID4gLTEpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlV2Fsa3Rocm91Z2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLmNsb3NlV2Fsa3Rocm91Z2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub25XYWxrdGhyb3VnaEhpZGVFdmVudC5lbWl0KCk7XG4gICAgICAgIHZhciBhcnJvd0VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuRE9NX1dBTEtUSFJPVUdIX0FSUk9XX0NMQVNTKTtcbiAgICAgICAgaWYgKGFycm93RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhcnJvd0VsZW1lbnQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9O1xuICAgIDtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJ3YWxrdGhyb3VnaC10eXBlXCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ3YWxrdGhyb3VnaFR5cGVcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJidXR0b24tY2FwdGlvblwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUsIFwiYnV0dG9uQ2FwdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dChcInVzZS1idXR0b25cIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJ1c2VCdXR0b25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJtYWluLWNhcHRpb25cIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcIm1haW5DYXB0aW9uXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KFwiaWNvblwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUsIFwid2Fsa3Rocm91Z2hJY29uV2FudGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KFwid2Fsa3Rocm91Z2gtaGVyby1pbWFnZVwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUsIFwid2Fsa3Rocm91Z2hIZXJvSW1hZ2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJoYXMtZ2xvd1wiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcImhhc0dsb3dcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJmb3JjZS1jYXB0aW9uLWxvY2F0aW9uXCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJmb3JjZUNhcHRpb25Mb2NhdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dChcImhhcy1iYWNrZHJvcFwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIEJvb2xlYW4pXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcImhhc0JhY2tkcm9wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KFwiaXMtcm91bmRcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJpc1JvdW5kXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KFwiaWNvbi1wYWRkaW5nLWxlZnRcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcImljb25QYWRkaW5nTGVmdFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dChcImljb24tcGFkZGluZy10b3BcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcImljb25QYWRkaW5nVG9wXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIElucHV0KFwidGlwLWljb24tbG9jYXRpb25cIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBTdHJpbmcpXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcInRpcEljb25Mb2NhdGlvblwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBJbnB1dChcInRpcC1jb2xvclwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIFN0cmluZylcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUsIFwidGlwQ29sb3JcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJmb2N1cy1lbGVtZW50LXNlbGVjdG9yXCIpLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgU3RyaW5nKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtTdHJpbmddKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJmb2N1c0VsZW1lbnRTZWxlY3RvclwiLCBudWxsKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgSW5wdXQoXCJpcy1hY3RpdmVcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBCb29sZWFuKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtCb29sZWFuXSlcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUsIFwiaXNBY3RpdmVcIiwgbnVsbCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIE91dHB1dChcIm9uLXdhbGt0aHJvdWdoLXNob3dcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcIm9uV2Fsa3Rocm91Z2hTaG93RXZlbnRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgT3V0cHV0KFwib24td2Fsa3Rocm91Z2gtaGlkZVwiKSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudC5wcm90b3R5cGUsIFwib25XYWxrdGhyb3VnaEhpZGVFdmVudFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBPdXRwdXQoXCJvbi13YWxrdGhyb3VnaC1jb250ZW50LWNsaWNrZWRcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBPYmplY3QpXG4gICAgXSwgV2Fsa3Rocm91Z2hDb21wb25lbnQucHJvdG90eXBlLCBcIm9uV2Fsa3Rocm91Z2hDb250ZW50Q2xpY2tlZEV2ZW50XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW09iamVjdF0pLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnJldHVybnR5cGVcIiwgdm9pZCAwKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJvblJlc2l6ZVwiLCBudWxsKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgVmlld0NoaWxkKFwid2Fsa3Rocm91Z2hjb21wb25lbnRcIiksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246dHlwZVwiLCBFbGVtZW50UmVmKVxuICAgIF0sIFdhbGt0aHJvdWdoQ29tcG9uZW50LnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHZvaWQgMCk7XG4gICAgV2Fsa3Rocm91Z2hDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgQ29tcG9uZW50KHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnd2Fsa3Rocm91Z2gnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiXFxuICA8ZGl2ICN3YWxrdGhyb3VnaGNvbXBvbmVudCBjbGFzcz1cXFwie3tET01fV0FMS1RIUk9VR0hfQ0xBU1N9fVxcXCIgW2hpZGRlbl09XFxcIiFpc1Zpc2libGVcXFwiIFtuZ0NsYXNzXT1cXFwieyd3YWxrdGhyb3VnaC1hY3RpdmUnOiBpc1Zpc2libGV9XFxcIiAoY2xpY2spPVxcXCJvbkNsb3NlQ2xpY2tlZCgkZXZlbnQpXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcIndhbGt0aHJvdWdoLWNvbnRhaW5lciB3YWxrdGhyb3VnaC1jb250YWluZXItdHJhbnNwYXJlbmN5XFxcIiBbaGlkZGVuXT1cXFwid2Fsa3Rocm91Z2hUeXBlIT09J3RyYW5zcGFyZW5jeSdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ3YWxrdGhyb3VnaC1pbm5lclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwie3tET01fVFJBTlNDTFVERX19XFxcIj5cXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cXFwiaW1nXFxcIj48L25nLWNvbnRlbnQ+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtbm9uLXRyYW5zY2x1ZGUtdGVtcGxhdGVcXFwiIFtoaWRkZW5dPVxcXCJoYXNUcmFuc2NsdWRlXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndhbGt0aHJvdWdoLXRleHQtY29udGFpbmVyXFxcIiBbbmdDbGFzc109XFxcInsnd2Fsa3Rocm91Z2gtdG9wJzogKCFmb3JjZUNhcHRpb25Mb2NhdGlvbiB8fCBmb3JjZUNhcHRpb25Mb2NhdGlvbj09PSdUT1AnKSwgJ3dhbGt0aHJvdWdoLWJvdHRvbSc6IGZvcmNlQ2FwdGlvbkxvY2F0aW9uPT09J0JPVFRPTSd9XFxcIj5cXG4gICAgICAgICAgPHByZSBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtZWxlbWVudCB3YWxrdGhyb3VnaC10ZXh0XFxcIiBbaW5uZXJIVE1MXT1cXFwibWFpbkNhcHRpb25cXFwiPjwvcHJlPlxcbiAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJ3YWxrdGhyb3VnaEhlcm9JbWFnZVxcXCIgY2xhc3M9XFxcIndhbGt0aHJvdWdoLWVsZW1lbnQgd2Fsa3Rocm91Z2gtaGVyby1pbWFnZVxcXCIgc3JjPVxcXCJ7e3dhbGt0aHJvdWdoSGVyb0ltYWdlfX1cXFwiIChjbGljayk9XFxcIm9uV2Fsa3Rocm91Z2hDb250ZW50Q2xpY2tlZCgpXFxcIj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtZWxlbWVudCB3YWxrdGhyb3VnaC1pY29uXFxcIiBbaGlkZGVuXT1cXFwid2Fsa3Rocm91Z2hJY29uV2FudGVkICYmIHdhbGt0aHJvdWdoSWNvbldhbnRlZD09PSdhcnJvdydcXFwiIHNyYz1cXFwie3t3YWxrdGhyb3VnaEljb259fVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3YWxrdGhyb3VnaC1lbGVtZW50IHdhbGt0aHJvdWdoLWFycm93XFxcIiBbaGlkZGVuXT1cXFwid2Fsa3Rocm91Z2hJY29uV2FudGVkIT09J2Fycm93J1xcXCI+PC9kaXY+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ3YWxrdGhyb3VnaC1lbGVtZW50IHdhbGt0aHJvdWdoLWJ1dHRvbi1wb3NpdGl2ZSB3YWxrdGhyb3VnaC1kb25lLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiAqbmdJZj1cXFwidXNlQnV0dG9uXFxcIiAoY2xpY2spPVxcXCJvbkNsb3NlQ2xpY2tlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAge3tidXR0b25DYXB0aW9ufX1cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtY29udGFpbmVyIHdhbGt0aHJvdWdoLWNvbnRhaW5lci10aXBcXFwiIFtoaWRkZW5dPVxcXCJ3YWxrdGhyb3VnaFR5cGUhPT0ndGlwJ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIndhbGt0aHJvdWdoLWlubmVyXFxcIiBbbmdDbGFzc109XFxcInsnd2Fsa3Rocm91Z2gtdG9wJzogKCghZm9yY2VDYXB0aW9uTG9jYXRpb24gJiYgIXRpcExvY2F0aW9uKSB8fCBmb3JjZUNhcHRpb25Mb2NhdGlvbj09PSdUT1AnIHx8IHRpcExvY2F0aW9uID09J1RPUCcpLCAnd2Fsa3Rocm91Z2gtYm90dG9tJzogKGZvcmNlQ2FwdGlvbkxvY2F0aW9uPT0nQk9UVE9NJyB8fCB0aXBMb2NhdGlvbiA9PSdCT1RUT00nKX1cXFwiPlxcbiAgICAgIDxpbWcgY2xhc3M9XFxcIndhbGt0aHJvdWdoLWVsZW1lbnQgd2Fsa3Rocm91Z2gtdGlwLWljb24tdGV4dC1ib3hcXFwiIFtuZ0NsYXNzXT1cXFwieyd3YWxrdGhyb3VnaC10aXAtaWNvbi1pbWFnZS1mcm9udCc6IHRpcEljb25Mb2NhdGlvbj09PSdGUk9OVCcsICd3YWxrdGhyb3VnaC10aXAtaWNvbi1pbWFnZS1iYWNrJzogdGlwSWNvbkxvY2F0aW9uPT0nQkFDSyd9XFxcIlxcbiAgICAgICAgW2hpZGRlbl09XFxcIndhbGt0aHJvdWdoSWNvbldhbnRlZCAmJiB3YWxrdGhyb3VnaEljb25XYW50ZWQ9PT0nYXJyb3cnXFxcIiBzcmM9XFxcInt7d2Fsa3Rocm91Z2hJY29ufX1cXFwiIGFsdD1cXFwiaWNvblxcXCI+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtZG9uZS1idXR0b24gd2Fsa3Rocm91Z2gtdGlwLWRvbmUtYnV0dG9uLXRleHQtYm94XFxcIiBbbmdDbGFzc109XFxcInsnd2Fsa3Rocm91Z2gtdGlwLWRvbmUtYnV0dG9uLW5vLWljb24nOiAhaWNvbn1cXFwiXFxuICAgICAgICB0eXBlPVxcXCJidXR0b25cXFwiICpuZ0lmPVxcXCJ1c2VCdXR0b25cXFwiIChjbGljayk9XFxcIm9uQ2xvc2VDbGlja2VkKCRldmVudClcXFwiPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtdGlwLWJ1dHRvbi1pbWFnZS10ZXh0LWJveFxcXCIgc3JjPVxcXCJ7e2Nsb3NlSWNvbn19XFxcIiBhbHQ9XFxcInhcXFwiPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndhbGt0aHJvdWdoLWVsZW1lbnQgd2Fsa3Rocm91Z2gtdGlwLXRleHQtYm94XFxcIiAoY2xpY2spPVxcXCJvbldhbGt0aHJvdWdoQ29udGVudENsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3dhbGt0aHJvdWdoLXRpcC10ZXh0LWJveC1jb2xvci1ibGFjayc6IHRpcENvbG9yPT0nQkxBQ0snLCAnd2Fsa3Rocm91Z2gtdGlwLXRleHQtYm94LWNvbG9yLXdoaXRlJzogdGlwQ29sb3I9PSdXSElURSd9XFxcIj5cXG4gICAgICAgIDxwcmUgW2lubmVySFRNTF09XFxcIm1haW5DYXB0aW9uXFxcIj48L3ByZT5cXG4gICAgICAgIDxpbWcgKm5nSWY9XFxcIndhbGt0aHJvdWdoSGVyb0ltYWdlXFxcIiBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtZWxlbWVudCB3YWxrdGhyb3VnaC1oZXJvLWltYWdlXFxcIiBzcmM9XFxcInt7d2Fsa3Rocm91Z2hIZXJvSW1hZ2V9fVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ7e0RPTV9UUkFOU0NMVURFfX1cXFwiPlxcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XFxcImltZ1xcXCI+PC9uZy1jb250ZW50PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IFtoaWRkZW5dPVxcXCIhaGFzQmFja2Ryb3BcXFwiIGNsYXNzPVxcXCJ3YWxrdGhyb3VnaC1ob2xlXFxcIiBbbmdDbGFzc109XFxcInsnd2Fsa3Rocm91Z2gtaG9sZS1yb3VuZCc6IGlzUm91bmR9XFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBbaGlkZGVuXT1cXFwiIShoYXNHbG93ICYmIChmb2N1c0VsZW1lbnRTZWxlY3RvcikpXFxcIiBjbGFzcz1cXFwid2Fsa3Rocm91Z2gtaG9sZSB3YWxrdGhyb3VnaC1ob2xlLWdsb3dcXFwiIFtuZ0NsYXNzXT1cXFwieyd3YWxrdGhyb3VnaC1ob2xlLXJvdW5kJzogaXNSb3VuZH1cXFwiPlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCIsXG4gICAgICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgICAgICAgICBcIlxcbiAgLndhbGt0aHJvdWdoLWhvbGUtZ2xvdyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkY2NiAhaW1wb3J0YW50O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzNnB4ICNGRkZGNjYgIWltcG9ydGFudDtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC1iYWNrZ3JvdW5kIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDBzIGVhc2Utb3V0IC4ycywgb3BhY2l0eSAuMnMgZWFzZS1vdXQ7XFxuICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMHMgZWFzZS1vdXQgLjJzLCBvcGFjaXR5IC4ycyBlYXNlLW91dDtcXG4gICAgICAtby10cmFuc2l0aW9uOiBoZWlnaHQgMHMgZWFzZS1vdXQgLjJzLCBvcGFjaXR5IC4ycyBlYXNlLW91dDtcXG4gICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMHMgZWFzZS1vdXQgLjJzLCBvcGFjaXR5IC4ycyBlYXNlLW91dDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHotaW5kZXg6IDEwMDA7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtaG9sZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMTk5N3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDE5OTdweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTk5N3B4IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtZWxlbWVudC53YWxrdGhyb3VnaC10ZXh0IHtcXG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtZWxlbWVudC53YWxrdGhyb3VnaC1kb25lLWJ1dHRvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogMzBweDtcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHJpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLWJ1dHRvbi1wb3NpdGl2ZSB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMGM2M2VlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjU7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtYnV0dG9uLXBvc2l0aXZlOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtYnV0dG9uLXBvc2l0aXZlLmFjdGl2ZSB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMGM2M2VlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzYzZWU7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC1lbGVtZW50LndhbGt0aHJvdWdoLWljb24ge1xcbiAgICAgIGhlaWdodDogMjAwcHg7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtZWxlbWVudC53YWxrdGhyb3VnaC1hcnJvdyB7XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC1lbGVtZW50IHtcXG4gICAgICB6LWluZGV4OiAxMDAxO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtYmFja2dyb3VuZC53YWxrdGhyb3VnaC1hY3RpdmUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1vdXQ7XFxuICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLW91dDtcXG4gICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLW91dDtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLW91dDtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLXRyYW5zY2x1ZGUge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC1ob2xlLXJvdW5kIHtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC10aXAtdGV4dC1ib3gge1xcbiAgICAgIC8qdG9wOiAxMjhweDsqL1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcXG4gICAgICBwYWRkaW5nOiAxNHB4O1xcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbCAhaW1wb3J0YW50O1xcblxcbiAgICAgIC8qbWFyZ2luLXRvcDogMDsqL1xcbiAgICAgIC8qbWFyZ2luLWJvdHRvbTogMDsqL1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLWNvbnRhaW5lciB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC1pbm5lciB7XFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtY29udGFpbmVyLXRyYW5zcGFyZW5jeSA+IC53YWxrdGhyb3VnaC1pbm5lciB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLXRleHQtY29udGFpbmVyIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtY29udGFpbmVyLXRpcCAud2Fsa3Rocm91Z2gtdG9wLCAud2Fsa3Rocm91Z2gtY29udGFpbmVyLXRyYW5zcGFyZW5jeSAud2Fsa3Rocm91Z2gtdG9wIHtcXG4gICAgICB0b3A6IDE1cHg7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtY29udGFpbmVyLXRpcCAud2Fsa3Rocm91Z2gtYm90dG9tIHtcXG4gICAgICBib3R0b206IDA7XFxuICB9XFxuXFxuICAvKiB0YWtlICdkb25lJyBidXR0b24gaW50byBjb25zaWRlcmF0aW9uICovXFxuICAud2Fsa3Rocm91Z2gtY29udGFpbmVyLXRyYW5zcGFyZW5jeSAud2Fsa3Rocm91Z2gtYm90dG9tIHtcXG4gICAgICBib3R0b206IDcwcHg7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtdGlwLWljb24taW1hZ2UtZnJvbnQge1xcbiAgICAgIHotaW5kZXg6IDEwMDI7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtdGlwLWljb24taW1hZ2UtYmFjayB7XFxuICAgICAgei1pbmRleDogOTk5O1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLXRpcC1pY29uLXRleHQtYm94IHtcXG4gICAgICBoZWlnaHQ6IDE0MnB4O1xcblxcbiAgICAgIC8qcmlnaHQ6IDklOyovXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IC0zMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogLTI1MHB4O1xcblxcbiAgICAgIC8qYm90dG9tOiA3MHB4OyovXFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtdGlwLWRvbmUtYnV0dG9uLXRleHQtYm94IHtcXG4gICAgICAvKnRvcDogMTA5cHg7Ki9cXG4gICAgICAvKmJvdHRvbTogNTlweDsqL1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAxMDAyO1xcblxcbiAgICAgIC8qcmlnaHQ6IC03cHg7Ki9cXG4gICAgICBtYXJnaW4tdG9wOiAxMDdweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLXRpcC1kb25lLWJ1dHRvbi1uby1pY29uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAtMTNweCAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLXRpcC1idXR0b24taW1hZ2UtdGV4dC1ib3gge1xcbiAgICAgIHdpZHRoOiA0MnB4O1xcbiAgICAgIGhlaWdodDogNDJweDtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC10aXAtdGV4dC1ib3gtY29sb3ItYmxhY2sge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcblxcbiAgLndhbGt0aHJvdWdoLXRpcC10ZXh0LWJveC1jb2xvci13aGl0ZSB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB9XFxuXFxuICAud2Fsa3Rocm91Z2gtaGVyby1pbWFnZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gIH1cXG5cXG4gIC53YWxrdGhyb3VnaC10cmFuc2NsdWRlIGltZyB7XFxuICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIHByZSB7XFxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgfVxcbiAgXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSksXG4gICAgICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbiAgICBdLCBXYWxrdGhyb3VnaENvbXBvbmVudCk7XG4gICAgcmV0dXJuIFdhbGt0aHJvdWdoQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydCB7IFdhbGt0aHJvdWdoQ29tcG9uZW50IH07XG4iXSwiZmlsZSI6ImNvbXBvbmVudHMvd2Fsa3Rocm91Z2guanMifQ==
