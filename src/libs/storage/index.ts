
class AsyncStorage{

    private static _instance: AsyncStorage;
    static get shared() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        console.log('constructor called!');
    }
    

    getItem = (key:string):any => {
        const value = localStorage.getItem(key);
        return value
    }

    setItem = (key:string,value:string) => {
        localStorage.setItem(key,value);
    }

}

export default AsyncStorage.shared;