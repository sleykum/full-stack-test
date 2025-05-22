import { BlockStack, Button, Checkbox, Divider, InlineStack, Text } from "@shopify/polaris";
import { DeleteIcon } from "@shopify/polaris-icons";
import type ShoppingItem from "../model/ShoppingItem";

export function ShoppingItemsList( {shoppingItems, onDelete, onChangeBought}: Readonly<{shoppingItems: ShoppingItem[], onDelete: (id: string) => void, onChangeBought: (id: string, bought: boolean) => void}>){           
    return (
        <BlockStack gap="300">
            {
                shoppingItems.map(({_id, name, bought}, index) =>
                <>
                    <InlineStack blockAlign='center' key={_id} gap="400">
                        <Checkbox label checked={bought} onChange={(newChecked) => onChangeBought(_id, newChecked)}/>
                        <div style={{flexGrow: 1}}>
                            <Text as="p" alignment='start' textDecorationLine={bought? 'line-through' : undefined}>
                                {name}
                            </Text>
                        </div>
                        <InlineStack align='end'>
                            <Button onClick={() => onDelete(_id)} variant="plain" tone="critical" icon={DeleteIcon}/>
                        </InlineStack>
                    </InlineStack>
                    {index != shoppingItems.length-1? <Divider/> : <></>}
                </>
                )
            }
        </BlockStack>
    );
}