export type SendTokenAmounts = {
  error?: boolean;
  total?: number;
  circulating?: number;
};

export async function getTokenAmounts() {
  let response: Response;
  try {
    response = await fetch("https://supply.send.it/amounts.json", {
      next: { revalidate: 10 },
    });
  } catch (e) {
    console.error("Failed fetching token amounts", e);
    return {
      error: true,
    };
  }

  if (!response.ok) {
    console.error("Failed fetching token amounts", response.statusText);
    return {
      error: true,
    };
  }

  try {
    return (await response.json()) as SendTokenAmounts;
  } catch (e) {
    console.error("Failed parsing response", e);
    return {
      error: true,
    };
  }
}
