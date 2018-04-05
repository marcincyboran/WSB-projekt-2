import { v4 as uuid } from 'uuid';

export class ContactsService {

    HEADERS = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-User-ID': 'test'
    });
    URL = 'https://wsb-frontend-project-angularjs.juszczak.io';
    contacts = [];
    customerDetails = [];

    constructor($state) {
        this.$state = $state;
        this.getList();
    };

    setCustomer = (customer) => {

        fetch(this.URL + '/add', {
            method: 'post',
            headers: this.HEADERS,
            body: JSON.stringify({ customer: customer })
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    getList = () => {

        fetch('https://wsb-frontend-project-angularjs.juszczak.io/customers', {
            method: 'get',
            headers: this.HEADERS
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(response => {
                this.contacts = response.customers;

                // refresh list
                this.$state.go('list');
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    getCustomerFromId = (id) => {

        fetch(this.URL + '/customer/' + id, {
            method: 'get',
            headers: this.HEADERS
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(response => {
                console.log('getCustomer data:')
                console.log(response);

                this.customerDetails = response.customer;
                this.$state.go('details', {
                    id,
                });
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    updateCustomer = (customerObj) => {

        fetch(this.URL + '/update/' + customerObj.id, {
            method: 'put',
            headers: this.HEADERS,
            body: JSON.stringify({ customer: customerObj })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(response => {
                console.log('Update data:')
                console.log(response);
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    deleteCustomer = (id) => {

        fetch(this.URL + '/delete/' + id, {
            method: 'delete',
            headers: this.HEADERS
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(response => {
                console.log('Delete data:')
                console.log(response);
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    addContact = (name, phone, company, email) => {
        let contact = {
            id: uuid(),
            name: name,
            phone: phone,
            company: company,
            email: email,
            date: new Date()
        };
        this.contacts.push(contact);
        this.setCustomer(contact);
    };

    deleteContact = (id) => {
        const index = this.contacts.map(contact => contact.id).indexOf(id);
        this.contacts.splice(index, 1);
        this.deleteCustomer(id);
    };
}