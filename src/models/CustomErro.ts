export class CustomError extends Error {
   constructor(message: string){
        super(message)
        this.name = 'APIError';
    }
}

export class APIError extends Error {

  constructor(message: string) {
    super(message);

    this.name = "APIError";
  }
}