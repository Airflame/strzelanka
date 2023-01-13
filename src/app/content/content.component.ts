import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { List } from './list';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    listLength: ['', Validators.required],
  });

  userFormGroup = this._formBuilder.group({
    user: ['', Validators.required],
  });

  listLength: number = 1;

  users: any[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  saveParams(): void {
    this.listLength = parseInt(this.firstFormGroup.get('listLength')?.value!);
  }

  addList(): void {
    this.users.push(this.userFormGroup.get('user')?.value?.toString());
    this.userFormGroup.reset();
  }
}
