import axios from 'axios';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    // return await axios.get('https://jsonplaceholder.typicode.com/posts');

    return axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      params: {
        _limit: limit,
        _page: page,
      },
    }).then(res => res);
  }

  static async getById(id) {
    return axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      params: {
        id: id,
      },
    }).then(res => res);
  }

  static async getCommentsByPostId(id) {
    return axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      method: 'GET',
    }).then(res => res);
  }
}
