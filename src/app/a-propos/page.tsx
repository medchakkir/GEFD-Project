import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez le Guide E-Campus France Djibouti, un projet indépendant conçu pour accompagner les étudiants djiboutiens dans leur parcours Campus France.',
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Info className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                À propos du projet
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
                Un guide indépendant pensé pour aider les étudiants djiboutiens à
                comprendre, organiser et réussir leur parcours Campus France,
                sans stress inutile.
              </p>
            </div>

            {/* Mission */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Notre mission
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Rendre le parcours Campus France clair, compréhensible et accessible
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Le{' '}
                  <strong className="text-foreground">
                    Guide E-Campus France Djibouti (GEFD)
                  </strong>{' '}
                  est une initiative indépendante créée pour accompagner les
                  étudiants djiboutiens souhaitant poursuivre leurs études
                  supérieures en France via la plateforme E-Campus France.
                </p>
                <p>
                  Beaucoup d’étudiants se retrouvent perdus face aux démarches,
                  aux documents demandés et au manque d’explications claires.
                  Notre mission est de{' '}
                  <strong className="text-foreground">
                    centraliser les informations essentielles
                  </strong>{' '}
                  et de les expliquer simplement, étape par étape.
                </p>
                <p>
                  Ce guide s’adresse principalement aux élèves en fin de lycée,
                  aux étudiants en licence, ainsi qu’aux diplômés souhaitant
                  candidater dans des établissements français.
                </p>
              </CardContent>
            </Card>

            {/* What we offer */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Ce que vous trouverez ici
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-sm sm:text-base">
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong className="text-foreground">Un guide structuré</strong> :
                    chaque étape expliquée dans l’ordre, sans confusion
                  </li>
                  <li>
                    <strong className="text-foreground">Des conseils pratiques</strong> :
                    basés sur des situations réelles rencontrées par les étudiants
                  </li>
                  <li>
                    <strong className="text-foreground">Des checklists utiles</strong> :
                    pour ne rien oublier avant de passer à l’étape suivante
                  </li>
                  <li>
                    <strong className="text-foreground">Des exemples concrets</strong> :
                    documents, rédactions et bonnes pratiques
                  </li>
                  <li>
                    <strong className="text-foreground">Des solutions claires</strong> :
                    pour comprendre et corriger les erreurs les plus fréquentes
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Nos valeurs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Accessibilité
                  </h3>
                  <p>
                    L’information essentielle doit être compréhensible par tous,
                    quel que soit le niveau ou le parcours académique.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">Clarté</h3>
                  <p>
                    Nous privilégions des explications simples, directes et
                    structurées, sans jargon inutile.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">Fiabilité</h3>
                  <p>
                    Les contenus sont régulièrement vérifiés et mis à jour afin
                    de rester cohérents avec les informations officielles.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-border bg-muted/30 dark:bg-card/50 border-2 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  Important à savoir
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-xs sm:text-sm">
                <p>
                  Ce site est un{' '}
                  <strong className="text-foreground">
                    outil d’information et d’accompagnement indépendant
                  </strong>
                  . Il n’est ni affilié ni officiellement rattaché à Campus France.
                </p>
                <p>
                  Pour toute démarche administrative officielle, nous vous
                  recommandons de consulter le{' '}
                  <a
                    href="https://www.campusfrance.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    site officiel de Campus France
                  </a>{' '}
                  ou de contacter directement l’Espace Campus France de Djibouti.
                </p>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
