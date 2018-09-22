import { db } from '../../db';
import { User } from '../domain/user';

export class UserCommands {

    //Create User
    public static create(user: User): Promise<boolean> {
        return new Promise((res, rej) => {
            db.exec('INSERT into user set ?', user)
                .then((rows: any) => {
                    //console.log(rows);
                    res(true);
                }).catch((e: any) => {
                    console.log(e);
                    rej([{ error: `Could not create user: ${e}` }]);
                });
        });
    }

    //Update User
    public static updateByUsername(username: string): Promise<User> {
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
