#!/usr/bin/env bash

DIRECTORY=$(cd $(dirname $0) && pwd)
SVGS=$DIRECTORY/../../public/icons/svg

find $SVGS -type f -name "*.svg" -exec sed -i -e 's/fill="none"/fill="currentColor"/g' {} +
find $SVGS -type f -name "*.svg" -exec sed -i -e 's/fill="white"/fill="none"/g' {} +
find $SVGS -type f -name "*.svg" -exec sed -i -e 's/fill="#333333"//g' {} +