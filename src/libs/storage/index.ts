
class AsyncStorage{

    private static _instance: AsyncStorage;
    static get shared() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        console.log('constructor called!');
    }
    

    getItem = async(key:string):Promise<any> => {
        const value = localStorage.getItem(key);
        return value
    }

    setItem = async(key:string,value:string): Promise<void> => {
        localStorage.setItem(key,value);
    }

}

export default AsyncStorage.shared;