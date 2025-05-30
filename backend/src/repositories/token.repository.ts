import { IToken, ITokenPairWithUserId } from "../interfaces/token.interface";
import { Token } from "../models/token.model";

class TokenRepository {
  public async create(dto: ITokenPairWithUserId): Promise<IToken> {
    return await Token.create(dto);
  }

  public async findByParams(params: Partial<IToken>): Promise<IToken> {
    return await Token.findOne(params);
  }

  public async deleteByParams(params: Partial<IToken>): Promise<void> {
    await Token.deleteOne(params);
  }

  public async deleteAllByParams(params: Partial<IToken>): Promise<void> {
    await Token.deleteMany(params);
  }
}

export const tokenRepository = new TokenRepository();
