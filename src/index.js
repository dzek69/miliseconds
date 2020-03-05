/* eslint-disable no-magic-numbers */

/**
 * @class Milliseconds
 */
class Milliseconds {
    constructor() {
        this._value = 0;
    }

    /**
     * Adds given amount of milliseconds the the value
     * @param {number} amount - milliseconds to add
     * @returns {Milliseconds}
     */
    milliseconds(amount) {
        this._value += amount;
        return this;
    }

    /**
     * Adds given amount of seconds the the value
     * @param {number} amount - seconds to add
     * @returns {Milliseconds}
     */
    seconds(amount) {
        return this.milliseconds(amount * 1000);
    }

    /**
     * Adds given amount of minutes the the value
     * @param {number} amount - minutes to add
     * @returns {Milliseconds}
     */
    minutes(amount) {
        return this.seconds(amount * 60);
    }

    /**
     * Adds given amount of hours the the value
     * @param {number} amount - hours to add
     * @returns {Milliseconds}
     */
    hours(amount) {
        return this.minutes(amount * 60);
    }

    /**
     * Adds given amount of days the the value
     * @param {number} amount - days to add
     * @returns {Milliseconds}
     */
    days(amount) {
        return this.hours(amount * 24);
    }

    /**
     * Adds given amount of weeks the the value (week = 7 days)
     * @param {number} amount - weeks to add
     * @returns {Milliseconds}
     */
    weeks(amount) {
        return this.days(amount * 7);
    }

    /**
     * Adds given amount of months the the value (month = 30 days)
     * @param {number} amount - months to add
     * @returns {Milliseconds}
     */
    months(amount) {
        return this.days(amount * 30);
    }

    /**
     * Adds given amount of years the the value (year = 365 days)
     * @param {number} amount - years to add
     * @returns {Milliseconds}
     */
    years(amount) {
        return this.days(amount * 365);
    }

    /**
     * Gets current value as number
     * @returns {number}
     */
    value() {
        return this._value;
    }
}

const milli = () => (new Milliseconds());

export default Milliseconds;

export {
    milli,
};

