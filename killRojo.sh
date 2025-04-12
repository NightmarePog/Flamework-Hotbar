#!/bin/bash

PORT=34872

PID=$(lsof -t -i :$PORT)

if [ -n "$PID" ]; then
    echo "Killing $PORT (PID: $PID)..."
    kill -9 $PID
    echo "Process Killed"
else
    echo "Port $PORT is not running anything"
fi
