import { HttpRequest, HttpResponse } from "@angular/common/http";
import { ApiRequestHandler, ApiRoute } from "./mock-api.types";

export default class MockApi
{
  private routeGET: ApiRoute = {}
  private routePOST: ApiRoute = {}

  public get(route: string, handler: ApiRequestHandler)
  {
    this.routeGET[route] = handler
  }

  private matchRoute(route: string, url: string): boolean {

    let cleanedUrl = url.startsWith('/api/') ? url.substring(5) : url;
    cleanedUrl = cleanedUrl.startsWith('/api/') ? cleanedUrl.substring(4) : cleanedUrl;

    const routeParts = route.split('/');
    const urlParts = cleanedUrl.split('/');

    if (routeParts.length !== urlParts.length) {
      return false;
    }

    return routeParts.every((part, index) => part.startsWith(':') || part === urlParts[index]);
  }

  response(req: HttpRequest<unknown>) {

    let route = undefined

    if( req.method == "GET")
    {
      route = Object.keys(this.routeGET).find( route => this.matchRoute(route, req.url) )
    }

    if( route )
    {
      return new HttpResponse({ status: 200, body: this.routeGET[route](req) });
    }
    // for (const route in this.routeGET) {
    //   console.log( req.url,  this.matchRoute(route, req.url) )
    //   if (this.matchRoute(route, req.url)) {
    //     return new HttpResponse({ status: 200, body: this.routeGET[route](req) });
    //   }
    // }

    return new HttpResponse({ status: 404, body: { error: 'Not Found' } });
  }
}
