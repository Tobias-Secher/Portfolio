#!/bin/sh

while getopts c: flag
do
    case "${flag}" in
        c) name=${OPTARG};;
    esac
done

cd ../src/components/ && #&& touch $name.txt
mkdir ./$name &&
cd $name &&
touch $name.component.tsx
touch $name.style.scss
cd ../../models
touch $name.model.ts