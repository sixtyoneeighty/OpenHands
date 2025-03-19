import { useMutation } from "@tanstack/react-query";
import AgentMojo from "#/api/open-hands";

export const useGetTrajectory = () =>
  useMutation({
    mutationFn: (cid: string) => AgentMojo.getTrajectory(cid),
  });
