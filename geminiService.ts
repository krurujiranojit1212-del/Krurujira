
import { GoogleGenAI, Type } from "@google/genai";
import { UserData, PredictionResult } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCareerPrediction = async (userData: UserData): Promise<PredictionResult> => {
  const prompt = `Act as a world-class mystical Tarot Reader specializing in career destiny. 
  The seeker's name is ${userData.name}.
  Their soul passion (Key of Soul): ${userData.likes}.
  Their unique essence (Habit/Personality): ${userData.habit}.

  Analyze these qualities and map them to a unique Tarot Archetype. 
  The response must be in Thai for the 'reading' and 'cardName' fields.
  Use a mystical, encouraging, and poetic tone.
  
  Format the response as JSON.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          cardName: {
            type: Type.STRING,
            description: "A mystical tarot-inspired card name that fits the archetype.",
          },
          cardIcon: {
            type: Type.STRING,
            description: "A single emoji representing the card archetype.",
          },
          reading: {
            type: Type.STRING,
            description: "A detailed mystical reading about their career path (Thai).",
          },
          suggestedCareers: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3-5 specific careers (Thai).",
          },
        },
        required: ["cardName", "cardIcon", "reading", "suggestedCareers"],
      },
    },
  });

  try {
    const result = JSON.parse(response.text || "{}");
    return result as PredictionResult;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    throw new Error("The stars are currently aligned in a confusing pattern. Please try again.");
  }
};
