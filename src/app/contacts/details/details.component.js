import template from './details.html';
import DetailsController from './details.controller';
import './details.scss';

export class DetailsComponent {
    template = template;
    controller = DetailsController;
    controllerAs = 'details';
}