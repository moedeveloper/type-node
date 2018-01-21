"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("../entities/test");
const typeorm_1 = require("typeorm");
class TestRepo {
    getTests() {
        return typeorm_1.getManager().getRepository(test_1.TestEntity).find();
    }
}
exports.TestRepo = TestRepo;
//# sourceMappingURL=test-repository.js.map