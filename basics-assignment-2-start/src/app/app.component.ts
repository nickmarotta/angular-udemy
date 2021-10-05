import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  username = "";
  username2 = "";
  allowSubmit = false;

  onUpdateUsername() {
    if (this.username === "") {
      this.allowSubmit = false;
    } else {
      this.allowSubmit = true;
    }
  }

  onSubmitClicked() {
    this.username = "";
  }
}
