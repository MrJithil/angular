/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';

// #docregion TitleCasePipe
@Component({
  selector: 'lowerdashcase-pipe',
  template: `<div>
    <p>{{'Some-String' | lowerdashcase}}</p> <!-- output is expected to be "some-string" --> 
    <p>{{'tHIs-is-mIXeD-DashEd-CaSe' | titlecase}}</p> <!-- output is expected to be "this-is-mixed-dashed-case" --> 
    <p>{{'it\\'s non-trivial question' | titlecase}}</p> <!-- output is expected to be "it's non-trivial question" --> 
    <p>{{'true-or-false' | titlecase}}</p> <!-- output is expected to be "True-Or-False" -->
    <p>{{'Jithil-P-Ponnan' | titlecase}}</p> <!-- output is expected to be "jithil-p-ponnan" -->
  </div>`
})
export class LowerDashCasePipe {
}
// #enddocregion
