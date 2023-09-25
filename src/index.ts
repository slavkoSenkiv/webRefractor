import { User } from "./models/User";

//const user = new User({ id: 1});

const user = new User({ id: 1, name: 'newer name', age: 0});

user.on('change', () => {
  console.log(user);
});

user.fetch();



//do not add id property when you create new user
//it will be added automatically
//if you add it it will lead to server errors
//becouse it cant fetch a user id that does not exist yet
/* const user = new User({name: 'Slav2', age: 31});

console.log(user.get('name'));

user.on('change', ()=>{
  console.log('user was changed');
});
user.set({ name: 'New name'}); */

//user.trigger('change');


//user.fetch();
//user.save();

/* user.events.on('change', ()=>{
  console.log('change 1');
});
user.events.trigger('change'); */

// a quick reminder on accessors
/* class Person {
  constructor(public firstName: string, public lastName: string){}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Slav', 'Senkiv');
console.log(person.fullName ); */

/* const on = user.on; 
on('change', ()=>{
  console.log('change 2');
}); */

