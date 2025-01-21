
export interface ResponseError {

    statusCode: number;
    body: string;

}

export function http_error(statusCode: number, errorBody: string, logError: boolean): ResponseError{

    if(logError){

        console.error(`Request failed with status code: ${statusCode}`);
        console.error(`Error: ${errorBody}`);

    }


    return {
        statusCode: statusCode,
        body: errorBody
    }
}

export function log_generic(data: any): void {

    console.log(JSON.stringify(data, null, 2))
}