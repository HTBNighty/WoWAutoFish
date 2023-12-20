const elt = require("./utils/elt.js");
const wrapInLabel = require("./utils/wrapInLabel.js");

const renderBobberImg = (bobberColor, autoTh) => {
  return elt(`img`, {className: `threshold_canvas ${autoTh ? `bobberColorSwitch_disabled` : ``}`, src:`img/bobber_${bobberColor}.png`, height: 49});
};

const renderThreshold = ({ threshold, bobberColor, autoTh, game }) => {
	if(threshold < 1) threshold = 1;
	else if(threshold > 150) threshold = 150;
  const bobberColorSwitch = elt(`radio`, { className: `bobberColorSwitch ${autoTh ? `bobberColorSwitch_disabled` : ``}`,
                                name: `bobberColor`,
                                title: `Switch between blue and red feathers.`,
                                value: bobberColor,
                                style: `background-image: linear-gradient(to right, ${bobberColor == `red` ? `rgb(100, 0, 0), red` : `rgb(0, 90, 200), rgb(0, 0, 100)`});`
                              }, elt(`div`, {className: `switch_thumb ${bobberColor == `red` ? `switch_thumb_left` : `switch_thumb_right`}`}), elt(`span`, {className: `bobberColorSwitchText`}, `${bobberColor == `red` ? `Red Feather` : `Blue Feather`}`));
if(game == `Vanilla (splash)`) autoTh = false;
const autoThSwitch = elt(`radio`, { className: `autoTh`,
                              name: `autoTh`,
                              title: `Switch between auto and manual modes.`,
                              value: autoTh,
                              disabled: game == `Vanilla (splash)`,
                              style: `background-image: linear-gradient(to right, ${autoTh ? `#663c20, #fe954d` : `#a8a8a8, #4b4b4b`});`
                            }, elt(`div`, {className: `switch_thumb ${autoTh ? `switch_thumb_left` : `switch_thumb_right`}`}), elt(`span`, {className: `bobberColorSwitchText`},  `${autoTh ? `Auto` : `Manual`}`));

  const range = elt(`input`, { type: `range`, min: 1, max: 150, value: threshold, name: `threshold`, disabled: autoTh, className: `${autoTh ? `threshold_disabled` : ``}` });
  if(bobberColor == `blue`) {
    document.styleSheets[0].rules[81].style.backgroundImage = "linear-gradient(to right, rgb(0, 0, 100), rgb(0, 90, 200))"
  } else {
    document.styleSheets[0].rules[81].style.backgroundImage = "linear-gradient(to right, rgb(100, 0, 0), rgb(250, 0, 0))"
  }

  const number = elt(`input`, { type: `number`, className: `threshold_number_input`, value: threshold, disabled: autoTh, name: `threshold` });

  let bobberImg = elt(`div`, {id: `bobber`, style: `background-color: ${bobberColor == `blue` ? `rgb(0, 0, ${150 + Number(threshold)})` : `rgb(${150 + Number(threshold)}, 0, 0)`}`}, elt(`div`, {id: `bobberHandle`, style: `background-color: ${bobberColor == `blue` ? `rgb(0, 0, ${150 + Number(threshold)})` : `rgb(${150 + Number(threshold)}, 0, 0)`}`}));
  let waterImg = elt(`div`, {id: "water"}, bobberImg);

  const bobberContainer = elt(`div`, { className: `bobberContainer` }, waterImg, number, elt(`div`, {id: `grass`}));
  return elt(`div`, { className: `thresholdRange` }, bobberColorSwitch, range, autoThSwitch, bobberContainer);
};

const renderApplyFatigue = ({applyFatigue = false}) => elt('input', {name: "applyFatigue", type: "checkbox", checked: applyFatigue});
const renderApplyFatigueEvery = ({applyFatigue = false, applyFatigueEvery = {from: 0, to: 0}}) => {
  return elt(`div`, {"data-collection": `applyFatigueEvery`}, elt(`span`, {className: `option_text`}, `from:`),
  elt('input', {type: `number`, name: `from`, value: applyFatigueEvery.from, disabled: !applyFatigue}), elt(`span`, {className: `option_text`}, `to:`),
  elt('input', {type: `number`, name: `to`, value: applyFatigueEvery.to, disabled: !applyFatigue})
  );
};
const renderApplyFatigueRate = ({applyFatigue = false, applyFatigueRate = 0.5}) => {
  const winRange = elt(`input`, {type: `number`, disabled: !applyFatigue, value: applyFatigueRate, name: "applyFatigueRate"})
  const range = elt('input', {type: `range`, step: 0.1, max: 10, disabled: !applyFatigue,  className: applyFatigue ? `` : `threshold_disabled`, value: applyFatigueRate, oninput: function() {winRange.value = this.value}, name: "applyFatigueRate"});
  return elt(`div`, null, range, winRange);
}

const renderGameNames = ({game}) => {
  const gamesOfficial = [
    `Retail`,
    `LK Classic`,
    `Classic`
  ];

  const gamesPrivate = [
    "Leg",
    "MoP",
    "Cata",
    "LK Private",
    "TBC",
    "Vanilla",
    "Vanilla (splash)"
  ];

  const gamesCustom = ["Turtle WoW"];

  return elt(
    "select",
    { name: "game", className: "option game-option" },
    elt(`optgroup`, {label: `Official-like`}, ...gamesOfficial.map((name) =>
          elt("option", { selected: name == game }, name)
        )),
    elt(`optgroup`, {label: `Private-like`}, ...gamesPrivate.map((name) =>
          elt("option", { selected: name == game }, name)
        )),
    elt(`optgroup`, {label: `Custom-like`}, ...gamesCustom.map((name) =>
         elt("option", { selected: name == game }, name)
       ))
  );
};

