import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { createBlogEntry } from "../Middleware/blog-entry-middleware";

@Component({
  selector : "app-newentrypage",
  standalone : true,
  templateUrl : "newentrypage.component.html",
  styleUrls : ["newentrypage.component.css"]
})

export class NewEntryPageComponent {
  title : string = "";
  content : string = "";
  datetime : Date = new Date();
  constructor(private router: Router) {}

  updateTitle(e : Event) {
    var title = (e.target as HTMLInputElement).value;
    console.log(title);
    this.title = title;
  }

  updateContent(e : Event) {
    var content = (e.target as HTMLTextAreaElement).value;
    console.log(content);
    this.content = content;
  }

  submitHandler() {
    const newBlogEntry = createBlogEntry(this.title, this.content, new Date())
    this.router.navigate(['/home']);
  }
}
