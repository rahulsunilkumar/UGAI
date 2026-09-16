#!/bin/bash
# Double-click on macOS, or run: bash dissector/run.command
set -e
cd "$(dirname "$0")"
if [ -n "${DISSECTOR_PYTHON:-}" ]; then
  exec "$DISSECTOR_PYTHON" app.py "$@"
fi
candidates=(".venv/bin/python3" "../.venv/bin/python3" "${HOME}/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3" "python3")
for candidate in "${candidates[@]}"; do
  if "$candidate" -c 'import pdfplumber, pypdfium2, PIL' >/dev/null 2>&1; then
    exec "$candidate" app.py "$@"
  fi
done
printf '%s\n' 'Python dependencies are not installed yet.' 'From the UGAI folder, run:' '  python3 -m venv dissector/.venv' '  dissector/.venv/bin/python -m pip install -r dissector/requirements.txt' 'Then double-click this launcher again.'
read -r -p 'Press Return to close. '
