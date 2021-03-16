import { AuthState } from "./Auth";
import { LaunchState } from "./Launch";

export interface Store {
  Auth: AuthState;
  Launch: LaunchState;
}
