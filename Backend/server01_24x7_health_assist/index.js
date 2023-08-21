//  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

const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-EmYrQgO0RHAeubel87DHqMfG",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

// testing callAPi
// async function callApi() {
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "can u help me",
//     max_tokens: 500,
//     temperature: 0,
//   });
//   console.log(response.data.choices[0].text);
// }
// callApi();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3080;

app.post("/", async (req, res) => {
  // res.send("Hello World");
  const { message } = req.body;
  console.log(message, "message");
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 1000,
    temperature: 0.4,
  });

  //   console.log(response.data.choices[0].text);
  res.json({
    // data: response.data,
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log("\nA.I. Health Assistant Server started...\n");
  console.log(`Listening responses at http://localhost:${port}`);
});
