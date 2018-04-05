import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';

import {AppComponent} from './app.component';
import {contactsModule} from './contacts/contacts.module';

const materialConfig = $mdThemingProvider => {
  $mdThemingProvider.theme('default')
  .primaryPalette('orange')
  .accentPalette('blue')
  .warnPalette('deep-orange');
};

export const appModule = angular
  .module('app', [
    uiRouter,
    'ngMaterial',
    contactsModule.name,
    'ngMessages'
  ])
  .component('app', new AppComponent())
  .config(materialConfig);
