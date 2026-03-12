---
id: baby-tools-checklist
title: Checklist
sidebar_position: 2
slug: /projects/baby-tools/checklist
---

# Project Checklist

# Inhalt der Checkliste

**Inhalt der Checkliste	1**

**Projektabgabe Baby Tools Shop	2**

[1\. Repository	2](#repository)

.gitignore Datei	[2](#vorhandene-dateien)

Dockerfile	[2](https://docs.google.com/document/d/1whQ7-U7zSC-RRAu5XTU07rexOpNDWHl_szmpyXvGYMA/edit#heading=h.5j89uj5mjirh)

README.md	[2](https://docs.google.com/document/d/1whQ7-U7zSC-RRAu5XTU07rexOpNDWHl_szmpyXvGYMA/edit#heading=h.5j89uj5mjirh)

[2\. Dokumentation](#hinweise)	3

      3[. Hinweise](#hinweise)	3

# 

# 

# 

# Projektabgabe \- Baby Tools Shop `{#projektabgabe---baby-tools-shop}`

Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.

1. ## **Repository** `{#repository}`

### **Vorhandene Dateien** {#vorhandene-dateien}

- [ ] Es wurde eine .gitignore Datei angelegt, die alle irrelevanten Inhalte aus dem git repository ignoriert
- [ ] Es wurde eine Dockerfile Datei angelegt, die das entstehende Container-Image beschreibt. Das Dockerfile genügt den nachstehend formulierten Anforderungen
- [ ] Eine Datei namens README.md ist vorhanden und entsprechend der Kriterien unten erstellt worden
- [ ] Es befinden sich keine weiteren Dateien im Repository, ohne dass diese explizit in der README.md benannt und beschrieben werden.

### **Dockerfile**

- [ ] Du hast ein passendes Base-Image als Grundlage deines eigenen Container Images definiert
- [ ] Du hast einen Port des Containers exposed, sodass der Container vom Internet aus erreichbar ist
- [ ] Du hast alle benötigten Schritte als Teil des Image-Builds Prozesses definiert, sodass die Anwendung ohne zusätzlichen Aufwand gestartet wird
      - [ ] Das beinhaltet zum Beispiel das Installieren von Paket-Abhängigkeiten
      - [ ] Weiterhin sollte das erzeugen der Migration-Files hier definiert werden
      - [ ] Dazu gehört das Starten der Applikation

### **README.md**

- [ ] Die README sollte ein Inhaltsverzeichnis a.k.a. eine Table-of-Contents (ToC) enthalten
- [ ] Eine Sektion mit einer Beschreibung des Repositories muss vorhanden sein. In dieser Beschreibung sollte genannt werden was die wesentlichen Inhalte sind, was der Zweck des Repositories ist
- [ ] Eine Sektion "Quickstart" sollte als Teil der README enthalten sein. Hier sollen kurz die Voraussetzungen genannt und eine Schnellstart-Anleitung beschrieben sein.
      - [ ] Diese Sektion sollte sich sehr weit oben in der README befinden, am besten direkt nach der ToC
- [ ] Es soll eine ausführliche Variante der vorgenannten Sektion als "Usage" enthalten sein. Hier soll genauer auf die Konfiguration und Konfigurierbarkeit eingegangen werden, d.h. es soll auch erklärt werden, wie relevante Passagen modifiziert werden können, um andere Resultate zu erzielen.

2. ## **Dokumentation**

Die Dokumentation des Codes, sowie des Projektes soll im Repository in Form einer README Datei stattfinden.
Die Dokumentationssprache für alle Projekte (und zugehörige Unterlagen) ist englisch.

3. ## **Hinweise** `{#hinweise}`

### **ABGABE-HINWEISE**

- [ ] Deine Abgabe (nachricht in teachable) sollte auf jeden Fall folgende Dinge beinhalten:
      - [ ] Link zum Repository
      - [ ] Link zum Pull-Request auf GitHub
            - [ ] Dazu solltest du unbedingt sicherstellen, dass dein PR als Ziel einen Branch in DEINEM repository hat und nicht als Ziel ein Developer-Akademie Repository angegeben wird
      - [ ] Zusätzlich zu deinem GitHub Repository solltest du ein kurzes Loom Video (maximal 5min.) aufnehmen und bereitstellen, indem du kurz deine Abgabe zeigst und vorstellst was du getan hast \- dabei musst du nicht alle Details erwähnen, jedoch sollst du auf alle relevanten Schritte kurz eingehen und diese zeigen.
      - [ ] Link zur App (IP-Adresse des V-Servers und der passende Port)

### **Sicherheitshinweise**

- [ ] Speichere keine SSH-Keys im Workspace deines Git-Repositories
- [ ] Speichere keine Passwörter, Tokens, oder Benutzernamen in deinem Code. Verwende hierfür stattdessen Environment-Variablen
- [ ] Speichere keine IP-Adressen, oder sonstigen sensiblen Informationen in einem Git Repository

### **Code-Konventionen**

- [ ] Für build-args, environment Variablen und Shell-Variablen gilt folgende Namenskonvention: UPPER\_CASE\_WITH\_UNDERSCORE
- [ ] Bei einer Referenz auf eine Variable sollte immer die `{}`-Notation verwendet werden um Fehler in der Interpretation zu vermeiden: `${SOME\_VAR\_VALUE}`, statt: $SOME\_VAR\_VALUE
- [ ] Es sollten für Build-args, oder Environment Variablen "Default"-Werte konfiguriert werden, allerdings nur dann, wenn dies Sinn ergibt.
- [ ] Kritische Konfiguration wie Tokens, Passwörter oder ähnliches sollte nicht im Code-Repository gespeichert sein, sondern bspw. durch die Verwendung eines .env-files in einen Container hineingegeben werden

### **Testing**

Bevor Du dein Projekt einreichst solltest du die folgenden Dinge sicherstellen und getestet haben:

- [ ] Du solltest das Projekt bzw. die Anwendung mindestens einmal lokal (auf deinem Computer) gestartet haben, bevor du die Containerisierung angehst. Damit kannst du schon mal vorab sehen, was das Ziel des Projekts ist.
- [ ] Der Baby Tools Shop ist erreichbar unter der IP-Adresse deiner Cloud-VM auf Port 8025 (z.B. 123.234.34.45:8025)

#### 
