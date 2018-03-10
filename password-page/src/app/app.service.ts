import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

export class UserDataParams {
  constructor(public username = '', public password = '') {
  }
}

export class InstanceIdParams {
  constructor(public instanceId = '') {
  }
}

export class SsshParams {
  constructor(public ssh = '') {
  }
}

@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  async checkUserData(userDataParams: UserDataParams): Promise<{}> {
    const url = `/configurator/v1/users`;
    const data = {
      username: userDataParams.username,
      password: userDataParams.password,
    };
    const response = await this.http
      .post(url, data, {headers: this.headers})
      .toPromise();
    return response.json();
  }

  async checkInstanceId(instanceIdParams: InstanceIdParams): Promise<{}> {
    const url = `/configurator/v1/check-instance`;
    const data = {
      instanceId: instanceIdParams.instanceId
    };
    const response = await this.http
      .post(url, data, {headers: this.headers})
      .toPromise();
    return response.json();
  }

  async checkSSH(sshParams: SsshParams): Promise<{}> {
    const url = `/configurator/v1/sshkey`;
    const data = {
      ssh: sshParams.ssh
    };
    const response = await this.http
      .post(url, data, {headers: this.headers})
      .toPromise();
    return response.json();
  }

}
