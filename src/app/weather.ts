export class Weather{
    constructor(
        public request: Request,
        public location: Location,
        public current: Current,
        public error: Error

    ){}
}
export class Location{
 constructor(
    public name : string,
    public country: string,
    public region:string,
    public lat: string,
    public lon: string,
    public timezone_id: string,
    public localtime: string,
    public localtime_epoch: number,
    public utc_offset: string
 ){}
}

export class Request{
constructor(
    public type: string,
    public query: string,
    public language: string,
    public unit: string
        ){}
}
export class Error{
constructor(
    public code: number,
    public info: string,
    public type: string
        ){}
}

export class Current{
constructor(
    public observation_time: string,
    public temperature: number,
    public weather_code: number,
    public weather_icons: string[],
    public weather_descriptions: string[],
    public wind_speed: number,
    public wind_degree: number,
    public wind_dir: string,
    public pressure: number,
    public precip: number,
    public humidity: number,
    public cloudcover: number,
    public feelslike: number,
    public uv_index: number,
    public visibility: number,
    public is_day: string
        ){}
}