# Guide de déploiement sur Render

## Prérequis
- Compte GitHub avec le repository `biomap-app2ie`
- Compte Render (gratuit sur https://render.com)

## Étapes de déploiement

### Option 1: Déploiement automatique via Render Dashboard

1. **Créer un compte Render**
   - Allez sur https://render.com
   - Créez un compte et connectez-vous

2. **Connecter votre repository GitHub**
   - Cliquez sur "New +" → "Web Service"
   - Sélectionnez "Docker" comme runtime
   - Connectez votre compte GitHub
   - Sélectionnez le repository `biomap-app2ie`
   - Sélectionnez la branche `main`

3. **Configuration du service**
   - **Name**: `biomap-app`
   - **Runtime**: Docker
   - **Region**: Choisissez la région la plus proche
   - **Plan**: Free (ou payant selon les besoins)
   - **Dockerfile**: `Dockerfile` (chemin par défaut)

4. **Déployer**
   - Cliquez sur "Deploy"
   - Render construira automatiquement l'image Docker et déploiera l'application

### Option 2: Déploiement avec render.yaml

1. Le fichier `render.yaml` est déjà configuré
2. Pushez les changements vers GitHub
3. Render détectera automatiquement `render.yaml` et utilisera sa configuration

## Variables d'environnement (si nécessaire)

Si votre application a besoin de variables d'environnement:
- Allez dans les paramètres du service Render
- Cliquez sur "Environment"
- Ajoutez les variables nécessaires (ex: API_URL, etc.)

## Vérifier le déploiement

- L'URL de votre application sera disponible immédiatement après le déploiement
- Accédez au endpoint `/health` pour vérifier l'état
- Les logs sont disponibles dans le dashboard Render

## Reconstruction du service

Pour redéployer après des changements:
- Poussez vers GitHub: `git push origin main`
- Render redéploiera automatiquement si vous avez configuré le webhook
- Ou cliquez manuellement sur "Manual Deploy" dans le dashboard

## Optimisations possibles

- **Augmenter les ressources**: Mettez à jour le plan si nécessaire
- **Configurer les environnements**: Créez des services pour staging/production
- **Configurer les webhooks**: Pour des déploiements automatiques personnalisés

## Troubleshooting

**L'application ne démarre pas:**
- Vérifiez les logs dans le dashboard Render
- Assurez-vous que `npm run build` fonctionne localement
- Vérifiez que le port est bien configuré (3000)

**Problèmes de construction Docker:**
- Vérifiez que le Dockerfile est au bon endroit
- Vérifiez que package.json existe
- Essayez de construire localement: `docker build -t biomap-app .`

**L'application se crashe après déploiement:**
- Vérifiez les variables d'environnement
- Vérifiez les logs Render pour les erreurs
- Testez localement avec: `docker run -p 3000:3000 biomap-app`
