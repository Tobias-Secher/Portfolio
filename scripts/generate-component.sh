#!/bin/sh

$1

cd ../src/components && 
mkdir $1 &&
cd $1 &&
touch $1.component.tsx &&
echo 'import React from "react";' >> $1.component.tsx &&
echo 'import "./'$1.style.scss'";'  >> $1.component.tsx &&
touch $1.style.scss 