import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AsyncSubject, Subject } from "rxjs";
import { MatError, MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, EditorComponent, MatCardContent, MatCardActions, MatCard, MatCardTitle, MatButton, ReactiveFormsModule, MatFormField, MatError, MatInput, NgIf ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
class FormComponent implements OnInit {
  initialValue = '<p><img src="https://live.staticflickr.com/65535/52745067319_d17e5d15ee_m.jpg" alt="" width="240" height="218"></p>';

  private editorSubject: Subject<any> = new AsyncSubject();

  ngOnInit() {
    this.editorSubject.subscribe({
      next: editor => {
        editor.setContent(this.initialValue);
      }
    });
  }

  public myForm = new FormGroup({
    body: new FormControl("", Validators.required)
  });

  handleEditorInit(e: any) {
    this.editorSubject.next(e.editor);
    this.editorSubject.complete();
  }

  public onSubmit() {
    console.log("Submitted!");
  }
}

export { FormComponent }
