---
id: wordpress-checklist
title: Checklist
sidebar_position: 2
slug: /projects/wordpress/checklist
---

# Project Checklist

# Inhalt der Checkliste

**Inhalt der Checkliste	1**

**Projektabgabe Wordpress	2**

[1\. Repository	2](#repository)

.gitignore Datei	[2](#vorhandene-dateien)

docker-compose.yaml	[2](#heading=h.5j89uj5mjirh)

README.md	[2](#heading=h.5j89uj5mjirh)

[2\. Dokumentation](#hinweise)	3

      3[. Hinweise](#hinweise)	3

# 

# 

# 

# Projektabgabe \- Wordpress `{#projektabgabe---wordpress}`

Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.

1. ## **Repository** `{#repository}`

### **Vorhandene Dateien** `{#vorhandene-dateien}`

- [ ] Es wurde eine .gitignore Datei angelegt, die alle irrelevanten Inhalte aus dem git repository ignoriert
- [ ] Es gibt eine docker-compose.yaml, die den Anforderungen des nächsten Punkts genügt
- [ ] Eine Datei namens README.md ist vorhanden und entsprechend der Kriterien unten erstellt worden
- [ ] Es befinden sich keine weiteren Dateien im Repository, ohne dass diese explizit in der README.md benannt und beschrieben werden.

### **docker-compose.yaml**

- [ ] Es gibt zwei Services, die definiert werden: wordpress und db
- [ ] Es gibt eine Env Konfiguration für den Wordpress Service bei der alle unkritischen Variablen konfiguriert werden (keine Auth\!)
- [ ] Es gibt Volumes-Konfigurationen für die Datenbank, sodass die Inhalte auf einem Dateisystem persistiert werden
- [ ] Es muss sichergestellt sein, dass beide Services im selben Netzwerk betrieben werden

### **README.md**

- [ ] Die README sollte ein Inhaltsverzeichnis a.k.a. eine Table-of-Contents (ToC) enthalten
- [ ] Eine Sektion mit einer Beschreibung des Repositories muss vorhanden sein. In dieser Beschreibung sollte genannt werden was die wesentlichen Inhalte sind, was der Zweck des Repositories ist
- [ ] Eine Sektion "Quickstart" sollte als Teil der README enthalten sein. Hier sollten kurz Voraussetzungen genannt und eine Schnellstart-Anleitung beschrieben sein.
- [ ] Es ausführliche Variante der vorgenannten Sektion so als "Usage" enthalten sein. Hier soll genauer auf die Konfiguration und Konfigurierbarkeit eingegangen werden, d.h. es soll auch erklärt werden wie relevante Passagen modifiziert werden können, um andere Resultate zu erzielen.

2. ## **Dokumentation**

Die Dokumentation des Codes, sowie des Projektes soll im Repository in Form einer README Datei stattfinden.
Die Dokumentationssprache für alle Projekte (und zugehörige Unterlagen) ist Englisch. **Hinweis**: ChatGPT kann hier helfen 😉.

3. ## **Hinweise** `{#hinweise}`

### **Sicherheitshinweise**

- [ ] Speichere keine SSH-Keys im Workspace deines Git-Repositories
- [ ] Speichere keine Passwörter, Tokens, oder Benutzernamen in deinem Code. Verwende hierfür stattdessen Environment-Variablen
- [ ] Speichere keine IP-Adressen, oder sonstigen sensiblen Informationen in einem Git Repository

### **Code-Konventionen**

- [ ] Für build-args, environment Variablen und Shell-Variablen gilt folgende Namenskonvention: UPPER\_CASE\_WITH\_UNDERSCORE
- [ ] Bei einer Referenz auf eine Variable sollte immer die `{}`-Notation verwendet werden um Fehler in der Interpretation zu vermeiden: `${SOME\_VAR\_VALUE}`, statt: $SOME\_VAR\_VALUE
- [ ] Es sollten für build-args, oder Environment Variablen "Default"-Werte konfiguriert werden, allerdings nur dann wenn dies Sinn ergibt.
- [ ] Kritische Konfiguration wie Tokens, Passwörter oder ähnliches sollte nicht im Code-Repository gespeichert sein, sondern bspw. durch die Verwendung eines .env-files in einen Container hineingegeben werden

### **Testing**

Bevor du dein Projekt einreichst, solltest du die folgenden Dinge sichergestellt und getestet haben:

- [ ] Wordpress ist erreichbar unter der IP-Adresse deiner Cloud-VM auf Port 8080
- [ ] Man kann sich mit den von Ihnen konfigurierten Admin-Benutzer-Credentials einloggen und Wordpress navigieren
- [ ] Nach einem Neustart des Setups, sind die konfigurierten Daten noch vorhanden und werden nicht gelöscht oder überschrieben
- [ ] Die Container der Services werden neugestartet, sobald ein Fehler passiert der zum Terminieren des Containers führt.

