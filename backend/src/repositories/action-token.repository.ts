import { IActionToken } from "../interfaces/actionToken.interface";
import { ActionToken } from "../models/actionToken.model";

class ActionTokenRepository {
  public async create(dto: any): Promise<IActionToken> {
    return await ActionToken.create(dto);
  }

  public async findByParams(
    params: Partial<IActionToken>,
  ): Promise<IActionToken> {
    return await ActionToken.findOne(params);
  }

  public async deleteByParams(params: Partial<IActionToken>): Promise<void> {
    await ActionToken.deleteOne(params);
  }
}

export const actionTokenRepository = new ActionTokenRepository();
