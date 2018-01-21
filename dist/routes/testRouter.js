"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import * as testController from "../controllers/test-controller";
const test_repository_1 = require("../repositories/test-repository");
class TestRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Heroes.
     */
    getAll(req, res, next) {
        console.log("am in getall");
        let testRepo = new test_repository_1.TestRepo();
        console.log("Recieved getTests ==> GET");
        testRepo.getTests().then((result) => {
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
exports.TestRouter = TestRouter;
// Create the HeroRouter, and export its configured Express.Router
const testRoute = new TestRouter();
testRoute.init();
exports.default = testRoute.router;
//# sourceMappingURL=testRouter.js.map