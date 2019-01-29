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
  selector: 'cameldashcase-pipe',
  template: `<div>
    <p>{{'some-string' | cameldashcase}}</p> <!-- output is expected to be "Some-String" --> 
    <p>{{'tHIs-is-mIXeD-DashEd-CaSe' | titlecase}}</p> <!-- output is expected to be "This-Is-Mixed-Dashed-Case" --> 
    <p>{{'it\\'s non-trivial question' | titlecase}}</p> <!-- output is expected to be "it's Non-trivial question" --> 
    <p>{{'true-or-false' | titlecase}}</p> <!-- output is expected to be "True-Or-False" -->
    <p>{{'jithil-p-ponnan' | titlecase}}</p> <!-- output is expected to be "Jithil-P-Ponnan" -->
  </div>`
})
export class CamelDashCasePipe {
}
// #enddocregion
