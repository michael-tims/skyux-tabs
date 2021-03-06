import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
 SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyTabsResourcesModule
} from '../shared/tabs-resources.module';

import {
  SkyTabButtonComponent
} from './tab-button.component';

import {
  SkyTabDropdownComponent
} from './tab-dropdown.component';

import {
  SkyTabComponent
} from './tab.component';

import {
  SkyTabsetComponent
} from './tabset.component';

import {
  SkyTabsetNavButtonComponent
} from './tabset-nav-button.component';

@NgModule({
  declarations: [
    SkyTabButtonComponent,
    SkyTabComponent,
    SkyTabDropdownComponent,
    SkyTabsetComponent,
    SkyTabsetNavButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SkyDropdownModule,
    SkyI18nModule,
    SkyIconModule,
    SkyTabsResourcesModule
  ],
  exports: [
    SkyTabComponent,
    SkyTabsetComponent,
    SkyTabsetNavButtonComponent
  ]
})
export class SkyTabsModule { }
