import { LocalStorageData } from "./alias"



export namespace LocalStorage {
    export const checkDefaultValues = (): void => {
        LocalStorageData.LSKeys.forEach(el => {
            if (!localStorage.getItem(el.key)) localStorage.setItem(el.key, el.defaultvalue);
        });
    }

    export const exportLocalStorage = (): string => {
        let LSObject: any;

        LocalStorageData.LSKeys.forEach(el => {
            LSObject[el.key] = localStorage.getItem(el.key);
        });

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
