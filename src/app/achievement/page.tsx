import { Column, Heading, Meta, Schema, RevealFx, Badge, Text } from "@once-ui-system/core";
import { Certificates } from "@/components/achievement/Certificates";
import { baseURL, achievement, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: achievement.title,
    description: achievement.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(achievement.title)}`,
    path: achievement.path,
  });
}

export default function Achievement() {
  return (
    <Column maxWidth="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={achievement.title}
        description={achievement.description}
        path={achievement.path}
        image={`/api/og/generate?title=${encodeURIComponent(achievement.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/achievement`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth paddingY="32" gap="xl" horizontal="center">
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
          <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}>
            Professional Achievements
          </Badge>
        </RevealFx>
        
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="16">
          <Heading wrap="balance" variant="display-strong-2xl" align="center">
            {achievement.title}
          </Heading>
        </RevealFx>
        
        <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center" paddingBottom="32">
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
            {achievement.description}
          </Text>
        </RevealFx>
      </Column>

      {/* Certificates Section */}
      <RevealFx translateY="16" delay={0.6} fillWidth horizontal="center">
        <Column
          background="page"
          border="neutral-alpha-weak"
          radius="xl"
          shadow="l"
          padding="xl"
          gap="xl"
          fillWidth
          maxWidth="m"
        >
          <Column gap="m" horizontal="center">
            <Heading variant="display-strong-s" align="center">Certificates & Achievements</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
              Click on any certificate to view details and verify authenticity.
            </Text>
          </Column>
          
          <Certificates />
        </Column>
      </RevealFx>
    </Column>
  );
}
