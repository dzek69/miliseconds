import Milliseconds, { milli } from "./index.mjs";

describe("Milliseconds", () => {
    it("should have value method returning value", () => {
        const m = new Milliseconds();
        m.must.have.property("value");
        m.value.must.be.a.function();
        m.value().must.be.a.number();
    });

    it("should allow adding milliseconds", () => {
        const m = new Milliseconds();
        m.milliseconds(100);
        m.value().must.equal(100);
    });

    it("should allow adding seconds", () => {
        const m = new Milliseconds();
        m.seconds(6);
        m.value().must.equal(6000);
    });

    it("should allow adding minutes", () => {
        const m = new Milliseconds();
        m.minutes(6);
        m.value().must.equal(360000);
    });

    it("should allow adding hours", () => {
        const m = new Milliseconds();
        m.hours(1);
        m.value().must.equal(3600000);
    });

    it("should allow adding days", () => {
        const m = new Milliseconds();
        m.days(1);
        m.value().must.equal(86400000);
    });

    it("should allow adding weeks", () => {
        const m = new Milliseconds();
        m.weeks(2);
        m.value().must.equal(1209600000);
    });

    it("should allow adding months", () => {
        const m = new Milliseconds();
        m.months(1);
        m.value().must.equal(2592000000);
    });

    it("should allow adding years", () => {
        const m = new Milliseconds();
        m.years(1);
        m.value().must.equal(31536000000);
    });

    it("should allow chaining", () => {
        const m = new Milliseconds();
        m
            .milliseconds(100)
            .seconds(1)
            .minutes(1)
            .hours(2)
            .days(1)
            .weeks(2)
            .months(1)
            .milliseconds(200);
        m.value().must.equal(3895261300);
    });

    it("should allow adding floats", () => {
        {
            const m = new Milliseconds();
            m.seconds(0.5);
            m.value().must.equal(500);
        }

        {
            const m = new Milliseconds();
            m.days(2.5);
            m.value().must.equal(216000000);
        }
    });

    it("should has short syntax helper", () => {
        milli().days(1).milliseconds(101).value().must.equal(86400101);
    });

    it("is fun to write more tests", () => {
        {
            const m1 = new Milliseconds();
            const m2 = new Milliseconds();

            const ONE_HOUR = m1.hours(1).value();
            const SIXTY_MINUTES = m2.minutes(60).value();
            ONE_HOUR.must.equal(SIXTY_MINUTES);
        }
    });
});
