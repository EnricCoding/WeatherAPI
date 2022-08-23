
export interface Weather {
    time?: string;
    symbol?: string;
    symbolPhrase?: string;
    temperature?: number;
    feelsLikeTemp?: number;
    relHumidity?: number;
    dewPoint?: number;
    windSpeed?: number;
    windDir?: number;
    windDirString?: string;
    windGust?: number;
    precipProb?: number;
    precipRate?: number;
    cloudiness?: number;
    thunderProb?: number;
    uvIndex?: number;
    pressure?: number;
    visibility?: number;
}

export interface WeatherTotal {
    current: Weather[]
}

export interface WeatherLocation{
    adminArea: string
    adminArea2: string
    adminArea3: string
    country: string
    id: number
    language: string
    lat: number
    lon: number
    name: string
    timezone: string
}