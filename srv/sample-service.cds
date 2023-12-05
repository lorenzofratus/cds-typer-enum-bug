using {db} from '../db/schema';

service SampleService {
    entity SampleEntity as projection on db.SampleEntity
}