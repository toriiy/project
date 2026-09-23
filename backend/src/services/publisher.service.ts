import { IPublisher, IPublisherQuery } from "../interfaces/publisher.interface";
import { publisherRepository } from "../repositories/publisher.repository";

class PublisherService {
  public async getList(
    query: IPublisherQuery,
  ): Promise<{ entities: IPublisher[]; total: number }> {
    return await publisherRepository.getList(query);
  }

  public async createPublisher(body: Partial<IPublisher>): Promise<IPublisher> {
    return await publisherRepository.create(body);
  }

  public async getById(publisherId: string): Promise<IPublisher> {
    return await publisherRepository.getById(publisherId);
  }

  public async deletePublisher(publisherId: string): Promise<void> {
    await publisherRepository.delete(publisherId);
  }

  public async updatePublisher(
    publisherId: string,
    body: Partial<IPublisher>,
  ): Promise<IPublisher> {
    return await publisherRepository.update(publisherId, body);
  }
}

export const publisherService = new PublisherService();
