import template from './edit.html';
import EditController from './edit.controller';
import './edit.scss';

export class EditComponent {
    template = template;
    controller = EditController;
    controllerAs = 'edit';
}