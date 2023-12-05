import { SampleEntity } from '#cds-models/SampleService';
import { SampleEnum } from "#cds-models/db";
import cds from "@sap/cds";

export class SampleService extends cds.ApplicationService {
    async init() {
        this.after("READ", SampleEntity, (e) => {
            if (e.prop === SampleEnum.a) {
                console.log("a")
            } else {
                console.log("b")
            }
        })
    }
}