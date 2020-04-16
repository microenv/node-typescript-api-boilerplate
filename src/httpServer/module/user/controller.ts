import { Request, Response, NextFunction } from 'express';
import listAllUsers from 'service/parse.service/listAllUsers';
import getUserById from 'service/parse.service/getUserById';
import getUserWithRelations from 'service/parse.service/getUserWithRelations';
import ParseSanitizer from 'service/util/ParseSanitizer';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(
      await listAllUsers(),
    );
  } catch (error) {
    next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await getUserById(req.params.id);
    const userWithRelations = await getUserWithRelations(user);

    res.json(
      ParseSanitizer.sanitizeUserWithRelations(userWithRelations),
    );
  } catch (error) {
    next(error);
  }
}
