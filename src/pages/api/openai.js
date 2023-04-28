// pages/api/chatbot.js
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
dotenv.config();
const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY, // Replace with your OpenAI API key
  })
);

export default async (req, res) => {
  try {
    const { input, outputTopic } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 1300,
      n: 1,
      stop: "\n",
      temperature: 0.5,
      messages: [
        {
          role: "system",
          content: outputTopic, // Set system message with topic information
        },
        {
          role: "user",
          content: input,
        },
      ],
    });

    if (response.data.choices && response.data.choices.length > 0) {
      const message = response.data.choices[0].message.content;
      if (message.length === 0) {
        res
          .status(200)
          .json({
            message:
              "Sorry, I didn't understand your question. please try again",
          });
      } else {
        res.status(200).json({ message });
      }
    } else {
      res.status(500).json({ error: "No response from chatbot" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
