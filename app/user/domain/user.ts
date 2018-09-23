import { db } from '../../db';
import { resolve } from 'dns';

export class User {
    constructor(
        public username: string,
        public name: string,
        public role: string,
        public yearsOfExperience: number,
        public onContract: boolean
    ) {
        this.username = this.username.toLowerCase();
        this.onContract = this.onContract == undefined ? false : this.onContract;
    }

    public static toJson(user: any) {
        return new User(
            user.username,
            user.name,
            user.role,
            user.yearsOfExperience,
            user.onContract == 0 ? false : true
        );
    }

}