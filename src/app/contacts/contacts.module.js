import { module } from 'angular';
import { ContactsComponent } from './contacts.component';
import { ListModule } from './list/list.module';
import { routing } from './contacts.routing';
import { AddModule } from './add/add.module';
import { ContactsService } from './contacts.service';
import { EditModule } from './edit/edit.module';
import { DetailsModule } from './details/details.module';

export const contactsModule =
    module('app.contacts', [
        ListModule.name,
        AddModule.name,
        EditModule.name,
        DetailsModule.name
    ])
        .component('contacts', new ContactsComponent())
        .config(routing)
        .service('myService', ContactsService);