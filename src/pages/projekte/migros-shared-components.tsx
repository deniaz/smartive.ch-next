import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../../components/contact';
import { ImageCard } from '../../components/image-card';
import { Testimonial } from '../../components/testimonial';
import { TextBlock } from '../../components/text-block';
import { Grid } from '../../compositions/grid';
import { LinkList } from '../../compositions/link-list';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../identity/copy';
import { Heading3 } from '../../identity/heading-3';
import { Page } from '../../layouts/page';
import { BlobVariations } from '../../utils/blob-variations';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const SharedComponents: NextPage<Props> = ({ quote, contact, teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="Wiederverwendbare Komponenten für die _ganze_ Migros."
      description="Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen."
    >
      <Copy>
        Um eine einheitliche Benutzeroberfläche über die diversen Migros Plattformen sicherstellen zu können, wurden in
        Zusammenarbeit mit weiteren Migros Partneragenturen die Shared Components ins Leben gerufen.
      </Copy>
      <Copy>
        Einzelne Module werden in einer gemeinsamen Registry abgelegt und können so einfach wiederverwendet werden und bieten
        dennoch ein einheitliches Benutzererlebnis.
      </Copy>
      <LinkList links={[{ label: 'Zur Website', href: 'https://migros.ch' }]} />
    </PageHeader>

    <main>
      <PageSection>
        <Image
          className="rounded bg-mint-200"
          src="/images/projekte/msrc/supermarkt-3.jpg"
          alt="Gemüseabteilung in einem Migros Supermarkt"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>

      <PageSection>
        <Heading3>Atomic Design</Heading3>
        <Copy>
          Die Shared Components sind an das Atomic Design angelehnt. Sie werden in drei Hierarchiestufen (Atome, Moleküle und
          Organismen) unterteilt und sind von Natur aus einfach wiederverwendbar. Ein Button wird beispielsweise nur einmal
          als Atom erstellt, und wird dann an allen Orten wiederverwendet. Dadurch wird ein einheitliches Look-And-Feel
          erreicht, auch wenn die Komponenten auf unterschiedlichen Seiten eingebunden werden.
        </Copy>
        <Copy>
          Mit JavaScript und Benutzerkontext werden die Komponenten erweitert und als interaktive Widgets inklusive Single
          Sign-on zur Verfügung gestellt.
        </Copy>
      </PageSection>
      <PageSection>
        <Testimonial background="apricot" blobs={BlobVariations.apricot[2]} quote={quote} />
      </PageSection>
      <PageSection>
        <Grid cols={3}>
          <TextBlock title="Automatisiertes Testing">
            Die Module werden mit Jasmine, Chai und PhantomJS automatisiert und ausführlich getestet. Mittels Unit,
            Functional und Regression Tests kann so die erwartete Funktionsweise der Module sichergestellt, und Fehler in der
            Zukunft verhindert werden.
          </TextBlock>
          <div>
            <Heading3>Optimierte Builds</Heading3>
            <Copy>
              Webpack stellt sicher, dass nur die auf der Seite wirklich benötigten Komponenten, Bilder und Skripts
              ausgeliefert werden und minimiert somit die Grösse der zu ladenden CSS und JS Dateien massiv.
            </Copy>
            <Copy>
              Mit dem Tree-shaking genannten Algorithmus von Webpack konnte in diesem Fall die Grösse der geladenen Skripte
              auf einer Seite um bis zu 56% reduziert werden.
            </Copy>
            <Copy>
              Die Module werden in fachspezifische Pakete gekapselt und via npm in einer Registry publiziert, sodass sie
              einfach wiederverwendet werden können.
            </Copy>
          </div>
          <TextBlock title="Essentielle Dokumentation">
            In einem heterogenen Umfeld mit diversen Entwicklungspartnern und Technologien ist die Dokumentation essentiell.
            Dank einigen massgeschneiderten Webpack Loadern und Buildscripts kann diese automatisch aus JS Docs und
            Handlebars Templates generiert werden und ist dadurch immer aktuell. In der Dokumentation stehen die Module auch
            zur Vorschau zur Verfügung.
          </TextBlock>
        </Grid>
      </PageSection>
      <PageSection>
        <Contact contact={contact} />
      </PageSection>
      <PageSection title="Weitere Erfolgsgeschichten">
        <Grid cols={3}>
          {teasers.map((teaser) => (
            <ImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers.filialfinder.title),

      contact: Employees.thilo,
      quote: Quotes['coco-msrc'],
    },
  };
};

export default SharedComponents;
