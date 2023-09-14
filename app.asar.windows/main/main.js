const fs = require("fs");
const vm = require("vm");
const v8 = require("v8");
const path = require("path");
const Module = require("module");

v8.setFlagsFromString("--no-lazy");
v8.setFlagsFromString("--no-flush-bytecode");

const COMPILED_EXTNAME = ".bytecode";

const compileCode = function (javascriptCode) {
  if (typeof javascriptCode !== "string") {
    throw new Error(
      `javascriptCode must be string. ${typeof javascriptCode} was given.`,
    );
  }

  const script = new vm.Script(javascriptCode, {
    produceCachedData: true,
  });

  const bytecodeBuffer =
    script.createCachedData && script.createCachedData.call
      ? script.createCachedData()
      : script.cachedData;

  return bytecodeBuffer;
};

const fixBytecode = function (bytecodeBuffer) {
  if (!Buffer.isBuffer(bytecodeBuffer)) {
    throw new Error("bytecodeBuffer must be a buffer object.");
  }

  const dummyBytecode = compileCode('"ಠ_ಠ"');

  if (
    process.version.startsWith("v8.8") ||
    process.version.startsWith("v8.9")
  ) {
    dummyBytecode.slice(16, 20).copy(bytecodeBuffer, 16);
    dummyBytecode.slice(20, 24).copy(bytecodeBuffer, 20);
  } else if (
    process.version.startsWith("v12") ||
    process.version.startsWith("v13") ||
    process.version.startsWith("v14") ||
    process.version.startsWith("v15") ||
    process.version.startsWith("v16") ||
    process.version.startsWith("v17") ||
    process.version.startsWith("v18")
  ) {
    dummyBytecode.slice(12, 16).copy(bytecodeBuffer, 12);
  } else {
    dummyBytecode.slice(12, 16).copy(bytecodeBuffer, 12);
    dummyBytecode.slice(16, 20).copy(bytecodeBuffer, 16);
  }
};

const readSourceHash = function (bytecodeBuffer) {
  if (!Buffer.isBuffer(bytecodeBuffer)) {
    throw new Error("bytecodeBuffer must be a buffer object.");
  }

  if (
    process.version.startsWith("v8.8") ||
    process.version.startsWith("v8.9")
  ) {
    return bytecodeBuffer
      .slice(12, 16)
      .reduce(
        (sum, number, power) => (sum += number * Math.pow(256, power)),
        0,
      );
  } else {
    return bytecodeBuffer
      .slice(8, 12)
      .reduce(
        (sum, number, power) => (sum += number * Math.pow(256, power)),
        0,
      );
  }
};

Module._extensions[COMPILED_EXTNAME] = function (fileModule, filename) {
  const bytecodeBuffer = fs.readFileSync(filename);

  fixBytecode(bytecodeBuffer);

  const length = readSourceHash(bytecodeBuffer);

  let dummyCode = "";

  if (length > 1) {
    dummyCode = '"' + "\u200b".repeat(length - 2) + '"'; // "\u200b" Zero width space
  }

  const script = new vm.Script(dummyCode, {
    filename: filename,
    lineOffset: 0,
    displayErrors: true,
    cachedData: bytecodeBuffer,
  });

  if (script.cachedDataRejected) {
    throw new Error("Invalid or incompatible cached data (cachedDataRejected)");
  }

  function require(id) {
    return fileModule.require(id);
  }
  require.resolve = function (request, options) {
    return Module._resolveFilename(request, fileModule, false, options);
  };
  if (process.mainModule) {
    require.main = process.mainModule;
  }

  require.extensions = Module._extensions;
  require.cache = Module._cache;

  const compiledWrapper = script.runInThisContext({
    filename: filename,
    lineOffset: 0,
    columnOffset: 0,
    displayErrors: true,
  });

  const dirname = path.dirname(filename);

  const args = [
    fileModule.exports,
    require,
    fileModule,
    filename,
    dirname,
    process,
    global,
  ];

  return compiledWrapper.apply(fileModule.exports, args);
};

require("./main.bytecode");
