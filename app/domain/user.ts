import { db } from '../db';
import { resolve } from 'dns';

export class User {
    constructor(
        public username: string,
        public name: string,
        public role: string,
        public yearsOfExperience: number,
        public onContract: boolean
    ) {
    }


    private static toJson(user: any) {
        let userJson = new User(
            user.username,
            user.name,
            user.role,
            user.yearsOfExperience,
            user.onContract
        );

        return userJson;
    }

    public static getAllUsers(): Promise<User[]> {
        return new Promise((res, rej) => {
            db.exec('select username, name, role, yearsOfExperience, onContract from user')
                .then((rows: any) => {
                    let rowsParsed = JSON.parse(JSON.stringify(rows));
                    let users: User[] = rowsParsed.map((user: any) => {
                        return this.toJson(user);
                    });
                    res(rowsParsed);
                }).catch((e: any) => {
                    console.log(e);
                    rej([{ error: 'Could not get users' }]);
                });
        });


    }

}