import { HfInference } from "@huggingface/inference";

const hf = new HfInference(process.env.HUGGINGFACE_API);

export async function generateText(ingredients: string) {
	try {
		const prompt = ingredients;

		const response = await hf.textGeneration({
			model: "flax-community/t5-recipe-generation",
			inputs: prompt,
			parameters: { max_new_tokens: 250 },
		});

		if (response?.generated_text) {
			return response;
		} else {
			console.error("No generated text in response");
			return null;
		}
	} catch (error) {
		console.error("Error generating text:", error);
		return null;
	}
}
