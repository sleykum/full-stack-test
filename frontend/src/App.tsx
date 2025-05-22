import { useEffect, useState } from 'react'
import { BlockStack, Card, Page } from '@shopify/polaris'
import axios from 'axios';
import { AddShoppingItemForm } from './components/AddShoppingItemForm';
import type ShoppingItem from './model/ShoppingItem';
import { ShoppingItemsList } from './components/ShoppingItemsList';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});
function App() {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  
  useEffect(() => {
    axiosInstance.get('/items').then(
      (response) => setShoppingItems(response.data)
    ).catch(error => {
      console.error(error);
    });
  }, [])

  async function addShoppingItem(name: string){
    await axiosInstance.post('/items', {name: name}).catch(error => console.error(error));
    const shoppingItems = await axiosInstance.get('/items').catch(error => console.error(error));
    if(!shoppingItems){
      return;
    }
    setShoppingItems(shoppingItems.data);
  }

  async function setShoppingItemBought(id: string, bought: boolean){
    await axiosInstance.put(`/items/${id}`, {bought: bought}).catch(error => console.error(error));
    const shoppingItems = await axiosInstance.get('/items').catch(error => console.error(error));
    if(!shoppingItems){
      return;
    }
    setShoppingItems(shoppingItems.data);
  }

  async function deleteShoppingItem(id: string){
    await axiosInstance.delete(`/items/${id}`).catch(error => console.error(error));
    const shoppingItems = await axiosInstance.get('/items').catch(error => console.error(error));
    if(!shoppingItems){
      return;
    }
    setShoppingItems(shoppingItems.data);
  }


  return (
    <Page
      title="Einkaufsliste"
      compactTitle
    >
      <BlockStack gap="400">
        <Card>
          <AddShoppingItemForm onSubmit={(name) => addShoppingItem(name)}/>
        </Card>
        {
          shoppingItems.length !== 0 ? 
            <Card>
              <ShoppingItemsList shoppingItems={shoppingItems} onChangeBought={((id, bought) => setShoppingItemBought(id, bought))} onDelete={(id) => deleteShoppingItem(id)}/>
            </Card>
          : <></>
        }
      </BlockStack>
    </Page>
      
  )
}

export default App
