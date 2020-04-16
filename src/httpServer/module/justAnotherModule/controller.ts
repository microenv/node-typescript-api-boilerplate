import { Request, Response, NextFunction } from 'express';
import HttpException from 'exception/HttpException';
import { NameSchema, NameDto } from 'dto/Name.dto';
import ensureDto from 'util/ensureDto';

export async function getHello(req: Request, res: Response, next: NextFunction) {
  try {
    const params = ensureDto<NameSchema>(NameDto, req.params);

    res.json({
      message: `Hello, ${params.name}`,
    });
  } catch (error) {
    throw new HttpException(400, 'oi', 'oi', 'oi');
    next(error);
  }
}
