"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var blakejs_1 = require("blakejs");
var elliptic = require("elliptic");
var js_sha3_1 = require("js-sha3");
var rnodeProtos = require("./rnode-protos");
var base58 = require("./base58");
var ec = new elliptic.ec("secp256k1");
exports.getFirstBlock = function (blockInfo) {
    return blockInfo[0];
};
exports.getValueFromBlocks = function (blockInfo) {
    for (var i = 0; i < blockInfo.length; i += 1) {
        var block = blockInfo[i];
        if (block.postBlockData) {
            for (var j = 0; j < block.postBlockData.length; j += 1) {
                var data = block.postBlockData[j];
                if (data) {
                    return data;
                }
            }
        }
    }
    throw new Error("Not data found in any block");
};
var rhoUnforgeableToJs = function (expr) {
    var unforgeable = {};
    Object.keys(expr.ExprUnforg.data).forEach(function (u) {
        if (u === "UnforgPrivate") {
            unforgeable.UnforgPrivate = expr.ExprUnforg.data[u].data;
        }
        else if (u === "UnforgDeploy") {
            unforgeable.UnforgDeploy = expr.ExprUnforg.data[u].data;
        }
        else if (u === "UnforgDeployer") {
            unforgeable.UnforgDeployer = expr.ExprUnforg.data[u].data;
        }
    });
    return unforgeable;
};
var rholangMapToJsObject = function (expr) {
    var obj = {};
    Object.keys(expr.ExprMap.data).forEach(function (k) {
        obj[k] = exports.rhoValToJs(expr.ExprMap.data[k]);
    });
    return obj;
};
var rhoIdsToJs = function (ids) {
    return ids[0].id;
};
var rhoExprStringToJs = function (expr) {
    return expr.ExprString.data;
};
var rhoExprUriToJs = function (expr) {
    return expr.ExprUri.data;
};
var rhoExprBoolToJs = function (expr) {
    return expr.ExprBool.data;
};
var rhoExprIntToJs = function (expr) {
    return expr.ExprInt.data;
};
var rhoExprListToJs = function (expr) {
    return expr.ExprList.data.map(function (e) { return exports.rhoValToJs(e); });
};
exports.rhoValToJs = function (expr) {
    /* if (val.ids && val.ids[0]) {
      return rhoIdsToJs(val.ids);
    } else  */
    if (expr.ExprUnforg) {
        return rhoUnforgeableToJs(expr);
    }
    else if (expr.ExprMap) {
        return rholangMapToJsObject(expr);
    }
    else if (expr.ExprString) {
        return rhoExprStringToJs(expr);
    }
    else if (expr.ExprUri) {
        return rhoExprUriToJs(expr);
    }
    else if (expr.ExprBool) {
        return rhoExprBoolToJs(expr);
    }
    else if (expr.ExprInt) {
        return rhoExprIntToJs(expr);
    }
    else if (expr.ExprList) {
        return rhoExprListToJs(expr);
    }
    else {
        console.warn("Not implemented", expr);
        return null;
    }
};
exports.unforgeableWithId = function (id) {
    return id.toString("hex");
};
exports.getDeployData = function (timestamp, term, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = 0; }
    return {
        timestamp: timestamp,
        term: term,
        phloLimit: phloLimit,
        phloPrice: phloPrice,
        validAfterBlockNumber: validAfterBlockNumber
    };
};
exports.getDeployDataToSign = function (payment) {
    return rnodeProtos.casper.DeployDataProto.encode(payment).finish();
};
exports.getBlake2Hash = function (toHash, length) {
    if (length === void 0) { length = 32; }
    var context = blakejs_1.blake2bInit(length, null);
    blakejs_1.blake2bUpdate(context, toHash);
    return blakejs_1.blake2bFinal(context);
};
exports.verifyPrivateAndPublicKey = function (privateKey, publicKey) {
    var keyPair = ec.keyFromPrivate(privateKey);
    if (keyPair.getPublic().encode("hex", false) !== publicKey) {
        throw new Error("Private key and public key do not match");
    }
};
exports.signSecp256k1 = function (hash, privateKey) {
    var keyPair = ec.keyFromPrivate(privateKey);
    var signature = keyPair.sign(Buffer.from(hash), { canonical: true });
    var derSign = signature.toDER();
    if (!ec.verify(Buffer.from(hash), signature, keyPair, "hex")) {
        throw new Error("Failed to verify signature");
    }
    return new Uint8Array(derSign);
};
exports.transferRevTerm = function (a) {
    if (typeof a.from !== "string") {
        throw new Error("from must be a REV address");
    }
    if (typeof a.to !== "string") {
        throw new Error("to must be a REV address");
    }
    if (typeof a.amount !== "number") {
        throw new Error("amount must be a number");
    }
    return "new\n  rl(`rho:registry:lookup`),\n  RevVaultCh,\n  stdout(`rho:io:stdout`)\nin {\n\nrl!(`rho:rchain:revVault`, *RevVaultCh) |\nfor (@(_, RevVault) <- RevVaultCh) {\n\n  match (\n    \"" + a.from + "\",\n    \"" + a.to + "\",\n    " + a.amount + "\n  ) {\n    (from, to, amount) => {\n\n      new vaultCh, revVaultkeyCh, deployerId(`rho:rchain:deployerId`) in {\n        @RevVault!(\"findOrCreate\", from, *vaultCh) |\n        @RevVault!(\"deployerAuthKey\", *deployerId, *revVaultkeyCh) |\n        for (@(true, vault) <- vaultCh; key <- revVaultkeyCh) {\n\n          stdout!((\"Beginning transfer of \", amount, \"REV from\", from, \"to\", to)) |\n\n          new resultCh in {\n            @vault!(\"transfer\", to, amount, *key, *resultCh) |\n            for (@result <- resultCh) {\n              stdout!((\"Finished transfer of \", amount, \"REV to\", to, \"result was:\", result))\n            }\n          }\n        }\n      }\n    }\n  }\n}\n}";
};
exports.getDeployOptions = function (sigAlgorithm, timestamp, term, privateKey, publicKey, phloPrice, phloLimit, validAfterBlockNumber) {
    if (phloPrice === void 0) { phloPrice = 1; }
    if (phloLimit === void 0) { phloLimit = 10000; }
    if (validAfterBlockNumber === void 0) { validAfterBlockNumber = 0; }
    var deployData = exports.getDeployData(timestamp, term, phloPrice, phloLimit, validAfterBlockNumber);
    var toSign = exports.getDeployDataToSign(deployData);
    var hash = exports.getBlake2Hash(toSign);
    var signature;
    signature = exports.signSecp256k1(hash, privateKey);
    return {
        data: deployData,
        deployer: publicKey,
        signature: Buffer.from(new Uint8Array(signature)).toString("hex"),
        sigAlgorithm: sigAlgorithm
    };
};
// Address and public key
// Algorithm to generate ETH and REV address is taken from RNode source
// https://github.com/rchain/rchain/blob/bf7a30e1d388d46aa9e5f4b8c04089fc8e31d771/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/AddressTools.scala#L47
// Prefix as defined in https://github.com/rchain/rchain/blob/c6721a6/rholang/src/main/scala/coop/rchain/rholang/interpreter/util/RevAddress.scala#L13
var prefix = { coinId: "000000", version: "00" };
var toBase58 = function (hexStr) {
    var bytes = bytesFromHex(hexStr);
    return base58.encode(bytes);
};
var getAddrFromEth = function (ethAddr) {
    if (!ethAddr || ethAddr.length !== 40) {
        throw new Error("ETH address must contain 130 characters");
    }
    // Hash ETH address
    var ethAddrBytes = bytesFromHex(ethAddr);
    var ethHash = js_sha3_1.keccak256(ethAddrBytes);
    // Add prefix with hash and calculate checksum (blake2b-256 hash)
    var payload = "" + prefix.coinId + prefix.version + ethHash;
    var payloadBytes = bytesFromHex(payload);
    var checksum = blakejs_1.blake2bHex(payloadBytes, void 666, 32).slice(0, 8);
    // Return REV address
    return toBase58("" + payload + checksum);
};
var bytesFromHex = function (hexStr) {
    var byte2hex = function (_a, x) {
        var arr = _a[0], bhi = _a[1];
        return bhi ? [__spreadArrays(arr, [parseInt("" + bhi + x, 16)])] : [arr, x];
    };
    var resArr = Array.from(hexStr).reduce(byte2hex, [[]])[0];
    return Uint8Array.from(resArr);
};
exports.revAddressFromPublicKey = function (publicKey) {
    if (!publicKey || publicKey.length !== 130) {
        throw new Error("Public key must contain 130 characters");
    }
    // Public key bytes from hex string
    var pubKeyBytes = bytesFromHex(publicKey);
    // Remove one byte from pk bytes and hash
    var pkHash = js_sha3_1.keccak256(pubKeyBytes.slice(1));
    // Take last 40 chars from hashed pk (ETH address)
    var pkHash40 = pkHash.slice(-40);
    // Return both REV and ETH address
    return getAddrFromEth(pkHash40);
};
exports.publicKeyFromPrivateKey = function (privateKey) {
    var keyPair = ec.keyFromPrivate(privateKey);
    return keyPair.getPublic().encode("hex", false);
};
