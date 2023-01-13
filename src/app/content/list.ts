export class List {
    user: string | null | undefined = "";
    list: string[] = [];

    constructor(user: string | null | undefined, list: string[]) {
        this.user = user;
        this.list = list;
    }
}