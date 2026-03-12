---
id: v-setup-server-checklist
title: Checklist
sidebar_position: 2
slug: /projects/v-setup-server/checklist
---

# Project Checklist

# Inhalt der Checkliste

**Inhalt der Checkliste	1**

**Projektabgabe V-Server Einrichtung	2**

[1\. Einrichtung des V-Servers	2](#einrichtung-des-v-servers)

SSH-Key hinzufügen	[2](#aufgaben)

Passwort-Login deaktivieren	[2](https://docs.google.com/document/d/1whQ7-U7zSC-RRAu5XTU07rexOpNDWHl_szmpyXvGYMA/edit#heading=h.5j89uj5mjirh)

Webserver installieren	[2](https://docs.google.com/document/d/1whQ7-U7zSC-RRAu5XTU07rexOpNDWHl_szmpyXvGYMA/edit#heading=h.5j89uj5mjirh)

Git Konfiguration	[2](https://docs.google.com/document/d/1whQ7-U7zSC-RRAu5XTU07rexOpNDWHl_szmpyXvGYMA/edit#heading=h.5j89uj5mjirh)

      2[. Hinweise](#hinweise)	3

      3[. Dokumentation](#hinweise)	3

# 

# 

# 

# Projektabgabe \- V-Server einrichten `{#projektabgabe---v-server-einrichten}`

Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.
**Beachte** dazu auch die Sektion *3\. Dokumentation* am Ende dieses Dokuments.*.*

1. ## **Einrichtung des V-Servers** `{#einrichtung-des-v-servers}`

### **Aufgaben** `{#aufgaben}`

- [ ] Füge deinen SSH Public Key zu den authorized\_keys deines Benutzers hinzu. Dafür kann das Programm ssh-copy-id aus der Kommandozeile auf dem eigenen Computer verwendet werden.
      - [ ] Das Key-Pair, welches du für die Interaktion mit deinem Server benutzen willst, solltest du auf deinem Computer generieren \- **nicht** auf dem Server.
- [ ] Deaktiviere den Passwort Login auf dem Server
      - [ ] Stelle sicher, dass ein Login mit einem SSH-Key erfolgreich funktioniert hat, **bevor** du den Passwort Login deaktivierst
- [ ] Installiere den Webserver NGINX
- [ ] Verändere die Konfiguration von NGINX, sodass eine alternative HTML-Seite als Einstiegspunkt angezeigt wird. Gegebenenfalls muss hierzu NGINX neu gestartet werden
- [ ] Konfiguriere git auf deinem V-Server so, dass dein Nutzername und deine Email-Adresse hinterlegt sind. Die Benutzerdaten sollten den Daten auf deinem Computer entsprechen, bzw. deckungsgleich mit deinen in GitHub hinterlegten Daten sein.
      - [ ] Um die Konfiguration für Git und GitHub vollständig abzuschließen, solltest du ein SSH-Key-Pair auf deinem Server anlegen, sodass du den Public Key in Github hinterlegen kannst, um von deinem Server aus Repositories auf den Server zu pullen und mit ihnen zu interagieren.

2. ## **Hinweise** `{#hinweise}`

### **Allgemeine Hinweise**

- [ ] Zusätzlich zu deinem GitHub Repository solltest du ein kurzes Loom Video (maximal 5min.) aufnehmen und bereitstellen, indem du kurz deine Abgabe zeigst und vorstellst was du getan hast \- dabei musst du nicht alle Details erwähnen, jedoch sollst du auf alle relevanten Schritte kurz eingehen und diese zeigen

### **Sicherheitshinweise**

- [ ] Stelle sicher, dass ein Login mit einem SSH-Key erfolgreich funktioniert hat, **bevor** du den Passwort Login deaktivierst

### **Testing**

Bevor du dein Projekt einreichst, solltest du die folgenden Dinge sichergestellt und getestet haben:

- [ ] Man kann sich mit Hilfe eines SSH-Keys auf dem Server anmelden
- [ ] Man kann sich **nicht** mit einer Kombination aus Nutzernamen und Passwort anmelden
      - [ ] Hierzu kann die SSH-Option \-o PubKeyAuthentication=no hilfreich sein
            z.B. ssh \-o PubKeyAuthentication=no \-i pfad/zum/private-key user@12.34.67.89  
- [ ] Teste die Verfügbarkeit deines Webservers, indem du die IP-Adresse des V-Servers in deinen Browser in der Adresszeile eingibst und die Eingabe bestätigst. Du solltest dann einen Willkommens-Bildschirm von NGINX angezeigt bekommen
      - [ ] Bevor du die Konfiguration anwendest kannst du diese mit Hilfe von
            nginx \-t validieren (deine Konfiguration liegt unter /etc/nginx/nginx.conf)  
      - [ ] Falls du eine eigene Konfigurationsdatei für nginx hast, dann kannst du diese folgendermaßen isoliert testen:
            nginx \-t \-c pfad/zur/config  
- [ ] Validiere, dass die neue Konfiguration von deinem NGINX Server angewendet wird und im Browser dementsprechend deine HTML Seite zu sehen ist

3. ## **Dokumentation**

### **Git-Repository mit README**

- [ ] Die Dokumentation soll auf englisch geschrieben werden.
- [ ] Lege ein Git-Repository "v-server-setup" an, um dort deine Schritte zur vollständigen Einrichtung des V-Servers zu dokumentieren
      - [ ] Achte darauf, dass du nicht Sicherheitskritische Inhalte wie dein Passwort oder den Inhalt deiner SSH Keys in das Repository schreibst
- [ ] Die README Datei sollte in Markdown Format geschrieben und ordentlich strukturiert sein
      - [ ] Eine Inhaltsangabe sollte vorhanden sein
      - [ ] Die einzelnen Schritte sollten jeweils in einer Sektion, oder ggf. auch in einem eigenen Dokument beschrieben sein. Bei mehreren Dokumenten sollten diese sinnvoll miteinander verlinkt sein.
- [ ] Diese Checkliste sollte ebenfalls als PDF im Repository enthalten sein.

Bei deiner Abgabe solltest du am besten auch die IP-Adresse deines V-Servers mit angeben, sodass die Mentoren dort auch die Konfiguration überprüfen können.
