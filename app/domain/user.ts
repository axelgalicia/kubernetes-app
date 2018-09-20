export class User {
    constructor(
        public username: string,
        public name: string,
        public role: string,
        public yearsOfExperience: number,
        public onContract: boolean
    ) { }
}