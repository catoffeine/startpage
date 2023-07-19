export class localStorageError implements Error {
    name: string = 'localStorage error';
    public message: string = 'Error working with localStorage';
    constructor(msg?: string) {
        this.message = msg || this.message;
    }
}