import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

interface UserCredentials {
    username: string;
    password: string;
}

@Injectable()
export class AppService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private url = '/configurator/v1/users';
    private instanceUrl = '/configurator/v1/check-instance';
    private sshUrl = '/configurator/v1/sshkey';
    _isInstanceChecked = false;
    _isInstallationComplete = false;

    constructor(private http: HttpClient) {
    }

    /**
     * Check installation completing for guards
     * @returns {boolean} - result of checking instance id
     */
    public isInstallationComplete() {
        return this._isInstallationComplete;
    }

    /**
     * Check installation completing for guards
     * @returns {boolean} - result of checking instance id
     */
    public isInstanceChecked() {
        return this._isInstanceChecked;
    }

    /**
     * Send user data
     * @param {UserCredentials} credentials - username and password
     * @returns {Promise<{}>} - result of matching credentials
     */
    async checkUserData(credentials: UserCredentials): Promise<any> {
        const data = {
            username: credentials.username,
            password: credentials.password,
        };
        return this.http
            .post(this.url, data, { headers: this.headers })
            .toPromise()
            .then(() => this._isInstallationComplete = true)
            .catch(console.error);
    }

    /**
     * Send instance id
     * @param {string} instanceId - instance of user id
     * @returns {Promise<{}>} - result of matching instanceId
     */
    async checkInstanceId(instanceId: string): Promise<any> {
        const data = {
            instanceId
        };
        return this.http
            .post(this.instanceUrl, data, { headers: this.headers })
            .toPromise()
            .then(() => this._isInstanceChecked = true)
            .catch (console.error);
    }

    /**
     * Send ssh
     * @param {string} ssh - ssh
     * @returns {Promise<{}>} - result of matching ssh
     */
    async checkSSH(ssh: string): Promise<any> {
        const data = {
            ssh
        };
        return this.http
            .post(this.sshUrl, data, { headers: this.headers })
            .toPromise()
            .catch(console.error);
    }

}
