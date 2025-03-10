import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { createBlogEntry, getAllBlogEntries } from "../Middleware/blog-entry-middleware"
import { RouterModule } from "@angular/router";

@Component({
  selector : "app-mainpage",
  imports : [CommonModule, RouterModule],
  standalone : true,
  templateUrl : "mainpage.component.html",
  styleUrls : ["mainpage.component.css"]
})

export class MainPageComponent {
  blogEntries : any = [];

  async ngOnInit() {
    this.blogEntries = await getAllBlogEntries();
    console.log(this.blogEntries)
  }
}
