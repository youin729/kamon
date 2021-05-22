#!/bin/sh
for file in [0-9]+_[\u3400-\u9FFF]|[\uF900-\uFAFF]|[\uD840-\uD87F]|[\uDC00-\uDFFF].png
do
    After="${file:2:3}"
    extension="${file##*.}"
    print "${file}" "${After}.${extension}"
done