#!/usr/bin/env bash
set -ex

cd "$(dirname "$0")"

# MI
# TODO: explicitly use 1.14.17 toolchain 1.60.0, will remove later
# cargo build-bpf
# ~/miraland-labs/miraland-1.14.17/cargo build-bpf --bpf-sdk ~/miraland-labs/miraland-1.14.17/sdk/bpf --manifest-path ./Cargo.toml
# on Mac OS
# ATTENTION: THIS IS TEMP SOLUTION
cargo +1.60.0 build-bpf --bpf-sdk /Users/miracle17/miraland-labs/miraland-1.14.17/sdk/bpf --manifest-path ./Cargo.toml
cp ./target/deploy/miraland_sbf_rust_noop.so .
