import { AgentMojoAction } from "./actions";
import { AgentMojoObservation } from "./observations";
import { AgentMojoVariance } from "./variances";

export type AgentMojoParsedEvent =
  | AgentMojoAction
  | AgentMojoObservation
  | AgentMojoVariance;
