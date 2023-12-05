namespace db;

type SampleEnum : String(3) enum {
    a = 'AAA';
    b = 'BBB';
}

entity SampleEntity {
    prop: SampleEnum;
}
