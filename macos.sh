#!/bin/bash

echo `date` >> ~/Desktop/wiki/log &&
cd ~/Desktop/wiki/wiki &&
/usr/local/bin/node /Users/dongmingchao/Desktop/wiki/node_modules/tiddlywiki/tiddlywiki.js --server 10101
echo 'finish' >> ~/Desktop/wiki/log
