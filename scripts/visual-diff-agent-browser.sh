#!/usr/bin/env bash
# İki URL’yi agent-browser ile karşılaştırır (snapshot metni + isteğe bağlı tam sayfa screenshot diff).
# Önce klonu çalıştırın: npm run dev  (Playwright bunu otomatik yapar; bu script için manuel gerekir)
#
# Kullanım:
#   ./scripts/visual-diff-agent-browser.sh
#   BASE_URL=http://localhost:3000 REF_URL=https://ortheroaligner.com/ ./scripts/visual-diff-agent-browser.sh

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
REF_URL="${REF_URL:-https://ortheroaligner.com/}"

if ! command -v npx >/dev/null 2>&1; then
  echo "npx bulunamadı." >&2
  exit 1
fi

echo "Karşılaştırılıyor:"
echo "  A) $BASE_URL"
echo "  B) $REF_URL"
echo ""

cd "$(dirname "$0")/.."
npx agent-browser diff url "$BASE_URL" "$REF_URL" \
  --wait-until networkidle \
  --screenshot \
  --full \
  "$@"
