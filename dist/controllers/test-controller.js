"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_repository_1 = require("../repositories/test-repository");
class TestController {
    _getTests() {
        let testRepo = new test_repository_1.TestRepo();
        console.log("controller is here");
        return testRepo.getTests();
    }
}
exports.TestController = TestController;
// export let getTests = async (req: Request, res: Response) => {
//     let testRepo: TestRepo = new TestRepo();
//     console.log("Recieved getTests ==> GET");
//     testRepo.getTests().then((result:any)=>{
//       console.log("Result: " + result);
//       res.send(result);
//     });
// }; 
//# sourceMappingURL=test-controller.js.map