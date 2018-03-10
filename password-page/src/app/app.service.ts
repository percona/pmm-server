import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

interface UserCredentials {
    username: string;
    password: string;
}

@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  async checkUserData(credentials: UserCredentials): Promise<{}> {
    const url = `/configurator/v1/users`;
    const data = {
      username: credentials.username,
      password: credentials.password,
    };
    const response = await this.http
      .post(url, data, {headers: this.headers})
      .toPromise();
    return response.json();
  }

  async checkInstanceId(instanceId:string): Promise<{}> {
    const url = `/configurator/v1/check-instance`;
    const data = {
      instanceId
    };
    const response = await this.http
      .post(url, data, {headers: this.headers})
      .toPromise();
    return response.json();
  }

  async checkSSH(ssh: string): Promise<{}> {
    const url = `/configurator/v1/sshkey`;
    const data = {
      ssh
    };
    const response = await this.http
      .post(url, data, {headers: this.headers})
      .toPromise();
    return response.json();
  }

}
