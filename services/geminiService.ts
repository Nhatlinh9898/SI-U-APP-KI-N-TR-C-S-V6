import { GoogleGenAI } from "@google/genai";
import { AppBlueprint } from "../types";
import { ARCHITECT_PERSONA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBlueprint = async (userIdea: string): Promise<AppBlueprint> => {
  try {
    const modelId = 'gemini-2.5-flash'; 

    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        {
          role: 'user',
          parts: [
            { text: ARCHITECT_PERSONA },
            { text: `YÊU CẦU CỦA NGƯỜI DÙNG: "tạo app ${userIdea}"` }
          ]
        }
      ],
      config: {
        responseMimeType: "application/json",
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    const blueprint = JSON.parse(text) as AppBlueprint;
    return blueprint;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};