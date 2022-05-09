const GameZone = require('../controls/gameZone.js');


class FishingZone extends GameZone {
  constructor(workwindow, zone) {
    super(workwindow, zone);
  }

  async checkNotifications(...colors) {
    return colors.some((color) => super._getRgb().findColor(color));
  }

  findBobber(color) {
    const looksLikeBobber = (point, rgb) => {
      return point.getPointsAround(2)
      .map((point) => rgb.colorAt(point))
      .every((point) => color(point));
    };

    return super.findColor(color, looksLikeBobber);
  }

  static from(workwindow, zone) {
    return new FishingZone(workwindow, zone);
  }
}

module.exports = FishingZone;