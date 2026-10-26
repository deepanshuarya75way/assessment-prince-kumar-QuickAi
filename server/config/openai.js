const OpenAI = require("openai");

const apiKey = process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY || "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";
const baseURL = process.env.OPENAI_API_KEY ? undefined : "https://openrouter.ai/api/v1";

const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: baseURL,
});

module.exports = openai;
