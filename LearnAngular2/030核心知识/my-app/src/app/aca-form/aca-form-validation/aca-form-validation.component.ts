import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {syncRegValidator} from "./custom-validation/sync-reg-validator";
import {asyncRegValidator} from "./custom-validation/async-reg-validator";

@Component({
  selector: 'app-aca-form-validation',
  templateUrl: './aca-form-validation.component.html',
  styleUrls: ['./aca-form-validation.component.css']
})
export class AcaFormValidationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  one;

  //第二个参数传同步验证器，第三个参数传异步验证器
  two = new FormControl('', [Validators.required, Validators.minLength(6)], []);

  threeOneOne;
  threeOneTwo = new FormControl('', [syncRegValidator(/a/)]);

  threeTwoOne;
  threeTwoTwo = new FormControl('', [], [asyncRegValidator(/a/)]);
}
