import axios, { AxiosResponse} from "axios";
const url = 'http://localhost:3000/users/'
 

export class Sync {
  
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


} 


/* fetch(): void {
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
 
/* fetch(): void {
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
  public async fetch(): Promise<void> {
  const response = await axios.get(`http://localhost:3000/users/${this.get('id')}`)
  this.set(response.data) */