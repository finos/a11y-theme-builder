# Script that pulls the latest version of the SDK into your ThemeBuilder
# To be used if there are any issues arise with pulling the latest SDK in your ThemeBuilder build
CUR_DIR=`pwd`
SDK=a11y-theme-builder-sdk
cd ../../$SDK
git checkout main
git pull --rebase --autostash
npm run build-lib
cd $CUR_DIR
rm -rf src/ui/node_modules/.cache
rm -rf src/ui/node_modules/$SDK
cp -R ../../$SDK src/ui/node_modules
