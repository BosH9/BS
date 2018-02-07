import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  private regForm: FormGroup;
  private submitClicked: boolean;
  base64Image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      image: ['']
    });

    this.setBaseImage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }
  setBaseImage() {
    this.base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE5MkU5QTA1Q0I5QzExRTVBMUFGOEZGQjgzQTlBMUVGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5MkU5QTA0Q0I5QzExRTVBMUFGOEZGQjgzQTlBMUVGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OTA3OUEwRDdGMDNFNTExQjZDMkE2NEQzMDQ3Mzc0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OTA3OUEw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";
  }
}
