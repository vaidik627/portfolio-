import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, Column, Heading, Text, Button, Flex, RevealFx, Badge } from "@once-ui-system/core";
import { CustomMDX } from "@/components";
import { baseURL, achievement, person } from "@/resources";

interface CertificatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const certificates = getPosts(["src", "app", "achievement", "certificates"]);
  return certificates.map((certificate) => ({
    slug: certificate.slug,
  }));
}

export async function generateMetadata({ params }: CertificatePageProps) {
  const { slug } = await params;
  const certificates = getPosts(["src", "app", "achievement", "certificates"]);
  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    return {
      title: "Certificate Not Found",
    };
  }

  return Meta.generate({
    title: certificate.metadata.title,
    description: certificate.metadata.summary,
    baseURL: baseURL,
    image: certificate.metadata.image,
    path: `${achievement.path}/${slug}`,
  });
}

export default async function CertificatePage({ params }: CertificatePageProps) {
  const { slug } = await params;
  const certificates = getPosts(["src", "app", "achievement", "certificates"]);
  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    notFound();
  }

  return (
    <Column maxWidth="m" horizontal="center" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={certificate.metadata.title}
        description={certificate.metadata.summary}
        path={`${achievement.path}/${slug}`}
        image={certificate.metadata.image}
        author={{
          name: person.name,
          url: `${baseURL}${achievement.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Certificate Header */}
      <RevealFx translateY="4" fillWidth horizontal="center">
        <Column
          background="page"
          border="neutral-alpha-weak"
          radius="xl"
          shadow="l"
          padding="xl"
          gap="l"
          fillWidth
          horizontal="center"
        >
          <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}>
            Certificate Verification
          </Badge>
          
          <Heading variant="display-strong-l" align="center" wrap="balance">
            {certificate.metadata.title}
          </Heading>
          
          <Text variant="body-default-m" align="center" onBackground="neutral-weak">
            {certificate.metadata.summary}
          </Text>
          
          {certificate.metadata.verificationLink && (
            <Flex horizontal="center" paddingTop="m">
              <Button
                href={certificate.metadata.verificationLink}
                variant="primary"
                size="l"
                weight="medium"
                data-border="rounded"
                prefixIcon="externalLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify Certificate
              </Button>
            </Flex>
          )}
        </Column>
      </RevealFx>

      {/* Certificate Content */}
      <RevealFx translateY="8" delay={0.2} fillWidth>
        <Column
          background="page"
          border="neutral-alpha-weak"
          radius="xl"
          shadow="l"
          padding="xl"
          gap="l"
          fillWidth
        >
          <CustomMDX source={certificate.content} />
        </Column>
      </RevealFx>
    </Column>
  );
}
