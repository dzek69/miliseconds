/* eslint-disable @typescript-eslint/no-magic-numbers */

/**
 * @class Milliseconds
 */
class Milliseconds {
    private _value: number;

    public constructor() {
        this._value = 0;
    }

    /**
     * Adds given amount of milliseconds the the value
     * @param {number} amount - milliseconds to add
     * @returns {Milliseconds}
     */
    public milliseconds(amount: number) {
        this._value += amount;
        return this;
    }

    /**
     * Adds given amount of seconds the the value
     * @param {number} amount - seconds to add
     * @returns {Milliseconds}
     */
    public seconds(amount: number) {
        return this.milliseconds(amount * 1000);
    }

    /**
     * Adds given amount of minutes the the value
     * @param {number} amount - minutes to add
     * @returns {Milliseconds}
     */
    public minutes(amount: number) {
        return this.seconds(amount * 60);
    }

    /**
     * Adds given amount of hours the the value
     * @param {number} amount - hours to add
     * @returns {Milliseconds}
     */
    public hours(amount: number) {
        return this.minutes(amount * 60);
    }

    /**
     * Adds given amount of days the the value
     * @param {number} amount - days to add
     * @returns {Milliseconds}
     */
    public days(amount: number) {
        return this.hours(amount * 24);
    }

    /**
     * Adds given amount of weeks the the value (week = 7 days)
     * @param {number} amount - weeks to add
     * @returns {Milliseconds}
     */
    public weeks(amount: number) {
        return this.days(amount * 7);
    }

    /**
     * Adds given amount of months the the value (month = 30 days)
     * @param {number} amount - months to add
     * @returns {Milliseconds}
     */
    public months(amount: number) {
        return this.days(amount * 30);
    }

    /**
     * Adds given amount of years the the value (year = 365 days)
     * @param {number} amount - years to add
     * @returns {Milliseconds}
     */
    public years(amount: number) {
        return this.days(amount * 365);
    }

    /**
     * Gets current value as number
     * @returns {number}
     */
    public value() {
        return this._value;
    }
}

const milli = () => (new Milliseconds());

export default Milliseconds;

export {
    milli,
};

