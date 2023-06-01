#!/usr/bin/env bash

DIRECTORY=$(cd $(dirname $0) && pwd)
SVGS=$DIRECTORY/../../public/icons/svg

find $SVGS -type f -name "*.svg" \
    -exec sed -i "" \
    -e 's/fill="white"/fill="none"/g' \
    -e 's/fill="#333333"/fill="currentColor"/g' \
    -e 's/fill="black"/fill="currentColor"/g' \
    {} +