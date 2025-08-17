"use client";

import { Column, Flex, Heading, Media, SmartLink, Tag, Text, Button, Icon } from '@once-ui-system/core';
import styles from './Certificates.module.scss';
import { formatDate } from '@/utils/formatDate';

interface CertificateProps {
    certificate: any;
    thumbnail: boolean;
    direction?: "row" | "column";
}

export default function Certificate({ certificate, thumbnail, direction }: CertificateProps) {
    return (
        <Flex
            position="relative"
            transition="micro-medium"
            direction="row"
            radius="l"
            className={styles.hover}
            fillWidth
            background="page"
            border="neutral-alpha-weak"
            shadow="s"
            padding="l"
            gap="l"
            style={{ minHeight: '120px' }}
        >
            {/* Certificate Image - Left Side */}
            <Flex
                vertical="center"
                horizontal="center"
                style={{ width: '120px', height: '120px', flexShrink: 0 }}
            >
                {certificate.metadata.image ? (
                    <Media
                        priority
                        className={styles.image}
                        sizes="120px"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="m"
                        src={certificate.metadata.image}
                        alt={'Certificate: ' + certificate.metadata.title}
                        aspectRatio="1 / 1"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                ) : (
                    <Flex
                        background="neutral-alpha-weak"
                        radius="m"
                        vertical="center"
                        horizontal="center"
                        style={{ width: '100px', height: '100px' }}
                    >
                        <Icon name="trophy" size="l" onBackground="neutral-weak" />
                    </Flex>
                )}
            </Flex>

            {/* Certificate Details - Center */}
            <Column
                position="relative"
                fillWidth
                gap="s"
                vertical="center"
                flex={1}
            >
                <Heading
                    as="h3"
                    variant="heading-strong-m"
                    wrap="balance"
                    style={{ margin: 0 }}
                >
                    {certificate.metadata.title}
                </Heading>
                
                <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    style={{ margin: 0 }}
                >
                    {certificate.metadata.summary}
                </Text>
                
                <Flex gap="m" vertical="center" style={{ marginTop: '8px' }}>
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak"
                    >
                        {formatDate(certificate.metadata.publishedAt, false)}
                    </Text>
                    
                    {certificate.metadata.tag && (
                        <Tag
                            label={certificate.metadata.tag}
                            variant="neutral"
                            size="s"
                        />
                    )}
                </Flex>
            </Column>

            {/* Action Buttons - Right Side */}
            <Flex
                vertical="center"
                horizontal="center"
                gap="s"
                style={{ flexShrink: 0 }}
            >
                {/* View Details Button */}
                <SmartLink
                    href={`/achievement/${certificate.slug}`}
                    unstyled
                >
                    <Button
                        variant="secondary"
                        size="s"
                        prefixIcon="eye"
                        data-border="rounded"
                    >
                        View
                    </Button>
                </SmartLink>

                {/* Verify Button - Direct Link */}
                {certificate.metadata.verificationLink && (
                    <Button
                        href={certificate.metadata.verificationLink}
                        variant="primary"
                        size="s"
                        prefixIcon="externalLink"
                        data-border="rounded"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Verify
                    </Button>
                )}
            </Flex>
        </Flex>
    );
}
