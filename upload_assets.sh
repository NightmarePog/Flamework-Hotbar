#!/bin/bash

# Načtení proměnných z .env
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Kontrola, zda je APIKEY nastaveno
if [ -z "$API_KEY_ASSETS" ]; then
    echo "Chyba: APIKEY není nastaven v .env souboru."
    exit 1
fi

# Spuštění příkazu asphalt sync
asphalt sync --api-key "$APIKEY"
