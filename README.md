## Step 1: Install the packages

```bash
yarn install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start

# to open android
a

# to open ios
i

```

## Step 2: Start your Application (can skip if used command a or i above)

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using Yarn
yarn android
```

### For iOS

```bash
# using Yarn

yarn ios
```

⭐ The simulator is set to default for iphone 15 pro
If you want to change the simulator you can manually open a different simulator on xcode or run

```bash
npx react-native run-ios --simulator="{iphone simulator name}"
#ex) npx react-native run-ios --simulator="iPhone 15 Plus"
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Trouble shooting

If you have trouble opening the app you could try 

```bash
# android clean build
yarn clean-android

# ios clean build
yarn clean-ios
```

When you are running the android simulator and gives you adb error try running:
```bash
yarn adb-start-android
```
