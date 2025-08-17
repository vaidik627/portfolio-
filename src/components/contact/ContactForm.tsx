"use client";

import { useState } from "react";
import { Column, Text, Input, TextArea, Button } from "@once-ui-system/core";
import { contact } from "@/resources";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Column gap="l">
      <form onSubmit={handleSubmit}>
        <Column gap="m">
          <Column gap="s">
            <Text variant="label-default-s" weight="medium">
              {contact.form.fields.name.label}
            </Text>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder={contact.form.fields.name.placeholder}
              required={contact.form.fields.name.required}
              data-border="rounded"
            />
          </Column>
          
          <Column gap="s">
            <Text variant="label-default-s" weight="medium">
              {contact.form.fields.email.label}
            </Text>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder={contact.form.fields.email.placeholder}
              required={contact.form.fields.email.required}
              data-border="rounded"
            />
          </Column>
          
          <Column gap="s">
            <Text variant="label-default-s" weight="medium">
              {contact.form.fields.message.label}
            </Text>
            <TextArea
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder={contact.form.fields.message.placeholder}
              required={contact.form.fields.message.required}
              rows={6}
              data-border="rounded"
            />
          </Column>
        </Column>
        
        <Button
          type="submit"
          variant="primary"
          size="l"
          weight="medium"
          data-border="rounded"
          fillWidth
        >
          {contact.form.submit}
        </Button>
      </form>
    </Column>
  );
}
