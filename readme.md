**¿Cómo crear los instaladores de la aplicación?**
===================================================

Paso 1: Instalar la aplicación
------------------------------

Comando 1:
``
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
``

Comando 2:
``
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
``

Comando 3: 
``
sudo apt update && sudo apt install yarn
``


Paso 2: Instalar los paquetes necesarios
------------------------------

Instalaremos los paquetes necesarios ejecutando:


``
sudo yarn
``


Paso 3: Creamos los instaladores
------------------------------

``
sudo yarn preelectron-pack
``

``
sudo yarn electron-pack
``

``
sudo yarn postinstall
``


Paso 4: Instalamos la aplicación
------------------------------

Primero, instalamos el gestor de paquetes **snap**.

``
sudo apt install snapd
``

Después utilizaremos este gestor de paquetes para instalar nuestra aplicación

``
sudo snap install --dangerous 3xp0rts-c0ntr0l_1.0.2_amd64.snap
``