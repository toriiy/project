import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";

export interface IActionToken {
  token: string;
  _userId: string;
  type: ActionTokenTypeEnum;
}
