import { hasTemp } from "./app.js";

if (!hasTemp({ main: { temp: 20 } })) {
  console.error("failed: expected true for valid temp");
  process.exit(1);
}

if (hasTemp({ main: {} })) {
  console.error("failed: expected false for missing temp");
  process.exit(1);
}

console.log("test passed");
