# Checklist – Juice Shop Master

## Inhalt der Checkliste
- Projektabgabe Juice Shop Hacking
- Challenges
- Dokumentation
- Hinweise
- Sicherheit
- Testing

---

# Projektabgabe – Juice Shop Meister

Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst.
Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.

---

## 1. Challenges

### Wahl der Challenges
- Für die Abgabe des Projektes solltest du dir **min. 2 und max. 4 Hacking Challenges** innerhalb des Juice Shops aussuchen.
- Die Challenges sollen eigenständig gelöst und dokumentiert werden.
- Die Challenges dürfen **nicht alle aus demselben Bereich kommen**.
  *Beispiel: Drei Videos mit XSS-Angriffen sind nicht zulässig.*

### Das Abgabe-Video
- Für jede Challenge muss ein eigenes Video vorbereitet, aufgenommen und der Dokumentation hinzugefügt werden.
- Die Videos dürfen **maximal 5 Minuten** lang sein.
- Das Video soll:
  - die Dokumentation der Challenge zeigen
  - die Durchführung der Cyberattacke demonstrieren
  - die Schritte während der Durchführung erklären (gesprochen)

### Lösungen und Materialien
- Die Haupt-README muss ein **Table of Contents (ToC)** enthalten.

---

## 2. Dokumentation

- Die Dokumentation des Codes sowie des Projektes soll im Repository in Form von Markdown-Dateien erfolgen.
- **Dokumentationssprache ist Englisch** (für alle Projekte und Unterlagen).

### Aufbau des Projektes
- Es wird das bereits vorhandene **Docusaurus Projekt** genutzt.
- Es gibt einen Hauptordner mit dem Namen **"Juice Shop Master"**.
- Darin befindet sich eine `README.md` mit:
  - einer einzigen H1-Überschrift am Anfang
  - einer Projektbeschreibung (2–5 Sätze)
  - einem Table of Contents
  - einem Quickstart-Bereich
- Für jede Challenge gibt es einen eigenen Unterordner.
  - Darin enthalten:
    - die Dokumentation der Challenge
    - ggf. Screenshots / Bilder

- Die Challenge-Dokumentationen müssen in der Haupt-README verlinkt werden.

---

## 3. Hinweise

- In der README muss ein Hinweis stehen, dass der Inhalt **ausschließlich zu Bildungszwecken** dient.
- Jede Challenge-Lösung sollte in einem **Video von maximal 5 Minuten** präsentiert werden.
- Alle Challenge-Videos müssen in der README verlinkt sein.
- Zusätzlich sollte die Kategorie der Challenge genannt werden.
- Außerdem soll kurz erklärt werden:
  - welche Gefahr die ausgenutzte Sicherheitslücke darstellt
  - welche Konsequenzen aus der Schwachstelle entstehen können

---

## Sicherheitshinweise

- Keine echten persönlichen Daten verwenden.
- Keine SSH-Keys im Git-Repository speichern.
- Keine Passwörter, Tokens oder Benutzernamen im Code speichern
  → stattdessen Environment-Variablen nutzen.
- Keine IP-Adressen oder sensiblen Daten im Repository speichern.

---

## Testing

Bevor du das Projekt einreichst, stelle Folgendes sicher:

- Die Challenges werden kurz erklärt.
- Es wird erklärt, **wie genau** die Sicherheitslücke ausgenutzt wird.
- Die Schritte zur Durchführung der Attacke sind nachvollziehbar.
- Die Hacks können mithilfe des Videos **reproduziert** werden und funktionieren wie gezeigt.
