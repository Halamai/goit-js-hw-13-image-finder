export default class ApiService {
  #KEY = '23293427-f7753480c7139e95ecc6333d5';
  BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this._query = '';
    this.per_page = 12;
    this.page = 1;
  }
  fetchPicture() {
    const queryParams = new URLSearchParams({
      key: this.#KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      q: this._query,
      page: this.page,
      per_page: this.per_page,
    });
    return fetch(`${this.BASE_URL}?${queryParams}`)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      });
  }
  incrementPage() {
    this.page += 1;
    // this.per_page += 12;
  }
  set query(input) {
    this._query = input;
  }
  get query() {
    return this._query;
  }
}
