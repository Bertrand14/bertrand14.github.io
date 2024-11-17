_variables.scss : Contient toutes les variables (couleurs, espacements, tailles de polices, etc.). Les placer dans un fichier dédié te permet de les réutiliser facilement dans d'autres fichiers.

_mixins.scss : Pour les mixins et les fonctions réutilisables, comme les tailles responsives ou les styles de polices.

_reset.scss : Un fichier de réinitialisation des styles, pour remettre les styles par défaut du navigateur à zéro.

base/ : Contient les styles de base de l’application, par exemple pour la typographie (_typography.scss), les boutons (_buttons.scss), les liens, etc.

components/ : Un sous-dossier pour chaque composant de ton application, comme _navbar.scss, _footer.scss, ou _cards.scss. Associe chaque fichier à un composant React correspondant pour une maintenance plus facile.

layout/ : Contient les styles pour la mise en page globale de l’application (header, footer, sidebar, etc.).

pages/ : Pour les styles spécifiques à chaque page de ton portfolio (_home.scss, _about.scss, _contact.scss, etc.). Cela permet d’isoler les styles spécifiques aux pages sans les mélanger avec ceux des composants.