import { LSDefaultValues } from "./alias"

export namespace LStorage {
    export enum LSTypes {
        Number,
        String,
        Object
    }

    export const getItem = (item: string, type: LSTypes): any => {
        let res: any = localStorage.getItem(item);
        if (!res) {
            checkDefaultValues();
            res = localStorage.getItem(item);
        }
        switch(type) {
            case LSTypes.Number: res = +res;
            case LSTypes.Object: res = JSON.parse(res);
        }
        return res
    }

    export const checkDefaultValues = (): void => {
        for (const [key, value] of Object.entries(LSDefaultValues)) {
            if (!localStorage.getItem(key)) localStorage.setItem(key, value);
        }
    }

    export const exportLocalStorage = (): string => {
        let LSObject: any;

        for (const [key, value] of Object.entries(LSDefaultValues)) {
            LSObject[key] = localStorage.getItem(value);
        }

        return JSON.stringify(LSObject);
    }

    export const importLocalStorage = (data: string): void => {

    }
    
}

    // export const getItem = (key: string, valuetype?: ValueTypes, defaultvalue?: any): any => {
    //     let item: any = localStorage.getItem(key);
    //     if (!item) {
    //         console.log(`Value ${key} does not exist, adding to localStorage...`);

    //         if (defaultvalue) {
    //             switch (valuetype) {
    //                 case ValueTypes.Number: {
    //                     setItem(key, defaultvalue.toString());
    //                 }
    //                 case ValueTypes.String: {
    //                     setItem(key, defaultvalue);
    //                 }
    //                 case ValueTypes.Object: {
    //                     setItem(key, JSON.stringify(defaultvalue))
    //                 }
    //                 default: {
    //                     console.log('cannot set value of unknown type');
    //                 }
    //             }
    //         }
    //     }
    //     return item || null;
    // }

    // export const setItem = (key: string, data: any): void => {
    //     try {
    //         localStorage.setItem(key, data);
    //     } catch {
    //         throw new localStorageError(`Error with setting data for key ${key}`);
    //     }
    // }


// export const getEngineQueryUrl = (engine: string): string => {
//     try {
//         let item: string = LocalStorage.getItem(engine);
//         return item;
//     } catch {
        
//     }
// }
