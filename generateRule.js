const fs = require("fs-extra");
const getRuleFinder = require("eslint-find-rules");
const prettier = require("prettier");

const rule = getRuleFinder("./index.js");

// const currentRules = ruleFinder.getCurrentRules();

const currentRulesDetailed = rule.getCurrentRulesDetailed();

// const pluginRules = ruleFinder.getPluginRules();

// const allAvailableRules = ruleFinder.getAllAvailableRules();

// const unusedRules = ruleFinder.getUnusedRules();

// const deprecatedRules = ruleFinder.getDeprecatedRules();

async function generateAllRules(currentRulesDetailed) {
  const ruleJsonFileName = "./rule.json";
  const ruleDetailJson = JSON.stringify(currentRulesDetailed);

  try {
    await fs.remove(ruleJsonFileName);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }

  try {
    const data = prettier.format(ruleDetailJson, {
      parser: "json",
      trailingComma: "all",
      printWidth: 100,
      endOfLine: "lf",
    });

    await fs.outputFile(ruleJsonFileName, data);

    console.log("generate rule success!");
  } catch (error) {
    console.log(error);
  }
}

generateAllRules(currentRulesDetailed);
