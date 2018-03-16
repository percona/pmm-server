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
    _isInstanceChecked: boolean;
    _isInstallationComplete: boolean;

    constructor(private http: HttpClient) {
    }

    /**
     * Check instance id
     * @returns {boolean} - result of checking instance id
     */
    public setCheckInstance(value = false) {
        return this._isInstanceChecked = value;
    }

    /**
     * Check installation completing
     * @returns {boolean} - result of checking instance id
     */
    public setInstallationComplete(value = false) {
        return this._isInstallationComplete = value;
    }

    /**
     * Check installation completing
     * @returns {boolean} - result of checking instance id
     */
    public isInstallationComplete() {
        return this._isInstallationComplete;
    }

    /**
     * Check installation completing
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
    async checkUserData(credentials: UserCredentials): Promise<{}> {
        const url = `/configurator/v1/users`;
        const data = {
            username: credentials.username,
            password: credentials.password,
        };
        const response = await this.http
            .post(url, data, { headers: this.headers })
            .toPromise();
        return response;
    }

    /**
     * Send instance id
     * @param {string} instanceId - instance of user id
     * @returns {Promise<{}>} - result of matching instanceId
     */
    async checkInstanceId(instanceId: string): Promise<{}> {
        const url = `/configurator/v1/check-instance`;
        const data = {
            instanceId
        };
        const response = await this.http
            .post(url, data, { headers: this.headers })
            .toPromise();
        return response;
    }

    /**
     * Send ssh
     * @param {string} ssh - ssh
     * @returns {Promise<{}>} - result of matching ssh
     */
    async checkSSH(ssh: string): Promise<{}> {
        const url = `/configurator/v1/sshkey`;
        const data = {
            ssh
        };
        const response = await this.http
            .post(url, data, { headers: this.headers })
            .toPromise();
        return response;
    }

}
