import { db } from '../../db';
import { User } from '../domain/user';

export class UserCommands {

    //Create User
    public static create(user: User): Promise<boolean> {

        return new Promise((res, rej) => {
            db.exec('INSERT into user set ?', user)
                .then((rows: any) => {
                    res(true);
                }).catch((e: any) => {
                    console.log(e);
                    rej([{ error: `Could not create user: ${e}` }]);
                });
        });

    }

    //Update User
    public static updateByUsername(user: User): Promise<boolean> {
        return new Promise((res, rej) => {
            let { username, name, role, yearsOfExperience, onContract } = user;
            db.exec('UPDATE user SET name=?, role=?, yearsOfExperience=?, onContract=? where username=?',
                [name, role, yearsOfExperience, onContract, username])
                .then((rows: any) => {
                    res(true);
                }).catch((e: any) => {
                    console.log(e);
                    rej([{ error: `Could not update user: ${e}` }]);
                });
        });
    }

    //Delete User
    public static deleteByUsername(username: string): Promise<User> {
        return new Promise((res, rej) => {
            db.exec('select username, name, role, yearsOfExperience, onContract from user where username=?', [username])
                .then((rows: any) => {
                    let rowsParsed = JSON.parse(JSON.stringify(rows));
                    let users: User[] = rowsParsed.map((user: any) => {
                        return User.toJson(user);
                    });
                    res(users[0]);
                }).catch((e: any) => {
                    console.log(e);
                    rej([{ error: `Could not get user: ${e}` }]);
                });
        });
    }
}
