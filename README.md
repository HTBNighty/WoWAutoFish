<p align="center"> <img src="app/img/logo.png" width="400px"> </p>
<div align="center">

 <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/olesgeras/autofish"> [![GitHub license](https://img.shields.io/github/license/olesgeras/AutoFish)](https://github.com/olesgeras/AutoFish/blob/4c5f0fdb5af0f1378f3318d563c5738fa7580e2f/LICENSE)
<a href="https://youtu.be/A3W8UuVIZTo"><img alt="" src="https://img.shields.io/youtube/views/A3W8UuVIZTo?style=social"></a>

</div>

## Table of Contents :page_with_curl:

- [Fishing bot](#fishing-bot-fish)
- [Disclaimer](#disclaimer-warning)
- [Guide](#guide-blue_book)
  - [Hints and Issues](#hints-and-issues)
  - [Intensity](#intensity)
  - [Sensitivity](#sensitivity)
  - [Interactive Key](#interactive-key)
- [Applying Lures](#applying-lures-pushpin)
- [Interactive key](#interactive-key)
- [Download](#download-open_file_folder)
- [AutoFish Premium](#autofish-premiumcrown)

## Fishing bot :fish:

This is a fishing bot for wow-like fishing logic (when a model of a bobber has red/blue feather and plunging animation, for example with some tweaks in the code it can work even with Minecraft). It is built using the [Electron](https://github.com/electron/electron), [keysender](https://github.com/Krombik/keysender) and [nut.js](https://github.com/nut-tree/nut.js) libraries to analyze the screen and automate the fishing process in a manner that mimics human behavior, and also [tesseract.js](https://github.com/naptha/tesseract.js) for loot filtering.

This is a so-called "pixel bot": it works with pixels only, without modifying the game's memory, addons or additional programs.

<p align="center">
<img src="guide_img/UI.jpg" width="640">
</p>

For video review you can watch this (pretty old) <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [AutoFish 1.12](https://youtu.be/A3W8UuVIZTo)

## Disclaimer :warning:

**This small project was developed for educational purposes ONLY, aiming to explore the feasibility of creating a functional gaming bot using web-development technologies.**

**The software provided should NEVER be used with real-life applications, games, servers etc.**

**This software is not designed to be "undetectable" in any way, nor was it ever intended for such purposes. All randomness functionality is added for educational purposes only.**

**No guarantees or assurances can be made regarding the functionality or outcomes of the bot, you assume full responsibility for any outcomes that may arise from using this software.**.

## Guide :blue_book:

1. Launch the game and the bot.
2. Choose the game you want the bot to work with.

<p align="center">
<img src="guide_img/chooseGame.jpg">
</p>

3. Set up your **Fishing Zone** by clicking the **Set Fishing Zone** button. Adjust the size and position of the **Fishing Zone** window to exclude any reddish or bluish elements (depending on the color you selected). Keep in mind that **Fishing Zone** is an overlay window, so it will also recognize colors from your character and the game's user interface, including texts and health bars.

<p align="center">
<img src="guide_img/chooseFishZone.jpg">
</p>

4. Set up your **Fishing Key** by clicking on Fishing Key section and then pressing the key you want to bind. Your Fishing Key is the same key you bind your fishing skill to in the game.

<p align="center">
<img src="guide_img/chooseFishKey.jpg">
</p>

5. You can press **Advanced Settings** and find there a lot of useful features and options.

<p align="center">
<img src="guide_img/advancedSettings.jpg">
</p>

6. Press the Start button and don't use your mouse and keyboard.
7. To stop the bot, press your designated stop key (default: delete).

### Hints and Issues

- Avoid aggro mobs (with red names) in the Fishing Zone, if you use red color.
- If the bot misses too much or confuses your fishpole for a bobber, fish in 1st person view.
- The bot works only with default UI: no UI scaling, no UI addons and so on.  
- If the bot doesn't cast, though key is correct, launch it as admin.
- The bot works only on a primary monitor.
- Different camera directions can affect the brightness, size, and visibility of the bobber.
- You can Adjust gamma, brightness, and contrast settings to enhance the brightness of the bobber.
- The bot will auto-confirm lures application if such confirmation is needed.  
- The bot can auto-confirm *Soulbound* items. For that go to Advanced Settings and turn this option on.
- If you use an addon that removes loot window (like Fishing Buddy), you can set *Loot Window Closing Delay* value to 0 to make it work faster.
- The bot doesn't work properly on Turtle WoW and never will, unless you use sound detection available for Premium.
- Because it's a "pixel" bot, and such pixel data heavily depends on conditions, the bot usually works at 90% efficiency.  

### Intensity

*If in manual mode*

Intensity value serves as a color threshold below which the bot will ignore all the corresponding colors.

Increasing the intensity value will make the bot recognize fewer red colors, while decreasing this value will cause the bot to recognize more red colors on the screen.

Simply put: decrease this value, if the bot can't find the bobber (e.g. at night, bad weather). Increase this value if you want the bot to ignore some reddish/bluish elements in the Fishing Zone and recognize only the bobber.`

### Sensitivity

*If in manual mode*

If the bot clicks too early, decrease this value. If the bot clicks too late or doesn't click at all, increase this value.

### Interactive key

You can fish with interactive key in the game. If you want the bot to use it instead of mouse movement, turn on Int. Key option and assign the same key you use for interactive key in the game.

<p align="center">
<img src="guide_img/intkey.jpg" align="center">
</p>

To make the interactive key work, you should use this commands (write them in the chat and press enter, one by one):
```
/console SoftTargetInteractArc 2  - This will allow you to interact with the bobber no matter which way you are facing.
/console SoftTargetInteractRange 30  - This increases the interaction range to 30 yards. Adjust to your needs
```

## Applying Lures :pushpin:

Go to **Advanced Settings** and check **Use Lures**. Bind your key to the same key you bind your lures or **macro**.

<p align="center">
<img src="guide_img/lures.jpg" align="center">
</p>

For **Retail** and **Classic/Vanilla** you need to use a special macro that will apply the lures onto your fishing pole. The names of the lures and fishing pole here only an example, you need to substitute them for your names:

**Retail**:

```
/use Aquadynamic Fish Attractor
/use Big Iron Fishing Pole
```

**Classic**:

```
/equip Big Iron Fishing Pole
/use Aquadynamic Fish Attractor
/use 16
/click StaticPopup1Button1
```

**Vanilla**:

```
/script UseAction(your lures key);
/script PickupInventoryItem(16);
/script ReplaceEnchant();
```
Or
```
/script UseContainerItem(0,2); PickupInventoryItem(16);
```

## AutoFish Premium	:crown:

AutoFish Premium is just my token of gratitude to you for your support.

<p align="center">
<img src="guide_img/Premium_UI.jpg" width="640">
</p>

**Premium Features/Content:**
- [Remote Control](#remote-control-iphone)
- [Multiple Fishing Mode](#multiple-fishing-mode-rocket)
- [Alt-Tab Fishing Mode](#alt-tab-fishing-mode-sleeping)
- [Sound Detection](#sound-detection-loud_sound)
- [Motion Detection](#motion-detection-runner)
- [Additional Actions](#additional-actions-mage)
- [Mount Selling](#mount-selling-elephant)
- [Random camera/character movements](#random-cameracharacter-movements-robot)
- [Arduino Control](#arduino-control-joystick)
- Profiles

## Remote Control :iphone:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

1. Get the token from [BotFather](https://t.me/BotFather) by using /newbot command and following the instruction. Imagine some long and random name for the bot so that someone won't accidentally join your bot and gain control over your fishing process.
2. Paste the token to **Telegram token** input field in **Remote Control** section in the **Advanced Settings** and press enter.

<p align="center">
<img src="guide_img/tmtoken.jpg" align="center">
</p>

3. Press **Connect** button and wait until the name of the button changes to either **done** or **error* (*might take awhile*).
4. Open the bot in your Telegram and either press /start or write /start command.
5. If evertyhing is OK, the bot will reply with:

<p align="center">
<img src="guide_img/tmmenu.jpg" width="416px" align="center">
</p>

6. Now set your **Chat Zone** as on the screenshot below by pressing **Set Chat Zone** button on the main window of the AutoFish.

7. If you want to make the bot notify you about any errors or whipser messeges, *you need to start it from Telegram* (*not by pressing Start on the bot's interface*). Whisper detection will work much better and reliable if you **turn off all the other chat messages**.

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Telegram remote control Test Video](https://youtu.be/aKulvFK6ubg)

## Multiple Fishing Mode :rocket:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

Multiple Fishing mode feature enables you to fish simultaneously in multiple game windows, with support for up to 4 windows. The bot will switch between the game windows as needed for casting and catching fish.

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Multiple Windows Test Video](https://youtu.be/ih-xoQcByz8)

## Alt-Tab Fishing Mode :sleeping:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

Alt-Tab Fishing Mode will simulate so-called "afk fishing": the bot will focus the window only when your character needs to cast, catch or perform any action and then it will lose focus and return you to the previous window by pressing alt-tab.

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Alt-Tab Fishing Test Video](https://youtu.be/lQi6fSxMyL0)

## Sound Detection :loud_sound:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

<p align="center">
<img src="guide_img/sound-detection.jpg" align="center">
</p>

Sound Detection is an alternative to pixel recognition logic. The bot will hook the bobber only after "splash" sound and won't rely on checking the animation of the bobber plunging.

With both Int. Key and Sound Detection turned on you can be completely independent from Threshold and Fishing Zone options. If you don't use Int. key or the game doesn't support it, the bot still needs to find a bobber first but checking will be done by sound recognition if you turn on Sound Detection option.

Before using sound detection turn off Music and Ambient Sounds in the game, leave only Sound Effects. Your volume should be at normal/default level. Try to find a place secluded from the sounds made by other players to avoid false detections.

You can also use Alt-Tab Fishing Mode in DX12 now, with Int.Key + Sound Detection the bot will focus the window only when it needs to cast and when it detects splash sound (turn on **Sound in Background** for that).

**Warning!** Sound Detection feature might not work with some audio devices, in that case you need to switch to another device (e.g. you are using headphones and sound detection doesn't work, then plug in speakers and test again).

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Sound Detection Test Video](https://youtu.be/ZggOy8tA32A)

## Motion Detection :runner:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

<p align="center">
<img src="guide_img/motiondetection.jpg" align="center">
</p>

You can set a zone for motion detection and the bot will notifiy you via Telegram of any events happening in this zone/area. It will also send a screenshot of the motion occured. This feature might help against griefing.  

## Additional Actions :mage:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

<p align="center">
<img src="guide_img/additionalactions.jpg" align="center">
</p>

You will be able to add as many additional actions which require repetition as you want (e.g. applying additional lures or using different bobbers).

## Mount Selling :elephant:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

<p align="center">
<img src="guide_img/mammoth.jpg" align="center">
</p>

As an alternative to filtering you can use a trader on your mammoth mount to sell all the junk items during the fishing. The bot will summon your mount, target your trader, interact with it by using interaction key in the game, unsummon the mount and go on fishing.

Because of the novelty of the interaction key this feature is available only for Retail.

Depends on the mount the name of your trader might be different, so change the default value.

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Mammoth Selling Test Video](https://youtu.be/zY2LqAPszdg)

## Random Camera/Character Movements :robot:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

<p align="center">
<img src="guide_img/rngMove.jpg" align="center">
</p>

The bot will randomly move and change your camera direction from time to time within the provided radius.

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Random Camera/Character Movements Test Video](https://youtu.be/o1hU3fNn4uk)

## Arduino Control :joystick:

*This feature is available only for [Premium version](https://www.buymeacoffee.com/jsbots/e/96734) of the app*

<p align="center">
<img src="guide_img/arduino.jpg" align="center">
</p>

The bot is able to connect to your Arduino Board and use it to emulate a mouse/keyboard device, it will look like a real keyboard or mouse to the OS and the game. What you need to do to make it possible:

1. Get an Arduino with an ATmega32U4 on board (any cheap copies for 2-3$ will do too, you can find them on Chinese online markets).
2. Connect it to your computer.
3. Install [Arduino IDE](https://www.arduino.cc/en/software).
4. Click **New Sketch** and replace everything there with this sketch: [Arduino Sketch](https://github.com/jsbots/Clicker/blob/main/clicker_sketch/clicker_sketch.ino).
5. Click **Tools** -> **Port** and choose the port your Arduino Board connected to.
6. Click **Sketch** -> **Upload** and wait until the code uploads to your board.
7. Launch AutoFish, click **Advanced Settings** turn on **Use Arduino Board** option and choose the port your Arduino Board connected to, press **Connect** button.

Watch <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="20"> [Arduino Control Test Video](https://youtu.be/yE-qARS73oo)

## Download :open_file_folder:

<p align="center">
<a href="https://www.buymeacoffee.com/jsbots"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=jsbots&button_colour=FFDD00&font_colour=000000&font_family=Bree&outline_colour=000000&coffee_colour=ffffff" /></a>
</p>

AutoFish 2.8.2 Public: [Download](https://www.buymeacoffee.com/jsbots/e/95380)

AutoFish 2.10.2 Premium: [Download](https://www.buymeacoffee.com/jsbots/e/96734)

If you choose to download the executable file, it functions as a setup file that installs the bot in the following directory: *c:/users/your_user/App Data/Local/random_folder/*. Additionally, a shortcut with a randomly generated name will be created on your desktop.

If you wish to uninstall the bot, you can do so through the Windows Settings. The uninstaller will have the same name as the shortcut on your desktop.
