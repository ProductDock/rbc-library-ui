#!/bin/sh
# line endings must be \n, not \r\n !
echo "window._env_ = {" > ./config/env-config.js
awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./.env >> ./config/env-config.js
echo "}" >> ./config/env-config.js