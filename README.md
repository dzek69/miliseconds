# Miliseconds - `Milliseconds` with a typo

Tired of reading math magic in the code? `2.5 * 60 * 60 * 24 * 1000` seems unreadable?
We've got you covered!
Replace your maths in constants defining intervals, timeouts, delays, durations with super-readable code!

## Usage

```javascript
import Mili from "miliseconds"

const interval = (new Mili).hours(2.5).value(); // the same as 1000 * 60 * 60 * 2.5
const timeout = (new Mili).seconds(30).value(); // the same as 1000 * 30
const delay = (new Mili).milliseconds(200).value(); // 200
const duration = (new Mili).seconds(1).milliseconds(300).value(); // 1300

const weirdInterval = (new Mili).days(5.5).seconds(12).value(); // the same as 1000 * 60 * 60 * 24 * 5.5 + 12 * 1000
const youWillRestartYourServerSoonerThanThis = (new Mili).years(1).value(); // the same as ... days(365)!
```

### Shorthand syntax for creating an instance

```javascript
import { milli } from "miliseconds"

const interval = milli().hours(5).value();
```

### CommonJS

```javascript
const Mili = require("miliseconds/dist").default
```

## Docs

Documentation, including available methods and their meaning is available here:
[miliseconds](https://dzek69.github.io/miliseconds)

## Alternatives

> Before creating this library I was looking for something similar, but couldn't find anything. I made a typo when
searching on npm and found nothing so I decided to create my own. But after the code was ready I've found one
alternative (but much simpler, with some magic values in the code, without unit tests, so I decided to publish my own).
>

- [milliseconds](https://www.npmjs.com/package/milliseconds) - without a typo

If you know any other - tell me, I will add it here.

## License

MIT
