import request from '@/utils/request'

class ContactService {
  static async create(payload) {
    return await request.post('contacts', payload)
  }

  static async getAll() {
    return await request.get('contacts')
  }

  static async deleteAll() {
    return await request.delete('contacts')
  }

  static async getFavorites() {
    return await request.get('contacts/favorite')
  }

  static async updateById(id, payload) {
    return await request.put(`contacts/${id}`, payload)
  }

  static async getById(id) {
    return request.get(`contacts/${id}`)
  }

  static async deleteById(id) {
    return request.delete(`contacts/${id}`)
  }
}

export default ContactService
