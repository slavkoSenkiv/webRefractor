import { User } from "./models/User";
//do not add id property when you create new user
//it will be added automatically
//if you add it it will lead to server errors
//becouse it cant fetch a user id that does not exist yet
const user = new User({name: 'Slav2', age: 31});
user.fetch();
user.save();
//setTimeout(()=>user.fetch(), 4000);


/* console.log(user);
console.log(user.get('age'));   
user.set({age: 30});
console.log(user);
user.on('click', ()=>console.log('click here'));
console.log(user);
user.trigger('click'); 
 */