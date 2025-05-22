import { useEffect, useState } from 'react'
import './App.css'
import { BlockStack, Button, Card, Checkbox, Divider, InlineStack, Page, Text } from '@shopify/polaris'
import axios from 'axios';
import { AddShoppingItemForm } from './components/AddShoppingItemForm';
import { DeleteIcon } from '@shopify/polaris-icons';
import type ShoppingItem from './model/ShoppingItem';

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
              <BlockStack gap="300">
                {shoppingItems.map(({_id, name, bought}, index) =>
                <>
                  <InlineStack blockAlign='center' key={_id} gap="400">
                    <Checkbox label checked={bought} onChange={(newChecked) => setShoppingItemBought(_id, newChecked)}/>
                    <div style={{flexGrow: 1}}>
                      <Text as="p" alignment='start' textDecorationLine={bought? 'line-through' : undefined}>
                      {name}
                    </Text>
                    </div>
                    <InlineStack align='end'>
                      <Button onClick={() => deleteShoppingItem(_id)} variant="plain" tone="critical" icon={DeleteIcon}/>
                    </InlineStack>
                  </InlineStack>
                  {index != shoppingItems.length-1? <Divider/> : <></>}
                </>
                )}
              </BlockStack>
            </Card>
          : <></>
        }
        
      </BlockStack>
    </Page>
      
  )
}

export default App
