import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API);

export async function generateText(ingredients: string, continuation: string = "") {
  try {
    let prompt = continuation.trim(); // Remove leading/trailing spaces

    // Check if the prompt already contains the initial message
    if (!prompt.startsWith("Generate a recipe using the following ingredients:")) {
      // If not, add it to the prompt
      prompt = `Generate a recipe using the following ingredients: ${ingredients},\n${prompt}`;
    }

    const response = await hf.textGeneration({
      model: "gpt2",
      inputs: prompt,
      parameters: { max_new_tokens: 250 },
    });

    return response;
  } catch (error) {
    console.error("Error generating text:", error);
    return null;
  }
}
