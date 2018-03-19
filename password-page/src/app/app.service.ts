import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

interface UserCredentials {
    username: string;
    password: string;
    instanceId?: string;
}

@Injectable()
export class AppService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private url = '/configurator/v1/users';
    private instanceUrl = '/configurator/v1/check-instance';
    private sshUrl = '/configurator/v1/sshkey';
    _isInstanceChecked = false;
    _isInstallationComplete = false;
    private data = <any>{};

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
        this.data.username = credentials.username;
        this.data.password = credentials.password;
        return this.http
            .post(this.url, this.data, { headers: this.headers })
            .toPromise()
            .then(() => this._isInstallationComplete = true);
    }

    /**
     * Send instance id
     * @param {string} instanceId - instance of user id
     * @returns {Promise<{}>} - result of matching instanceId
     */
    async checkInstanceId(instanceId: string): Promise<any> {
        this.data.instanceId = instanceId;
        return this.http
            .post(this.instanceUrl, this.data, { headers: this.headers })
            .toPromise()
            .then(() => this._isInstanceChecked = true);
    }

    /**
     * Send ssh
     * @param {string} ssh - ssh
     * @returns {Promise<{}>} - result of matching ssh
     */
    async checkSSH(ssh: string): Promise<any> {
        return this.http
            .post(this.sshUrl, {ssh}, { headers: this.headers })
            .toPromise();
    }

}
