import buildPreset from "../src"
import { fixtures, titles, check } from "./core"

describe("Webpack", () => {
  const options = buildPreset(null, {
    target: { browsers: "ie 11", node: "8.0.0" },
    imports: "webpack",
    sourceMaps: false
  })

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options))
  })
})
