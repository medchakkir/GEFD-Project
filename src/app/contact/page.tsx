'use client';

import { useState } from 'react';
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
import { Button } from '@/components/ui/button';
import { MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: 'error',
        message: 'Veuillez remplir tous les champs obligatoires',
      });
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    setNotification({
      type: 'success',
      message: 'Message envoyé avec succès ! Nous vous répondrons bientôt.',
    });
    setTimeout(() => setNotification(null), 5000);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Notification */}
            {notification && (
              <div
                className={`mb-6 rounded-lg border-2 p-4 text-sm sm:text-base ${
                  notification.type === 'success'
                    ? 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200'
                    : 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200'
                }`}
              >
                {notification.message}
              </div>
            )}

            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <MessageSquare className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Contactez-nous
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
                Une question ? Un besoin d&apos;aide ? N&apos;hésitez pas à nous
                écrire, nous serons ravis de vous aider.
              </p>
            </div>

            {/* Contact Form */}
            <Card className="border-border bg-card border-2 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tous les champs marqués d&apos;un astérisque (*) sont
                  obligatoires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium sm:text-base"
                      >
                        Nom complet <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-input bg-background text-foreground focus:ring-ring w-full rounded-lg border-2 px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium sm:text-base"
                      >
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-input bg-background text-foreground focus:ring-ring w-full rounded-lg border-2 px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium sm:text-base"
                    >
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-input bg-background text-foreground focus:ring-ring w-full rounded-lg border-2 px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="question">Question générale</option>
                      <option value="technical">Problème technique</option>
                      <option value="documentation">Documentation</option>
                      <option value="feedback">Commentaire/Suggestion</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium sm:text-base"
                    >
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-input bg-background text-foreground focus:ring-ring w-full resize-none rounded-lg border-2 px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
                      placeholder="Écrivez votre message ici..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-border bg-muted/30 dark:bg-card/50 mt-6 border-2 transition-colors sm:mt-8">
              <CardHeader>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  Informations importantes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-xs sm:text-sm">
                <p>
                  <strong className="text-foreground">
                    Temps de réponse :
                  </strong>{' '}
                  Nous nous efforçons de répondre à tous les messages dans un
                  délai de 24 à 48 heures ouvrées.
                </p>
                <p>
                  <strong className="text-foreground">
                    Questions techniques :
                  </strong>{' '}
                  Pour les problèmes liés à la plateforme E-Campus France
                  officielle, nous vous recommandons de contacter directement le
                  support de Campus France.
                </p>
                <p>
                  <strong className="text-foreground">Confidentialité :</strong>{' '}
                  Toutes vos informations sont traitées de manière
                  confidentielle et ne sont utilisées que pour répondre à votre
                  demande.
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
