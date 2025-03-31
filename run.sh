#! /bin/bash
 set -gx PATH $HOME/.cargo/bin $PATH
npm run watch & rojo serve & echo "Framework started!"
