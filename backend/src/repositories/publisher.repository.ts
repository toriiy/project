import { OrderEnum } from "../enums/order.enum";
import { SortPublisherEnum } from "../enums/sort.enum";
import { IPublisher, IPublisherQuery } from "../interfaces/publisher.interface";
import { Publisher } from "../models/publisher.model";

class PublisherRepository {
  public async getList(
    query: IPublisherQuery,
  ): Promise<{ entities: IPublisher[]; total: number }> {
    const page = query?.page || 1;
    const limit = query?.limit || 10;
    const skip = limit * (page - 1);
    const order = query?.order || OrderEnum.ASC;
    const sort = query?.sort || SortPublisherEnum.CREATED_AT;

    const [entities, total] = await Promise.all([
      Publisher.find()
        .limit(limit)
        .skip(skip)
        .sort({ [sort]: order }),
      Publisher.countDocuments(),
    ]);

    return { entities, total };
  }

  public async create(body: Partial<IPublisher>): Promise<IPublisher> {
    return await Publisher.create(body);
  }

  public async getById(publisherId: string): Promise<IPublisher> {
    return await Publisher.findById(publisherId);
  }

  public async delete(publisherId: string): Promise<void> {
    await Publisher.findByIdAndDelete(publisherId);
  }

  public async update(
    publisherId: string,
    body: Partial<IPublisher>,
  ): Promise<IPublisher> {
    return await Publisher.findByIdAndUpdate(publisherId, body, {
      returnDocument: "after",
    });
  }
}

export const publisherRepository = new PublisherRepository();
