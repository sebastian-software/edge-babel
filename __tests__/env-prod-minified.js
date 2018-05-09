import buildPreset from "../src"
import { fixtures, titles, check } from "./core"

describe("Minified", () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    minified: true,
    compression: true,
    env: "production"
  })

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options))
  })
})