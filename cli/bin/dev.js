#!/usr/bin/env node

import { execSync } from "node:child_process";
import { setDefaultCACertificates } from "node:tls";

execSync("npm link @sveti/ba1-cli @sveti/ba1-config @sveti/ba1-plugin @sveti/blades", {
  stdio: "inherit",
});

/* Usage:
```sh
npx node_modules/@sveti/ba1-cli
```*/
