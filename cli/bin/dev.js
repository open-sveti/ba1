#!/usr/bin/env node

import { execSync } from "node:child_process";
import { setDefaultCACertificates } from "node:tls";

execSync("npm link @sveti/one-cli @sveti/one-config @sveti/one-plugin @sveti/blades", {
  stdio: "inherit",
});

/* Usage:
```sh
npx node_modules/@sveti/one-cli
```*/
