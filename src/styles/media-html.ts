import { fromEvent, merge, Subscription, of, Subject, Observable } from "rxjs";
import { map, distinctUntilChanged, debounceTime } from "rxjs/operators";
import { ClassManage } from "@voyo/core/dest/utils";
import { ioc } from "@voyo/core";
import { IOCProvider } from "@voyo/core/dest";

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

@IOCProvider({
  name: "yo-media"
})
export class MediaHtml {
  mediaSizeSubscription: Subscription;
  isMobileValue: boolean;
  isMobile: Subject<boolean> = new Subject<boolean>();

  isMobileImmediate: Observable<boolean> = merge(
    of(null).pipe(map(i => this.isMobileValue)),
    this.isMobile
  );

  handleIsMobile(mediaSize: MediaSize) {
    const isMobileValue = mediaSize === "mobile";
    if (isMobileValue !== this.isMobileValue) {
      this.isMobile.next((this.isMobileValue = isMobileValue));
    }
  }
  constructor() {
    let windowWidth: number;
    const rulesValue: number[] = Object.values(rules);
    const rulesKey: Array<MediaSize> = Object.keys(rules) as MediaSize[];
    const html = document.documentElement;
    const htmlClassManager = new ClassManage(html);
    this.mediaSizeSubscription = merge(
      of(1).pipe(map(() => window.innerWidth)),
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
        this.handleIsMobile(mediaSize);
        htmlClassManager.replaceClass("mediaSize", "yo-media-" + mediaSize);
      });
  }
}

const mediaHtml: MediaHtml = ioc.getService("yo-media");

export { mediaHtml };
