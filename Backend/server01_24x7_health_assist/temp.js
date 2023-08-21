const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const configuration = new Configuration({
  organization: "org-EmYrQgO0RHAeubel87DHqMfG",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());

app.use(express.json());
app.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });
});

const port = 3080;

app.post("/", async (req, res) => {
  const { message } = req.body;
  console.log(message, "message");
  const response = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: `Pretend to be my doctor: ${message}`,
      max_tokens: 1000,
      temperature: 0.37,
    })
    .then((response) => {
      console.log({ response });
      return response?.data?.choices?.[0]?.text;
    })
    .then((ans) => {
      console.log({ ans });
      const array = ans
        .split("\n")
        .filter((value) => value)
        .map((value) => value.trim());
      return array;
    })
    .then((ans) => {
      res.json({
        message: ans,
      });
    });
});

app.listen(port, () => {
  console.log("temp.js running...");
  console.log("\nA.I. Health Assistant Server started...\n");
  console.log(`Listening responses at http://localhost:${port}`);
});
