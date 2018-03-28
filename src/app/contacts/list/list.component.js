import template from './list.html';
import ListController from './list.controller';
import './list.scss';

export class ListComponent {
    template = template;
    controller = ListController;
    controllerAs = 'list';
}