
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available, otherwise throw an error.
if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MOCK_DATA = `
  Monthly Sales Data:
  - January: Revenue $4000, Profit $2400
  - February: Revenue $3000, Profit $1398
  - March: Revenue $5000, Profit $9800
  - April: Revenue $4780, Profit $3908
  - May: Revenue $5890, Profit $4800
  - June: Revenue $4390, Profit $3800
  - July: Revenue $5490, Profit $4300

  Recent Orders:
  - ORD001, Olivia Martin, $199.99, Delivered
  - ORD002, Jackson Lee, $49.50, Shipped
  - ORD003, Isabella Nguyen, $350.00, Pending
  - ORD004, William Kim, $75.25, Delivered
  - ORD005, Sophia Davis, $120.00, Cancelled

  Top Products:
  - Product A: 1,200 units sold
  - Product B: 850 units sold
  - Product C: 2,300 units sold
`;


export const generateBusinessInsight = async (prompt: string): Promise<string> => {
  try {
    const fullPrompt = `
      You are an expert business analyst for an ERP system.
      Based on the following internal company data, provide a concise and insightful answer to the user's question.
      Present the information clearly. Do not mention that you are using mock data.

      ---
      AVAILABLE DATA:
      ${MOCK_DATA}
      ---

      USER QUESTION:
      "${prompt}"
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: {
          temperature: 0.5,
          topP: 0.95,
        }
    });

    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        return `Failed to generate insight. Please check your API key and network connection. Details: ${error.message}`;
    }
    return "An unexpected error occurred while generating the insight.";
  }
};
