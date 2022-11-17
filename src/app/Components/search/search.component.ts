import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  // onKey(event: any) {
  //   this.inputValue = event.target.value;
  //   console.log(event.target.value)
  // }
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChange.emit(this.inputValue)
  }

}
