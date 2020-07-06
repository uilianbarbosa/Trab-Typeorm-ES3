import { Router } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

const lessonRouter = Router();

lessonRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Lesson);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>>', err.message);
    return response.status(400).send();
  }
});

lessonRouter.get('/', async (request, response) => {
  response.json(await getRepository(Lesson).find());
});

lessonRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const repo = getRepository(Lesson);
    const del = await repo.findOne(id);
    const deleta = await repo.delete(del.id);
    console.log('Removido!');
    return response.status(204).json(deleta);
  } catch (err) {
    console.log('err.message :>>', err.message);
  }
});

lessonRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { description, content } = request.body;
  try {
    const repo = getRepository(Lesson);
    const res = await repo.findOne(id);
    if (!res) {
      response.status(400).send();
    } else {
      res.description = description;
      res.content = content;
      const salvar = await repo.save(res);
      response.json(salvar);
    }
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default lessonRouter;
