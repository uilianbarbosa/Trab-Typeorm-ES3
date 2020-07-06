import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import { request } from 'http';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>>', err.message);
  }
});

classRouter.get('/', async (request, response) => {
  response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

classRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, duration } = request.body;
  try {
    const repo = getRepository(Class);
    const res = await repo.findOne(id);
    if (!res) {
      response.status(400).send();
    } else {
      res.name = name;
      res.duration = duration;
      const salvar = await repo.save(res);
      response.json(salvar);
    }
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default classRouter;
