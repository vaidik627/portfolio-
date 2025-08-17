import { getPosts } from '@/utils/utils';
import { Column } from '@once-ui-system/core';
import Certificate from './Certificate';

interface CertificatesProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Certificates({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: CertificatesProps) {
    let allCertificates = getPosts(['src', 'app', 'achievement', 'certificates']);

    const sortedCertificates = allCertificates.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedCertificates = range
        ? sortedCertificates.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedCertificates.length 
          )
        : sortedCertificates;

    return (
        <>
            {displayedCertificates.length > 0 && (
                <Column
                    fillWidth
                    gap="m"
                    marginBottom="40"
                >
                    {displayedCertificates.map((certificate) => (
                        <Certificate
                            key={certificate.slug}
                            certificate={certificate}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Column>
            )}
        </>
    );
}
