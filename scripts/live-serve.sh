#!/usr/bin/env bash
set -euo pipefail

# Ensure rbenv binaries are visible so we can initialize the shims.
if [ -d "${HOME}/.rbenv/bin" ]; then
  export PATH="${HOME}/.rbenv/bin:${PATH}"
fi

if ! command -v rbenv >/dev/null 2>&1; then
  echo "rbenv is not installed or not on PATH; cannot start Jekyll." >&2
  exit 1
fi

# Initialize rbenv for this shell so we get the project Ruby (3.1.4).
eval "$(rbenv init - bash)"
export RBENV_VERSION="${RBENV_VERSION:-3.1.4}"

echo "Using Ruby ${RBENV_VERSION} via rbenv"
echo "Starting Jekyll with live reload at http://127.0.0.1:4000 ..."

exec bundle exec jekyll serve --livereload --baseurl ""
