import { BlockStack, Button, Form, FormLayout, InlineStack, TextField } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import { useState } from "react";

export function AddShoppingItemForm({onSubmit}: Readonly<{onSubmit: (name: string) => void}>) {
    const [name, setName] = useState("");

    return (
        <Form onSubmit={() => onSubmit(name)}>
            <FormLayout>
              <BlockStack gap="200">
                <div style={{flexGrow: 1}}>
                      <TextField label="Produktname" value={name} onChange={(value: string) => setName(value)} autoComplete='off'/>
                  </div>
                <InlineStack align='end'>
                  <Button submit variant="plain" icon={PlusIcon}>Hinzufügen</Button>
                </InlineStack>
              </BlockStack>
            </FormLayout>
        </Form>
    );
}