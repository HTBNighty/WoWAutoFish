const Stats = require("./stats.js");
const { convertMs } = require("../utils/time.js");

const runBot = async (bot, log, state) => {
  const { castFishing, findBobber, checkBobber, hookBobber } = bot;
  const stats = new Stats();
  findBobber.attempts = 0;

  do {
    log.send(`Casting fishing...`);
    await castFishing(state);
    log.send(`Looking for the bobber...`);
    let bobber = await findBobber();
    if (bobber) {
      log.ok(`Found the bobber!`);
      findBobber.attempts = 0;
    } else {
      log.err(`Can't find the bobber, recast.`);
      if (++findBobber.attempts == 3) {
        throw new Error(
          `Have tried 3 attempts to find the bobber and failed: this place isn't good for fishing.`
        );
      }
      continue;
    }

    log.send(`Checking the hook...`);
    if ((bobber = await checkBobber(bobber, state))) {
      let isHooked = await hookBobber(bobber);
      if (isHooked) {
        stats.caught++;
        log.ok(`Caught the fish!`);
        continue;
      }
    }

    if (state.status == "working") {
      stats.miss++;
      log.warn(`Missed the fish!`);
    }
  } while (state.status == "working");

  log.ok(stats.showStats());
  log.ok(`Time Passed: ${convertMs(Date.now() - state.startTime)}`);
};

module.exports = runBot;