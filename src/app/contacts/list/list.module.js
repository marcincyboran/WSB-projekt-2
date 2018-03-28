import {module} from 'angular';
import {ListComponent} from './list.component';

export const ListModule = 
    module('ListModule', [])
    .component('list', new ListComponent());