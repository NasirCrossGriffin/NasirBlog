import { Component, isDevMode } from "@angular/core"
import { Router } from "@angular/router"
import { createBlogEntry } from "../Middleware/blog-entry-middleware";
import { environment } from '../../environments/environment';



@Component({
  selector : "app-login",
  standalone : true,
  templateUrl : "login.component.html",
  styleUrls : ["login.component.css"]
})

export class LoginComponent {
  username : string = "";
  password : string = "";
  BASE_URL : string =  isDevMode() ? environment.BASE_URL : "";

  constructor(private router: Router) {}

  updateUsername(e : Event) {
    var username = (e.target as HTMLInputElement).value;
    console.log(username);
    this.username = username;
  }

  updatePassword(e : Event) {
    var password = (e.target as HTMLTextAreaElement).value;
    console.log(password);
    this.password = password;
  }

  async submitHandler() {
    const admin = {
      admin_name : this.username,
      password : this.password
    }

    const adminResponse = await fetch(`${this.BASE_URL}/api/admin/authenticate`, {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      credentials : "include",
      body : JSON.stringify(admin)
    })

    if (adminResponse.ok) {
      this.router.navigate(['/new']);
    } else {
      console.log(await adminResponse.json())
    }

  }
}
