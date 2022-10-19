export interface RtiLabUiKit{
    baseUrl?:string,
    imagesEngine?:Record<string, string>,
    defaultTheme:Record<string, string>,
    usePersistedQueries:boolean,
    useGetMethodAllQueries:boolean,
    useGetMethodPersistedQueries:boolean,
    template:Record<string, string>,
    ttlCache?:number,
    recommendations:Record<string,Record<string,string>>
}

export interface OTTResponse<T>{
    service:string,
    time:string,
    response:T,
    TID:string,
    isOk:boolean
}


export interface OTTLogin{
    beToken:string,
    sid:string
}

export type OTTResponseLogin = OTTResponse<OTTLogin>