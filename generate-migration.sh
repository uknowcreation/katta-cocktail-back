#!/bin/bash

NAME=$1

npm run build

npm run typeorm -- migration:generate -d ./src/ormconfig.ts migration/$NAME