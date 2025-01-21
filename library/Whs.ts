import { http_error, log_generic } from "./Utils.ts";


export abstract class WhsRoutes {

    static nonExternalURL: string = "https://whs.app.br/api"
    static baseURL: string = "https://whs.app.br/api/external";
    static ordersURL: string = this.nonExternalURL + '/orders';
    static paramsURL: string = this.baseURL + '/calculator/params';
    static productsURL: string = this.baseURL + '/products';

}


export class Whs {

    apiKey: string = "";
    headers: HeadersInit = {};
    constructor(apiKey: string) {
        this.apiKey = apiKey;        
        this.set_headers();
    }

    set_headers(): void {
        this.headers = {"Content-Type": 'application/json', "Authorization" : `Bearer ${this.apiKey}`}
    }

    async get_route(whsRoute: string): Promise<unknown> {

        console.log(whsRoute);
        log_generic(this.headers);
//        throw new Error("Stop!");
        
        const response: Response = await fetch(whsRoute, {
            headers: this.headers
        });

        return response.ok ? await response.json() : http_error(response.status, await response.text(), true);
    }
}