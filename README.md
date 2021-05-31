# pekocko
Création d'un fichier .env à la racine avec 
BASE_USER = *utilisateur*
BASE_PASSWD = *mot de passe de la base de donnée*
HASH_DEB = *Caractère(s) de début pour hashage du courriel*
HASH_FIN = *Caractère(s) de fin pour hashage du courriel*
TOKEN_KEY = *Cle token*
CLUSTER = *Cluster mongodb*
BASE = *base mongodb*

lancer :
npm install
nodemon server

* un control au niveau du mot de passe à été rajouté. Il doit faire 8 caractères au minimum
avec au moins une majuscule, une minuscule et un caractère spéciale.