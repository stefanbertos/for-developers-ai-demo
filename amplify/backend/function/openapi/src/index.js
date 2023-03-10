import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";
import { Configuration, OpenAIApi } from "openai";
import fs from "fs";

const ssmClient = new SSMClient({ region: process.env["REGION"] });
const input = { Name: process.env["openapiSecret"], WithDecryption: true };
const command = new GetParameterCommand(input);
const parameter = await ssmClient.send(command); // top-level await - optimalization for function startup https://aws.amazon.com/about-aws/whats-new/2022/01/aws-lambda-es-modules-top-level-await-node-js-14/
const secret = JSON.parse(parameter.Parameter.Value);
const configuration = new Configuration(secret);
const openai = new OpenAIApi(configuration);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  const request = JSON.parse(event.body);
  console.log(request);

  let response;
  if (request.image) {
    fs.writeFileSync("/tmp/image.png", request.image, "base64");
    response = await openai.createImageVariation(
      fs.createReadStream("/tmp/image.png"),
      request.numberOfImages,
      request.imageResolution
    );
  } else {
    response = await openai.createImage({
      prompt: request.prompt,
      n: request.numberOfImages,
      size: request.imageResolution,
    });
  }

  console.log(response.data.data);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(response.data.data),
  };
};
