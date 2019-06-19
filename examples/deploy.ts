import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader";
import * as rchainToolkit from "../dist/index";

const main = async () => {
  const deployData = await rchainToolkit.utils.getDeployData(
    "ed25519",
    1560802892221,
    `new hello in { hello!("world") }`,
    "e416638cd5a283be10a724b2b41e8f76c9e48fbbe3ccf6172bfa1293fd7ee476499819f316b7fe95d723b232ba430cf7e3b68af155eb8253905d64e1fbace058",
    "499819f316b7fe95d723b232ba430cf7e3b68af155eb8253905d64e1fbace058",
    1,
    100000
  );

  const grpcClient = await rchainToolkit.api.getGrpcClient(
    "localhost:40401",
    grpc,
    protoLoader
  );

  const a = await rchainToolkit.api.doDeploy(deployData, grpcClient);

  console.log(a);
};

main();