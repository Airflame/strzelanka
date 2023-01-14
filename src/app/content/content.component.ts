import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResultComponent } from '../result/result.component';
import { ResultService } from '../result/result.service';
import { UserData } from './user-data';

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

  users: UserData[] = [];

  constructor(private _formBuilder: FormBuilder, private resultService: ResultService) {}

  ngOnInit(): void {
  }

  saveParams(): void {
    this.listLength = parseInt(this.firstFormGroup.get('listLength')?.value!);
    this.resultService.setListLength(this.listLength);
  }

  addUser(): void {
    this.users.push({user: this.userFormGroup.get('user')?.value?.toString(), filled: 0});
    this.userFormGroup.reset();
  }

  updateFilledByUser(userData: UserData): void {
    let user: UserData | undefined = this.users.find(user => user.user == userData.user);
    if (user != undefined) {
      user.filled = userData.filled;
    }
  }
}
