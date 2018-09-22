import { db } from '../../db';
import { User } from '../domain/user';

export class UserQueries {

    //Return all users
    public static getAllUsers(): Promise<User[]> {
        return new Promise((res, rej) => {
            db.exec('select username, name, role, yearsOfExperience, onContract from user')
                .then((rows: any) => {
                    let rowsParsed = JSON.parse(JSON.stringify(rows));
                    let users: User[] = rowsParsed.map((user: any) => {
                        return User.toJson(user);
                    });
                    res(users);
                }).catch((e: any) => {
                    console.log(e);
                    rej([{ error: `Could not get user: ${e}` }]);
                });
        });
    }

    //Return user by username
    public static getUserByUsername(username: string): Promise<User> {
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
