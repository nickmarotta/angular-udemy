import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showParagraph = true;
  clicks = [];
  currentCount = 0;

  onDisplayDetailsClicked() {
    this.showParagraph = !this.showParagraph;
    this.currentCount += 1;
    this.clicks.push(this.currentCount);
  }

  getColor(num: number) {
    return num > 4 ? "blue" : "white";
  }
}
