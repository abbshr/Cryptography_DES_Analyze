#!/bin/bash

for i in $(ls -l | grep 'i[[:digit:]]' | awk '{print $9}'); do
  ./run_des -e key "input/$i" "o${i#i}"
done
