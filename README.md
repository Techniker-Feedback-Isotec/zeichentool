# ISOTEC Zeichentool

Ersatz für Drawboard PDF: PDF öffnen, mit festen Vorlagen zeichnen, Fotos
einsetzen, als PDF zurückspeichern. Läuft im Browser, keine Installation auf
den Rechnern der Kollegen nötig.

## Starten

```
npm install
npm run dev
```

Dann http://localhost:5183 öffnen.

## Bedienung

Es gibt keine freie Werkzeugleiste. Gezeichnet wird nur mit den Vorlagen
rechts, damit alle Zeichnungen gleich aussehen und zur Legende der
Prinzipskizze passen. Nach jedem fertigen Objekt springt das Tool von selbst
auf die Hand und hat das neue Objekt markiert.

### Kopfzeile

PDF öffnen, Leeres Blatt, Foto | Hand, Löschen, Lasso, Rückgängig,
Wiederholen | Zoom, Seite (ganze Seite), Breite | Als PDF speichern.

### Vorlagenleiste

Rechts, mit drei Reitern. Über » lässt sie sich zu einem schmalen Streifen
einklappen, « klappt sie wieder auf. Die Stecknadel fixiert sie: fixiert
bleibt sie nach der Wahl einer Vorlage offen, sonst klappt sie zu (Standard
auf Touch-Geräten), damit das Blatt Platz hat. Die Einstellung bleibt im
Browser gespeichert.

### Reiter Gewerke

Je Gewerk eine Zeile mit Farbmarke und Namen, rechts daneben die Vorlagen der
Legende nur als Symbol (`analysetermin-fotodoku/src/data/legende.ts`, gleiche
Farben, Reihenfolge und Bezeichnungen):

- *Strich* (Grundriss und Querschnitt): gerade Linie, Stärke 3, eckige Enden.
  Anfang anklicken, Ende anklicken (oder ziehen). Umschalt erzwingt waagerecht
  oder senkrecht.
- *Fläche* (Wand- und Balkonflächen): Polygon mit harten Ecken. Punkt für
  Punkt klicken, ein Klick auf den ersten Punkt schließt. Füllung in der
  Gewerkefarbe mit fest 25 % Deckkraft, Rand 1. Ohne Fanghilfen: jeder
  Punkt liegt genau unter dem Mauszeiger (Umschalt erzwingt trotzdem die
  Achse). Aufmaß und Grundriss fangen weiter.
- *Wanddurchbruch* (Sonstiges): Kreuz per Klick.
- *Textfeld mit Pfeil* (Sonstiges, Drawboard-Callout): Klick setzt die
  Pfeilspitze, Feld und Pfeil erscheinen sofort. Feld an die gewünschte
  Stelle ziehen, Pfeilspitze am runden Griff versetzen, dann Doppelklick oder
  Enter zum Schreiben. Der Text bricht an der Feldbreite um, die Höhe wächst
  mit.

### Reiter Aufmaß

Aus Drawboard übernommen: Maßlinie mit Pfeil an beiden Enden (Stärke 1) und
Aufmaßtext (Arial 11), dazu Aufmaßtext (weiß) mit weiß hinterlegter Schrift
für dunkle Planstellen.

### Reiter Grundriss

Deckende Flächen zum Zeichnen eines Grundrisses, in Arbeitsreihenfolge:
Grundfläche (dunkelgraues Polygon, Stärke 8), darauf Räume (weißes Polygon,
Rand 0,1) und Fenster/Türen (weißes Rechteck, Rand 0,1).

### Zahnrad je Vorlage

Erscheint beim Überfahren und an der aktiven Vorlage. Öffnet ein kleines
Fenster mit genau einer Einstellung: Strichdicke, beim Text die Schriftgröße.
Sonst ist nichts verstellbar. Der Wert bleibt im Browser gespeichert und gilt
für neue Objekte; ein gerade markiertes Objekt derselben Vorlage zieht sofort
mit.

### Vorlage festhalten

Doppelklick auf eine Vorlage hält sie fest (📌): dann bleibt sie nach jedem
Objekt aktiv, praktisch für viele Striche hintereinander. Esc oder Hand löst
wieder.

