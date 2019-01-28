cd /Users/addisonmoore/Google_Drive/_web-projects/General\ Assembly/wdi/projects/PlateTracker/PlateTracker/Android

./gradlew clean

cd ..

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd /Users/addisonmoore/Library/Android/sdk/platform-tools

./adb kill-server
./adb start-server

cd /Users/addisonmoore/Google_Drive/_web-projects/General\ Assembly/wdi/projects/PlateTracker/PlateTracker

react-native run-android
react-native log-android
