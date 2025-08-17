import { Flex, Meta, Schema, Column, Heading, Text, Button, Icon, RevealFx, Badge } from "@once-ui-system/core";
import { baseURL, contact, person, social } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contact.title)}`,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`/api/og/generate?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth paddingY="32" gap="xl" horizontal="center">
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
          <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}>
            Let's work together
          </Badge>
        </RevealFx>
        
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-2xl" align="center">
            {contact.headline}
          </Heading>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center" paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
            {contact.subline}
          </Text>
        </RevealFx>
      </Column>

      {/* Main Contact Section */}
      <Flex fillWidth gap="xl" mobileDirection="column">
        {/* Left Side - Contact Methods */}
        <Column flex={1} gap="l">
          <RevealFx translateY="16" delay={0.6}>
            <Column
              background="page"
              border="neutral-alpha-weak"
              radius="xl"
              shadow="l"
              padding="xl"
              gap="xl"
            >
              <Column gap="m">
                <Heading variant="display-strong-s">Get in Touch</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Choose your preferred way to connect. I'm always excited to hear about new opportunities and collaborations.
                </Text>
              </Column>
              
              {/* Primary Contact Methods */}
              <Column gap="m">
                <Button
                  href={`mailto:${contact.info.email}`}
                  variant="primary"
                  size="l"
                  weight="medium"
                  data-border="rounded"
                  fillWidth
                  prefixIcon="mail"
                >
                  Send me an email
                </Button>
                
                <Button
                  href={social.find(s => s.name === "LinkedIn")?.link || "#"}
                  variant="secondary"
                  size="l"
                  weight="medium"
                  data-border="rounded"
                  fillWidth
                  prefixIcon="linkedin"
                >
                  Connect on LinkedIn
                </Button>
                
                <Button
                  href={social.find(s => s.name === "GitHub")?.link || "#"}
                  variant="secondary"
                  size="l"
                  weight="medium"
                  data-border="rounded"
                  fillWidth
                  prefixIcon="github"
                >
                  Check out my GitHub
                </Button>
              </Column>
            </Column>
          </RevealFx>
        </Column>

        {/* Right Side - Contact Info */}
        <Column flex={1} gap="l">
          <RevealFx translateY="16" delay={0.8}>
            <Column
              background="page"
              border="neutral-alpha-weak"
              radius="xl"
              shadow="l"
              padding="xl"
              gap="xl"
            >
              <Column gap="m">
                <Heading variant="display-strong-s">Contact Information</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Here's where you can find me and how to reach out.
                </Text>
              </Column>
              
              {/* Contact Details */}
              <Column gap="l">
                {/* Email */}
                <Flex gap="m" vertical="center">
                  <Flex
                    background="brand-alpha-weak"
                    radius="full"
                    padding="12"
                    vertical="center"
                    horizontal="center"
                  >
                    <Icon name="mail" size="m" onBackground="brand-strong" />
                  </Flex>
                  <Column gap="xs" flex={1}>
                    <Text variant="label-default-s" weight="medium">Email</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {contact.info.email}
                    </Text>
                  </Column>
                </Flex>
                
                {/* Phone */}
                <Flex gap="m" vertical="center">
                  <Flex
                    background="brand-alpha-weak"
                    radius="full"
                    padding="12"
                    vertical="center"
                    horizontal="center"
                  >
                    <Icon name="phone" size="m" onBackground="brand-strong" />
                  </Flex>
                  <Column gap="xs" flex={1}>
                    <Text variant="label-default-s" weight="medium">Phone</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {contact.info.phone}
                    </Text>
                  </Column>
                </Flex>
                
                {/* Location */}
                <Flex gap="m" vertical="center">
                  <Flex
                    background="brand-alpha-weak"
                    radius="full"
                    padding="12"
                    vertical="center"
                    horizontal="center"
                  >
                    <Icon name="mapPin" size="m" onBackground="brand-strong" />
                  </Flex>
                  <Column gap="xs" flex={1}>
                    <Text variant="label-default-s" weight="medium">Location</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {contact.info.location}
                    </Text>
                  </Column>
                </Flex>
              </Column>
            </Column>
          </RevealFx>
        </Column>
      </Flex>

      {/* Social Links Section */}
      <RevealFx translateY="24" delay={1.0} fillWidth horizontal="center" paddingTop="xl">
        <Column
          background="page"
          border="neutral-alpha-weak"
          radius="xl"
          shadow="l"
          padding="xl"
          gap="l"
          maxWidth="m"
        >
          <Column gap="m" horizontal="center">
            <Heading variant="display-strong-s" align="center">Follow My Journey</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
              Stay updated with my latest projects, thoughts, and professional journey.
            </Text>
          </Column>
          
          <Flex gap="m" wrap horizontal="center">
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="m"
                    variant="secondary"
                    data-border="rounded"
                  />
                ),
            )}
          </Flex>
        </Column>
      </RevealFx>

      {/* Call to Action */}
      <RevealFx translateY="32" delay={1.2} fillWidth horizontal="center" paddingTop="xl">
        <Column
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          radius="xl"
          padding="xl"
          gap="m"
          horizontal="center"
          maxWidth="m"
        >
          <Heading variant="display-strong-s" align="center">Ready to Collaborate?</Heading>
          <Text variant="body-default-m" align="center" onBackground="neutral-weak">
            Whether it's a project, opportunity, or just a friendly chat about tech, I'd love to hear from you!
          </Text>
          <Button
            href={`mailto:${contact.info.email}?subject=Let's collaborate!`}
            variant="primary"
            size="l"
            weight="medium"
            data-border="rounded"
            prefixIcon="mail"
          >
            Start a conversation
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
