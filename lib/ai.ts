const GPT_API_KEY = "sample"; //"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";

interface GPTResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function generatePost(): Promise<string> {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a professional healthcare social media manager.",
          },
          {
            role: "user",
            content: "Generate a professional and engaging social media post for a healthcare practice. Include relevant hashtags.",
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate post");
    }

    const data: GPTResponse = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating post:", error);
    throw error;
  }
}

export async function generateImage(): Promise<string> {
  // Implement actual image generation here
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "https://example.com/generated-image.jpg";
}