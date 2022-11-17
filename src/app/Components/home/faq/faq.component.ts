import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  isShow1 = false;
  isShow2 = false;
  isShow3 = false;
  isShow4 = false;
  isShow5 = false;
  isShow6 = false;
  constructor() { }

  ngOnInit(): void {
  }
  onFaqDisplay1() {
    this.isShow1 = !this.isShow1;
  }
  onFaqDisplay2() {
    this.isShow2 = !this.isShow2;
  }
  onFaqDisplay3() {
    this.isShow3 = !this.isShow3;
  }
  onFaqDisplay4() {
    this.isShow4 = !this.isShow4;
  }
  onFaqDisplay5() {
    this.isShow5 = !this.isShow5;
  }
  onFaqDisplay6() {
    this.isShow6 = !this.isShow6;
  }

}
