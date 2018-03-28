import {module} from 'angular';
import {EditComponent} from './edit.component';

export const EditModule = 
    module('EditModule', [])
    .component('edit', new EditComponent()); 