import { globalAxios } from 'core/infra/baseHttp';

export default class LoginService {
  static async login(body: object) {        
    return await globalAxios.post(`/user/login`, body);
  }
}