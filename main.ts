import { WHS_TOKEN } from "./credentials.ts";
import { Whs, WhsRoutes } from "./library/Whs.ts";
import { log_generic } from "./library/Utils.ts";




async function main(): Promise<void> {

    const whsInstance = new Whs(WHS_TOKEN);
    const ordersResponse = await whsInstance.get_route(WhsRoutes.productsURL)
    log_generic(ordersResponse);
}



main();
