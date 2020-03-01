import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { StudentEditComponent } from '../student/student-edit/student-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<StudentEditComponent> {
    canDeactivate(component: StudentEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
}
