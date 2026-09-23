import { NextFunction, Request, Response } from "express";

import { IPublisher, IPublisherQuery } from "../interfaces/publisher.interface";
import { publisherService } from "../services/publisher.service";

class PublisherController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as unknown as IPublisherQuery;
      const result = await publisherService.getList(query);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { publisherId } = req.params;
      const result = await publisherService.getById(publisherId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async createPublisher(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const body = req.body as Partial<IPublisher>;
      const publisher = await publisherService.createPublisher(body);
      res.json(publisher);
    } catch (e) {
      next(e);
    }
  }

  public async updatePublisher(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { publisherId } = req.params;
      const body = req.body as Partial<IPublisher>;
      const result = await publisherService.updatePublisher(publisherId, body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async deletePublisher(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { publisherId } = req.params;
      await publisherService.deletePublisher(publisherId);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  }
}

export const publisherController = new PublisherController();
