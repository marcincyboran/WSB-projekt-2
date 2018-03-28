import { v4 as uuid } from 'uuid';

export class ContactsService {

    constructor() {
        this.contacts = this.getData();
    };

    getData = () => {
        const data = localStorage.getItem('ContactService');
        let contacts = [];
        if (data) {
            try {
                contacts = JSON.parse(data);
            } catch (e) {
                console.log(e);
            }
        }
        return contacts;
    };

    setData = () => {
        localStorage.setItem(
            'ContactService',
            JSON.stringify(this.contacts)
        )
    };

    addContact = (name, phone) => {
        this.contacts.push({
            id: uuid(),
            name: name,
            phone: phone
        });
        this.setData();
    };

    deleteContact = (id) => {
        const index = this.contacts.map(contact => contact.id).indexOf(id);
        this.contacts.splice(index, 1);
        this.setData();
    };
}