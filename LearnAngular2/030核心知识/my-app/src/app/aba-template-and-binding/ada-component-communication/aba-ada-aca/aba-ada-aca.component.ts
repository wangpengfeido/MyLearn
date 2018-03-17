import { Component, OnInit } from '@angular/core';
import {AbaAdaAcaService} from "./aba-ada-aca.service";

@Component({
  selector: 'aba-ada-aca',
  templateUrl: './aba-ada-aca.component.html',
  styleUrls: ['./aba-ada-aca.component.css']
})
export class AbaAdaAcaComponent implements OnInit {

  constructor(private counterService:AbaAdaAcaService) { }

  ngOnInit() {
  }

  count=this.counterService.count;

  add(){
    this.counterService.add();
    this.count=this.counterService.count;
  }

}