### Lasso

Bereich mit gedrückter Maustaste oder dem Finger einkreisen. Alle Objekte,
deren Mittelpunkt im Lasso liegt, sind danach gemeinsam markiert: greifen und
verschieben, an den vier Ecken der gemeinsamen Box skalieren, Entf löscht
alle. Danach ist die Hand wieder aktiv.

### Hand

Objekte anklicken und verschieben, Entf löscht. Polygone haben an jedem
Eckpunkt einen Griff, Striche an beiden Enden, das Textfeld zusätzlich einen
für die Pfeilspitze. Fotos, Rechtecke und Textfelder werden an den Ecken
skaliert. Doppelklick oder Enter auf Text und Textfeld öffnet den Text.

### Fanghilfen

Beim Zeichnen und beim Ziehen von Punkten: Kanten rasten weich auf
waagerecht, senkrecht, 45 Grad oder parallel zu vorhandenen Kanten ein (bis
5 Grad), nahe Eckpunkte werden gefangen (8 px), gleiche Höhe oder Flucht zu
vorhandenen Punkten ebenfalls (6 px) und als rote gestrichelte Hilfslinie
gezeigt. Werte in `FANG` in `src/vorlagen.js`.

### Fotos

Per Drag & Drop auf die Seite (landet unter dem Mauszeiger), per Strg+V aus
der Zwischenablage oder über "Foto". Danach mit den Eckpunkten skalieren.

### Speichern

Die Markups werden auf das PDF gebrannt. Zusätzlich landen die Markup-Daten
und das unveränderte Original als Anhang im PDF, deshalb lässt sich eine
gespeicherte Datei im Tool wieder öffnen und weiterbearbeiten, ohne dass
etwas doppelt gebrannt wird.

## iPad

Läuft in Safari auf dem iPad, mit Finger und Apple Pencil. Auf dem Blatt
übernimmt das Tool alle Gesten: ein Finger zeichnet oder greift, in der Hand
schiebt ein Finger auf leerer Stelle die Seite, zwei Finger schieben und
zoomen (Pinch). Doppeltipp öffnet den Text eines Textfelds oder schließt ein
Polygon, Doppeltipp auf eine Vorlage hält sie fest. Griffe und Knöpfe sind
auf Touch-Geräten größer. Bei mehr als acht Seiten wird mit einfacher
Pixeldichte gerendert, damit der Canvas-Speicher des iPads reicht. iPhones
sind nicht vorgesehen.

## Tastatur

`V` Hand, `L` Lasso, `Esc` bricht Linie oder Polygon ab, löst eine festgehaltene
Vorlage, wechselt zur Hand oder hebt die Auswahl auf, `Enter` schließt ein
Polygon oder öffnet den Text des markierten Objekts, `Entf` löscht,
`Strg+Z` / `Strg+Y` Rückgängig und Wiederholen, `Strg+S` speichern,
`Strg+Mausrad` zoomen, Rechtsklick ins Blatt wechselt zur Hand.

## Aufbau

| Datei | Inhalt |
| --- | --- |
| `src/main.js` | Oberfläche, Seiten, Eingaben, Fanghilfen |
| `src/zeichnen.js` | Zeichnen, Trefferprüfung, Verschieben, Skalieren |
| `src/export.js` | PDF schreiben und Markups einbetten |
| `src/vorlagen.js` | Vorlagen: Gewerke (Legende) und Aufmaß, Fangabstände |

## Noch offen

- Markups werden beim Export als Bildebene aufgebracht, nicht als echte
  PDF-Anmerkungen. In anderen Readern sind sie deshalb sichtbar, aber nicht
  anklickbar.
- Kein Server, keine Anmeldung: die Dateien bleiben im Browser. Für den
  Rollout an die Kollegen wäre eine Azure-Web-App der nächste Schritt.
- Seiten drehen, sortieren und aus mehreren PDFs zusammenstellen fehlt noch.
- Angepasste Strichdicken liegen im Browser des jeweiligen Rechners, nicht
  zentral.
