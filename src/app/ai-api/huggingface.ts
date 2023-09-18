import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API);

export async function generateText(ingredients: string, continuation: string = "") {
  try {
    const response = await hf.textGeneration({
      model: "gpt2",
      inputs: `Generate a recipe using the following ingredients: ${ingredients}, \n${continuation}`,
      parameters: { max_new_tokens: 250 },
    });

    return response;
  } catch (error) {
    console.error("Error generating text:", error);
    return null;
  }
}