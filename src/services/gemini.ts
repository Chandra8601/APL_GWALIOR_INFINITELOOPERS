import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the API with the user-provided key
const API_KEY = 'AIzaSyCJISE4NrT273aPqohCQCDD1r8BT-_UlAw';
const genAI = new GoogleGenerativeAI(API_KEY);

// Define a default system prompt for the Cricket Assistant context
const SYSTEM_INSTRUCTION = `You are CricAI, an advanced, high-energy AI cricket assistant for the IPLVerse mobile app. 
You answer questions specifically about cricket, IPL, player statistics, fantasy cricket, and match predictions. 
Keep your tone exciting, sporty, and helpful. Use emojis like 🏏🔥🚀 where appropriate. 
If a user asks about non-cricket topics, politely steer them back to cricket.`;

export const getCricketChatResponse = async (userPrompt: string): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "Whoops! The stump mic is acting up. I couldn't process that right now. Try asking again! 🏏";
  }
};
