import buildPreset from "../src"
import { fixtures, titles, check } from "./core"

describe("Node v6", () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    target: "node6"
  })

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options))
  })
})