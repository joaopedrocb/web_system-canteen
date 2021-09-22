export class LocalStorageAdapter {
  
  setItem(key, value) {
    const valueParsed = JSON.stringify(value);

    localStorage.setItem(key, valueParsed);
  }

  getItem(key) {
    const item =  localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  }

  removeItem(key){
     localStorage.removeItem(key);
  }

   clearStorage() {
     localStorage.clear();
  }
}
