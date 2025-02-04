export type ApiRoute = {
  [ key: string]: RequestHandler
}

export type ApiRequestHandler = (req: any) => {};
