import { fromEvent, merge, Subscription, of } from "rxjs";
import { map, distinctUntilChanged, debounceTime } from "rxjs/operators";
import { ClassManage } from "@voyo/core/dest/utils";

export type MediaSize =
  | "large"
  | "strong"
  | "medium"
  | "small"
  | "mini"
  | "mobile";

export const rules: Record<MediaSize, number> = {
  large: 1900,
  strong: 1600,
  medium: 1150,
  small: 900,
  mini: 800,
  mobile: 0
};

export class MediaHtml {
  mediaSizeSubscription: Subscription;

  constructor() {
    let windowWidth: number;
    const rulesValue: number[] = Object.values(rules);
    const rulesKey: Array<MediaSize> = Object.keys(rules) as MediaSize[];
    const html = document.documentElement;
    const htmlClassManager = new ClassManage(html);
    this.mediaSizeSubscription = merge(
      of(window.innerWidth),
      fromEvent(window, "resize").pipe(debounceTime(50))
    )
      .pipe(
        map(e => {
          windowWidth = window.innerWidth;
          let index = 0;
          for (const size of rulesValue) {
            if (windowWidth >= size) {
              break;
            }
            index++;
          }
          return rulesKey[index];
        }),
        distinctUntilChanged()
      )
      .subscribe((mediaSize: MediaSize) => {
        htmlClassManager.replaceClass("mediaSize", "yo-media-" + mediaSize);
      });
  }
}

export const mediaHtml = new MediaHtml();
