import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ada-reactive-form',
  templateUrl: './ada-reactive-form.component.html',
  styleUrls: ['./ada-reactive-form.component.css']
})
export class AdaReactiveFormComponent implements OnInit, AfterViewInit {

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  //使用响应式表单需要导入ReactiveFormsModule

  //创建FormControl，三个可选参数：初始值、验证器数组和异步验证器数组
  formControlOne = new FormControl('init value', [], []);


  //FormGroup， 跟踪一组AbstractControl 的实例的值和有效性状态
  formGroupOne = new FormGroup({
    formControlOneOne: new FormControl(),
    formControlOneTwo: new FormControl(),
  });


  //使用form builder创建form group
  //FormBuild.group()方法是创建formGroup的工厂方法
  formGroupTwo: FormGroup = this.formBuilder.group({
    name: 'build by form builder',
    //使用表单验证
    phone: ['12', Validators.required]
  });


  //多级form group
  formGroupNested = this.formBuilder.group({
    name: ['multi form group', Validators.required],
    address: this.formBuilder.group({
      country: 'china',
      province: 'shanghai',
    }),
  });

  //setValue与patchValue
  callSetValue(value) {
    this.formGroupNested.setValue(value);
  }

  callPatchValue(value) {
    this.formGroupNested.patchValue(value);
  }

  //rest
  callReset(value) {
    this.formGroupNested.reset(value);
  }

  //setControl
  callSetControl(value) {
    this.formGroupNested.setControl('address', this.formBuilder.group(value));
  }

  //form array
  formArray = this.formBuilder.group({
    name: '',
    addresses: this.formBuilder.array([
      this.formBuilder.group({country: '', province: ''}),
      this.formBuilder.group({country: '', province: ''}),
    ]),
  });

  //添加
  addAddress() {
    (this.formArray.get('addresses') as FormArray).push(this.formBuilder.group({country: '', province: ''}));
  }

  ngAfterViewInit() {
    // 监听表单值的变化
    this.formArray.valueChanges.subscribe(value=>{
      console.log('.......',value);
    });
  }


}
