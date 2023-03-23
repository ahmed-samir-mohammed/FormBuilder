import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-list',
  templateUrl: './inputs-list.component.html',
  styleUrls: ['./inputs-list.component.scss']
})
export class InputsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dragInput(e: any) {
    console.log(e)
  }

}
