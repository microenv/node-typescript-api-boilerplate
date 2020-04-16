import * as Joi from '@hapi/joi';

export interface NameSchema {
  name: string;
}

export const NameDto = Joi.object<NameSchema>({
  name: Joi.string().required(),
});
