import { localStorageError } from './errors';

namespace LocalStorage {

    export const getItem = (key: string): any => {
        let item: any = localStorage.getItem(key);
        if (!item) {
            throw new localStorageError(`Error accessing key ${key}, it does not exist`);
        }
        return item;
    }

    export const setItem = (key: string, data: any): void => {
        try {
            localStorage.setItem(key, data);
        } catch {
            throw new localStorageError(`Error with setting data for key ${key}`);
        }
    }

}

export const getEngineQueryUrl = (engine: string): string => {
    try {
        let item: string = LocalStorage.getItem(engine);
        return item;
    } catch {
        
    }
}
