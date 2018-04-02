import { v4 as uuid } from 'uuid';

export class ContactsService {

    HEADERS = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-User-ID': 'test'
    });
    contacts = [];
    customerDetails = [];

    constructor($state) {
        this.$state = $state;
    };

    // dunno why but need this to reload this.contacts, and refresh html view

    // update = (data) => {
    //     data.forEach(element => {
    //         this.contacts.push(element);
    //     });
    //     this.$state.go('list');
    // };

    // updateCustomerDetails = (data) => {
    //     this.customerDetails = [];
    //     this.customerDetails.push(data);
    // };

    // returnContacts = () => {
    //     return this.contacts;
    // };

    setCustomer = (customer) => {

        fetch('https://wsb-frontend-project-angularjs.juszczak.io/add', {
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
                console.log('getList data:')
                console.log(response);
                this.contacts = response.customers;
                // this.$state.reload();
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    getCustomerFromId = (id) => {

        fetch('https://wsb-frontend-project-angularjs.juszczak.io/customer/' + id, {
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
                // this.updateCustomerDetails(response.customer);
                this.customerDetails = [];
                this.customerDetails.push(response.customer);
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    updateCustomer = (id) => {

        fetch('https://wsb-frontend-project-angularjs.juszczak.io/update/' + id, {
            method: 'put',
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
                console.log('Update data:')
                console.log(response);
            })
            .catch(errorObj => {
                console.log(errorObj);
            });
    };

    deleteCustomer = (id) => {

        fetch('https://wsb-frontend-project-angularjs.juszczak.io/delete/' + id, {
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
        this.setData();
    };
}