import { Component, ViewChildren, ElementRef, ChangeDetectorRef, QueryList, SimpleChanges, Inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { createBlogEntry, getAllBlogEntries } from "../Middleware/blog-entry-middleware";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-mainpage",
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: "mainpage.component.html",
  styleUrls: ["mainpage.component.css"],
})

export class MainPageComponent {
  blogEntries: any = [];
  intersectionCounter : number = 0;
  isBrowser: boolean;
  @ViewChildren('blogEntry') entryRefs!: QueryList<ElementRef>;
  entryVisibility : any = [];
  observer! : IntersectionObserver;
  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngOnInit() {
    this.blogEntries = await getAllBlogEntries();
    console.log("Fetched blog entries:", this.blogEntries);

    this.cdr.detectChanges();

    console.log(this.isBrowser)
  }

  async ngAfterViewChecked() {
    // Initialize visibility state only once
    if (this.entryVisibility.length === 0 && this.entryRefs.length > 0) {
      this.entryRefs.toArray().forEach(() => {
        this.entryVisibility.push({ visibility: false });
      });
      console.log(this.entryVisibility)
    }

    // Set up the IntersectionObserver only once
    if (this.isBrowser && !this.observer && this.entryRefs.length > 0) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let index = this.entryRefs.toArray().findIndex(
            (singleEntry) => entry.target.isEqualNode(singleEntry.nativeElement)
          );

          if (index !== -1) {
            this.entryVisibility[index].visibility = entry.isIntersecting;
            console.log(index, this.entryVisibility[index].visibility);
          }
        });
      }, { threshold: 0.25 });
    }

    // Start observing the elements
    this.entryRefs.toArray().forEach((entryRef) => {
      this.observer.observe(entryRef.nativeElement);
    });

    console.log(this.observer); // Check the observer
  }

}
