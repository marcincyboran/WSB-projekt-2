import template from './add.html';
import AddController from './add.controller';
import './add.scss';

export class AddComponent {
    template = template;
    controller = AddController;
    controllerAs = 'add';
}