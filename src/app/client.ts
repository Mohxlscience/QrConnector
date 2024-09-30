import { createThirdwebClient } from "thirdweb";

// Utilisez directement votre client ID ici
const clientId = "c98a5d48ad89f114ad6044933fced541";

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
