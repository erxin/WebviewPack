#!/bin/bash
./gradlew assembleRelease

TARGET_DIR="/Users/hitosea-007/Desktop/autoPacks/table/"

DATE_FORMATTED=$(date +%Y%m%d%H%M)
NEW_DIR_NAME="APKs_$DATE_FORMATTED"
mkdir -p "$TARGET_DIR/$NEW_DIR_NAME"

cp /Users/hitosea-007/Desktop/hdyh-work/pack/WebViewPack/app/build/outputs/apk/jbc/release/*.apk "$TARGET_DIR/$NEW_DIR_NAME"
cp /Users/hitosea-007/Desktop/hdyh-work/pack/WebViewPack/app/build/outputs/apk/ttpos/release/*.apk "$TARGET_DIR/$NEW_DIR_NAME"

echo "APK 文件已成功复制到安装包文件夹"