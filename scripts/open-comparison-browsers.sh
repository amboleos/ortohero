#!/usr/bin/env bash
# Yan yana kıyaslama: önce yerel klon (2. sekmeye göre “asıl” sürüm), sonra canlı site.
# Cursor / tarayıcı bazen ilk açılan sekmeyi öne çıkarır; bu yüzden sıra: localhost → ortheroaligner.com

set -euo pipefail

LOCAL="${LOCAL:-http://localhost:3000}"
LIVE="${LIVE:-https://ortheroaligner.com/}"

launch() {
  if command -v google-chrome-stable >/dev/null 2>&1; then
    google-chrome-stable --new-window "$1" &
  elif command -v google-chrome >/dev/null 2>&1; then
    google-chrome --new-window "$1" &
  elif command -v chromium-browser >/dev/null 2>&1; then
    chromium-browser --new-window "$1" &
  elif command -v chromium >/dev/null 2>&1; then
    chromium --new-window "$1" &
  elif command -v firefox >/dev/null 2>&1; then
    firefox --new-window "$1" &
  else
    xdg-open "$1" 2>/dev/null &
  fi
}

launch "$LOCAL"
sleep 0.35
launch "$LIVE"

echo "Önce: $LOCAL"
echo "Sonra: $LIVE"
