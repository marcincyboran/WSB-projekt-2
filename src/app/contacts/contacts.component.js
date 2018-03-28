import template from './contacts.html';
import './contacts.scss';
import ContactsController from './contacts.controller';

export class ContactsComponent {
    template = template;
    controller = ContactsController;
    controllerAs = 'contacts';

}