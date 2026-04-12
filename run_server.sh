#!/bin/zsh

set -euo pipefail

cd "${0:A:h}"

# The local shell may point Ruby 2.6 at a Ruby 3.x gem home.
# Reset gem-related variables so Bundler resolves against the system Ruby.
unset GEM_HOME GEM_PATH GEM_ROOT RUBY_ROOT RUBY_VERSION RUBYOPT
unset BUNDLE_BIN_PATH BUNDLE_GEMFILE BUNDLE_PATH

SYSTEM_RUBY="/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby"
SYSTEM_GEM="/usr/bin/gem"
SYSTEM_BUNDLE="/usr/bin/bundle"

export GEM_HOME="$("$SYSTEM_RUBY" -e 'require "rubygems"; print Gem.user_dir')"
export GEM_PATH="$("$SYSTEM_RUBY" -e 'require "rubygems"; print Gem.path.join(":")')"
export PATH="$GEM_HOME/bin:$PATH"
export BUNDLE_USER_HOME="$PWD/.bundle-user"
export BUNDLE_APP_CONFIG="$PWD/.bundle"
export BUNDLE_PATH="$PWD/vendor/bundle"

mkdir -p "$BUNDLE_USER_HOME" "$BUNDLE_APP_CONFIG" "$BUNDLE_PATH"

BUNDLER_VERSION="$(awk '/^BUNDLED WITH$/{getline; sub(/^[[:space:]]+/, "", $0); print; exit}' Gemfile.lock)"
COMMAND="${1:-serve}"
ARGS=("${@:2}")

if [[ -z "$BUNDLER_VERSION" ]]; then
  echo "Could not determine the Bundler version from Gemfile.lock." >&2
  exit 1
fi

if ! "$SYSTEM_GEM" list -i bundler -v "$BUNDLER_VERSION" --local >/dev/null 2>&1; then
  echo "Bundler $BUNDLER_VERSION is not installed for the system Ruby environment." >&2
  echo "Install it with:" >&2
  echo "  env -u GEM_HOME -u GEM_PATH -u GEM_ROOT -u RUBY_ROOT -u RUBY_VERSION gem install bundler -v $BUNDLER_VERSION --user-install" >&2
  exit 1
fi

if [[ "$COMMAND" == "install" ]]; then
  exec "$SYSTEM_BUNDLE" "_${BUNDLER_VERSION}_" install "${ARGS[@]}"
fi

if [[ "$COMMAND" == "live" || "$COMMAND" == "liveserve" ]]; then
  exec "$SYSTEM_BUNDLE" "_${BUNDLER_VERSION}_" exec jekyll liveserve "${ARGS[@]}"
fi

exec "$SYSTEM_BUNDLE" "_${BUNDLER_VERSION}_" exec jekyll serve "${ARGS[@]}"
