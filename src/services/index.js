class localStorageService {
    localStorageKey = 'state';

    setItem = state => localStorage.setItem(this.localStorageKey, JSON.stringify(state));

    getItem = () => JSON.parse(localStorage.getItem(this.localStorageKey));
}

export default localStorageService;
