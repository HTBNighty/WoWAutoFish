const Rgb = require('../utils/rgb.js');
const Display = require('../utils/display.js');

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

const isRed = ([r, g, b]) =>  {
  return (r - g > 20 && r - b > 20) && (g < 100 && b < 100);
};

const isYellow = ([r, g, b]) => {
  return r - b > 200 && g - b > 200;
};

const isBrightRed = ([r, g, b]) => {
  return r - g > 250 && r - b > 250;
}


const checkAround = (point, rgb) => {
  return point.getPointsAround(2)
  .map((point) => rgb.colorAt(point))
  .every((point) => isRed(point));
}

class PlaceError extends Error {
  constructor() {
    super();
    this.message = `This place isn't good for fishing. Change the place and avoid any red and yellow colors in the "fishing zone".`;
  }
};

const fishingBot = (game, config) => {

  const zone = Display.create(game.workwindow.getView()).getRel(...config.zone);

  const getScreenData = () => {
    return {data: Array.from(game.workwindow.capture(zone).data.values()),
            zone};
  };

  const checkNotifications = (colors) => {
    let rgb = Rgb.from(getScreenData());
    return colors.some((color) => rgb.findColor(color));
  };


    const castFishing = async (state) => {
        let {fishingKey, castDelay} = config;
        game.keyboard.sendKey(fishingKey, delay);
        if(state.status == 'initial') {
          if(checkNotifications([isBrightRed, isYellow])) {
            throw new PlaceError();
          } else {
            state.status = 'working';
          }
        }
        await sleep(castDelay);
    };

    const findBobber = () => {
      return Rgb.from(getScreenData()).findColor(isRed, checkAround);
    };

    const checkBobber = async (bobber, state) => {
      let {maxFishTime} = config;
      let startTime = Date.now();

      while(state.status == 'working' && Date.now() - startTime < maxFishTime) {
        if(!isRed(game.workwindow.colorAt(bobber.x, bobber.y, 'array'))) {
         let redAround = bobber.getPointsAround()
         .find((point) => isRed(game.workwindow.colorAt(point.x, point.y, 'array')));

          if(!redAround) {
            return bobber;
          } else {
            bobber = redAround;
          }
        }

        await sleep(50);
      }
    };

    const hookBobber = async (bobber) => {
      await game.mouse.moveCurveToAsync(bobber.x, bobber.y, 2, 150);
      game.mouse.click('right', delay);

      let timeAfterHook = 1000;

      await sleep(250);
      if(!checkNotifications([isYellow])) {
        return true;
      } else {
        timeAfterHook = 2000;
      }

      await sleep(timeAfterHook + Math.random() * 1000);
    };


     return {
       castFishing,
       findBobber,
       checkBobber,
       hookBobber
     }
};

module.exports = fishingBot;