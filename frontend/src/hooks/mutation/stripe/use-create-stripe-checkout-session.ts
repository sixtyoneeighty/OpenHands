import { useMutation } from "@tanstack/react-query";
import AgentMojo from "#/api/open-hands";

export const useCreateStripeCheckoutSession = () =>
  useMutation({
    mutationFn: async (variables: { amount: number }) => {
      const redirectUrl = await AgentMojo.createCheckoutSession(
        variables.amount,
      );
      window.location.href = redirectUrl;
    },
  });
