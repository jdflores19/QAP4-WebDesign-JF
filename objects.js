// QAP4: Creating an Object in JavaScript
// Joseph Flores
// October 23, 2023

// Setting object Literal and its properties
const customer = {
  title: ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'],
  name: 'John Smith',
  birthdate: '11/12/1980',
  gender: 'M',
  roompref: ['king', 'double', 'single'],
  paymentmethod: 'visa',
  mailingaddress: {
    street: '43 Smithson Drive',
    city: 'Paradise',
    province: 'NL',
    postal: 'A1A1A1'
  },
  phonenum: '709-123-4567',
  checkin: {
    date: '10/01/2023',
    time: '15:00'
  },
  checkout: {
    date: '10/04/2023',
    time: '11:00'
  },
  getAge: function(){
    const today = new Date();
    const birthdate = new Date(this.birthdate);
    return today.getFullYear() - birthdate.getFullYear();
  },
  duration: function(){
    const checkin = new Date(this.checkin.date);
    const checkout = new Date(this.checkout.date);
    const duration = checkout - checkin;
    return Math.round(duration / (1000 * 60 * 60 * 24));
  },
  specialrequest: 'Room on the top floor',
};

// compute the age of the customer
let age;
age = customer.getAge();

// compute the duration of the stay
let stay;
stay = customer.duration();

// display message using backticks and template literals using all the properties of the object
let message = `
Good day, ${customer.title[4]} ${customer.name}. 
Welcome to Motel Paradise, the best motel in Paradise, NL.

As our valued guest, you gain access to our topnotch 
amenities in the building and can savor our exquisite
cuisine. For your upcoming ${stay}-day stay, we are pleased 
to provide you with two complimentary bottles of water -  
a small token of our appreciation. Additionally, enjoy 
a 10% discount on your next visit as a gesture of 
gratitude for choosing Motel Paradise.

Please find below your reservation details:

Age:              ${age}
Gender:           ${customer.gender}
Room Preference:  ${customer.roompref[2]}
Payment Method:   ${customer.paymentmethod}
Mailing Address:  ${customer.mailingaddress.street}, ${customer.mailingaddress.city}, ${customer.mailingaddress.province}, ${customer.mailingaddress.postal}
Phone Number:     ${customer.phonenum}
Check-in:         ${customer.checkin.date} at ${customer.checkin.time}
Check-out:        ${customer.checkout.date} at ${customer.checkout.time}
Special Request:  ${customer.specialrequest}

Please do not hesitate to contact us for any further 
questions or specific concerns. Your satisfaction 
is our top priority.

We sincerely hope your stay with us is as delightful 
as possible, and we look forward to the pleasure of 
welcoming you back for future visits. 

Thank you for choosing Motel Paradise!
`
;

// display the object in the console
console.log(customer);

// display the message in the console
console.log(message);

// end of program