import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/posts/'

export default class PostService {
  static async getAll(limit = 10, page = 1) { 
    const response = await axios.get(
      baseURL, {
        params: {
          _limit: limit,
          _page: page
        }
      }
    )        
    return response
  }
  
  static async getById(id) { 
    const response = await axios.get(
      `${baseURL}${id}`
      )
      return response
    }
    
    static async getCommentsByPostId(id) { 
      const response = await axios.get(
        `${baseURL}${id}/comments`
        ) 
        return response
  }
}