const renderTimer = ({timer}) => {
  return elt(
    "input",
    { type: "number", min: "0", value: timer, name: "timer", title: ""},
    `(min)`
  );
};

const renderLures = ({lures}) => {
  return elt("input", {
    type: "checkbox",
    className: "option",
    checked: lures,
    name: "lures",
  });
};
const renderLuresKey = ({lures, luresKey}) => {
  let key = elt('input', {type: 'text', value: luresKey, disabled: !lures, name: "luresKey"});
  key.setAttribute(`readonly`, `true`);
  return key;
};

const renderStopKey = ({stopKey}) => {
  let key = elt('input', {type: 'text', value: stopKey, name: "stopKey"});
  key.setAttribute(`readonly`, `true`);
  return key;
};

const renderPoleKey = ({lures, game, intKey, useInt}) => {
  let key = elt('input', {type: 'text', value: intKey, disabled: !useInt, name: "intKey"});
  key.setAttribute(`readonly`, `true`);

  const checkbox = elt(`input`, {
    type: `checkbox`,
    disabled: !(game == `Retail` || game == `Classic` || game == `LK Classic`),
    checked: !(game == `Retail` || game == `Classic` || game == `LK Classic`) ? false : useInt,
    style: `margin-right: 7px`, name: "useInt"
    });

  const container = elt(`div`, null, checkbox, key)
  return container;
};

const renderLuresDelay = ({lures, luresDelayMin}) => {
  return elt('input', {type: 'number', value: luresDelayMin, disabled: !lures, name: "luresDelayMin"});
};
const renderFishingKey = ({fishingKey}) => {
  let key = elt('input', {type: 'text', value: fishingKey, name: "fishingKey"});
  key.setAttribute(`readonly`, `true`);
  return key;
};

const renderAdvancedSettings = () => {
  return elt('input', {type: 'button', name:"advancedSettings", value: "Advanced Settings", className: "advanced_settings_button"});
};

const renderFishingZone = () => {
  return elt('input', {type: 'button', name:"fishingZone", value: "Fishing Zone", className: "advanced_settings_button"});
};

const renderChatZone = () => {
  return elt('input', {type: 'button', disabled: true, value: "Chat Zone", className: "advanced_settings_button_disabled"});
};

const renderDetectionZone = () => {
  return elt('input', {type: 'button', disabled: true, value: "Detection Zone", className: "advanced_settings_button_disabled"});
};

const renderMultipleWindows = () => {
  return elt(`div`, {className: `premium_lock premium_lock_main`, id: `link`, url: `https://youtu.be/ih-xoQcByz8`})
};

const renderAfkmode = () => {
  return elt(`div`, {className: `premium_lock premium_lock_main`, id: `link`, url: `https://youtu.be/lQi6fSxMyL0`})
};

const renderSettings = (config) => {
return elt(
    "section",
    { className: "settings" },
    elt(
      "div",
      { className: "settings_section" },
      wrapInLabel(
        "",
        renderGameNames(config),
        `Choose the version of the game you want the bot to work on.`
      ),
      wrapInLabel(
        "Fishing Key: ",
        renderFishingKey(config),
        `Assign the same key you use for fishing. If you use /castFishing instead, then you should assign a key for fishing.`
      ),
      wrapInLabel(
        "Int. Key: ",
        renderPoleKey(config),
        `Exclusively for Retail. Use interaction key instead of mouse for catching.`
      ),
      wrapInLabel(
        "Stop Key: ",
        renderStopKey(config),
        `Assign a key that you will use to stop the bot.`
      ),
      wrapInLabel(
  "Alt-Tab Fishing: ",
  elt(`div`, {className: `premium_option`}, renderAfkmode()),
  `ONLY ON DIRECTX 11. The bot will automatically alt+tab after it casts (bringing back the previous window) and automatically focus the window of the game when it needs to catch. If you use your mouse too much during Alt-Tab Fishing the whitelist feature might be unstable. `,
  'premium_label'
),
wrapInLabel(
  "Multiple Fishing: ",
  elt(`div`, {className: `premium_option`}, renderMultipleWindows()),
  `ONLY ON DIRECTX 11. If you want to use multiple windows check this option. You need to launch every window and configure them properly, make sure every window is in DirectX 11 mode. This option uses a different library to analyze your screen, you can check it even for one window if for some reason the default way doesn't work for you.`,
  'premium_label'
),
    ),
    elt(
      "div",
      { className: "settings_section" },
      wrapInLabel("", renderFishingZone(config)),
      wrapInLabel("", renderChatZone(config)),
      wrapInLabel("", renderDetectionZone(config)),
      wrapInLabel("", renderAdvancedSettings(config))),
    elt("p", {className: 'settings_header'}, "🚧"),
    elt(
      "div",
      { className: "settings_section threshold_settings" },
      wrapInLabel("",
        renderThreshold(config),
        `The bot will ignore all red/blue colors below this value. The higher the value the more red/blue colors the bot will ignore. The lower the value the more red/blue colors the bot will find. Min value: 10, max value: 150.  Increase this value if the bot can't pass the preliminary checks for red/blue colors in the fishing zone and there's nothing except the bobber there (e.g. red bottom in Durotar). Decrease this value, if the bobber is very dark and the bot can't find it (e.g. bad lighting, bad weather).`
      ),
    )
  );
}

module.exports = renderSettings;
