import {module} from 'angular';
import {DetailsComponent} from './details.component';

export const DetailsModule =
    module('DetailsModule', [])
    .component('detail', new DetailsComponent());