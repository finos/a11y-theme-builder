# Script that pulls the latest version of the SDK into your ThemeBuilder
# To be used if there are any issues arise with pulling the latest SDK in your ThemeBuilder build
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
BRANCH=main
if [ $# -gt 0 ]; then
   BRANCH=$1
fi
SDK=a11y-theme-builder-sdk
cd $SCRIPT_DIR/../../$SDK
git checkout $BRANCH
git pull --rebase --autostash
npm run build-lib
cd $SCRIPT_DIR
rm -rf src/ui/node_modules/.cache
rm -rf src/ui/node_modules/@finos/$SDK
mkdir -p src/ui/node_modules/@finos
cp -R ../../$SDK src/ui/node_modules/@finos
