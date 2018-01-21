import {Router, Request, Response, NextFunction} from 'express';
//import * as testController from "../controllers/test-controller";

import{TestRepo} from "../repositories/test-repository";


export class TestRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    console.log("am in getall");

    let testRepo: TestRepo = new TestRepo();
  
    console.log("Recieved getTests ==> GET");
  
    testRepo.getTests().then((result:any)=>{
      console.log("Result: " + result);
      res.send(result);
    });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const testRoute = new TestRouter();
testRoute.init();

export default testRoute.router;