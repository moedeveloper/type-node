import {TestEntity} from "../entities/test";
import {getManager} from "typeorm";

export class TestRepo{

    getTests(){
        return getManager().getRepository(TestEntity).find();
    }
}