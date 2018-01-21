import {TestEntity} from "../entities/test";
import{TestRepo} from "../repositories/test-repository";
import { Request, Response } from "express";

export class TestController{
    

    _getTests(){
        let testRepo: TestRepo = new TestRepo();
        console.log("controller is here");
        return testRepo.getTests();
        
    }
}

// export let getTests = async (req: Request, res: Response) => {

//     let testRepo: TestRepo = new TestRepo();
  
//     console.log("Recieved getTests ==> GET");
  
//     testRepo.getTests().then((result:any)=>{
//       console.log("Result: " + result);
//       res.send(result);
//     });
// };