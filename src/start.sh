#!/bin/bash
# Avvia il Lab in locale con i video funzionanti (inline + avanzamento automatico).
#   ./start.sh
# Per fermarlo: premi Ctrl+C (o chiudi il Terminale).

cd "$(dirname "$0")" || exit 1

PY="$(command -v python3 || true)"
if [ -z "$PY" ]; then
  echo "Python 3 non trovato."; exit 1
fi

# Trova una porta libera a partire da 8000
PORT=8000
while lsof -i ":$PORT" >/dev/null 2>&1; do PORT=$((PORT+1)); done
URL="http://localhost:$PORT/"

echo "──────────────────────────────────────────────"
echo "  Lab · Elementi di Economia dei Beni Musicali"
echo "──────────────────────────────────────────────"
echo "  Apro:  $URL"
echo "  I video partono INLINE (qui funziona tutto)."
echo "  Per terminare: Ctrl+C."
echo "──────────────────────────────────────────────"

# Apri il browser dopo un attimo (open su macOS, xdg-open su Linux), poi avvia il server
( sleep 1; (open "$URL" 2>/dev/null || xdg-open "$URL" 2>/dev/null) ) &
exec "$PY" -m http.server "$PORT"
