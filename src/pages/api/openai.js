// pages/api/chatbot.js
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: "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", // Replace with your OpenAI API key
  })
);

export default async (req, res) => {
  try {
    const { input } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: input,
        },
      ],
    });

    if (response.data.choices && response.data.choices.length > 0) {
      const message = response.data.choices[0].message.content;
      res.status(200).json({ message });
    } else {
      res.status(500).json({ error: "No response from chatbot" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
