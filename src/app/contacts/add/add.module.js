import {module} from 'angular';
import {AddComponent} from './add.component';

export const AddModule =
    module('AddModule', [])
    .component('add', new AddComponent());