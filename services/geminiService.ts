import { GoogleGenAI, Type } from "@google/genai";
import { AIGeneratedJobContent } from '../types';

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY not found in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateJobDescription = async (
  jobTitle: string,
  keywords: string,
  companyName: string
): Promise<AIGeneratedJobContent | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  const prompt = `
    Erstelle eine professionelle Stellenanzeige für einen Lackierer-Job.
    Titel: ${jobTitle}
    Firma: ${companyName}
    Stichworte/Anforderungen: ${keywords}
    
    Die Tonalität soll modern, ansprechend und motivierend sein.
    Gebe das Ergebnis als JSON zurück.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            requirements: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            benefits: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["title", "description", "requirements", "benefits"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIGeneratedJobContent;
    }
    return null;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};