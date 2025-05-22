import express, { Request, Response } from 'express';
import ShoppingItemModel from '../model/ShoppingItemModel';
const ShoppingItemRouter = express.Router();
 
ShoppingItemRouter.post('/', async (request: Request, response: Response) => {
  const shoppingItem = new ShoppingItemModel(request.body);

  try{
    await shoppingItem.save();
    response.send(shoppingItem);
  } catch (error) {
    response.status(500).send(error);
  }
});

ShoppingItemRouter.get('/', async (request: Request, response: Response) => {
  try{
    const shoppingItems = await ShoppingItemModel.find({});
    response.send(shoppingItems);
  } catch (error) {
    response.status(500).send(error);
  }
});

ShoppingItemRouter.put('/:id', async (request: Request, response: Response) => {
  try{
    const shoppingItem = await ShoppingItemModel.findById(request.params.id);
    if(!shoppingItem){
        response.status(404).send();
        return;
    }
    shoppingItem!.bought = request.body.bought;
    await shoppingItem!.save();
    response.send(shoppingItem);
  } catch (error) {
    response.status(500).send(error);
  }
});

ShoppingItemRouter.delete('/:id', async (request: Request, response: Response) => {
  try{
    const shoppingItem = await ShoppingItemModel.findByIdAndDelete(request.params.id);
    if(!shoppingItem){
        response.status(404).send();
        return;
    }
    response.status(204).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
 
export default ShoppingItemRouter;