import axios, {AxiosResponse} from "axios";

const url = 'http://localhost:3000/users/'

interface UserProps {
  id? : number;
  name? : string;
  age? : number;
}

type Callback = () => void;

export class User {

  constructor(private data: UserProps) {};

  events: {[eventName: string]: Callback[]} = {};

  get<K extends keyof UserProps>(propName: K): number | string | void {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    let handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    let handlers = this.events[eventName];
    if (!handlers || handlers.length === 0){return};
    handlers.forEach(callback => callback());
  }
 
  fetch(): void {
    const id = this.get('id');
    if (id) {
      const requestURL = url + id;
      axios.get(requestURL)
        .then((response: AxiosResponse): void => {
          this.set(response.data);
          console.log('Fetch successful:', requestURL);
        })
        .catch((error) => {
          console.error('Fetch Error:', requestURL, error);
        });
      }
    }
  
    save(): void {
      const id = this.get('id');
      if (id) {
        axios.put(url + id, this.data)
          .catch((error) => {
            console.error('Axios Error:', error);
          });
      } else {
        axios.post(url, this.data)
          .catch((error) => {
            console.error('Axios Error:', error);
          });
      }
    }
  }
  
  /*   
  fetch(): void {
    axios.get(url + this.get('id'))
    .then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    let id = this.get('id');
    if (id) {
      axios.put(url + id, this.data);
    } else {
      axios.post(url, this.data);
    }
  } 
  */

  /* 
  fetch(): void {
    const id = this.get('id');
    if (id) {
      axios.get(url+id)
        .then((response: AxiosResponse): void => {
          this.set(response.data);
        })
        .catch((error) => {
          console.error('Axios Error:', error);
        });
    }
  }
  
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(url+id, this.data)
        .catch((error) => {
          console.error('Axios Error:', error);
        });
    } else {
      axios.post(url, this.data)
        .catch((error) => {
          console.error('Axios Error:', error);
        });
    }
  } 
  */

/* 
{
  "users" : []
}
*/