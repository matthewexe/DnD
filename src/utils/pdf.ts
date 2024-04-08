import {PDFDocument} from 'pdf-lib';
import fs from 'react-native-fs';
import {calculateModifier} from '../helper/calculateModifier';

export class UtilPDF {
  private pdf: PDFDocument;
  private failed: boolean;
  // TODO: assegnare ogni abilità del pdf
  private abilityChanger: {[key: string]: string[]} = {
    DEX: ['ACRO'],
  };

  public constructor() {
    this.failed = false;
  }

  /**
   *
   */
  public async init(
    filePath: string = 'src/assets/D&D 5e Scheda Personaggio.pdf',
  ) {
    this.failed = false;
    try {
      let file = await fs.readFile(filePath);
      this.pdf = await PDFDocument.load(file);
      console.log(
        this.pdf
          .getForm()
          .getFields()
          .map(f => f.getName()),
      );
    } catch (error) {
      this.failed = true;
      console.error(error);
    }

    return this;
  }

  public setPlayerName(playerName: string) {
    if (this.failed) return;
    const form = this.pdf?.getForm();
    const playerNameField = form.getTextField('PlayerName');
    playerNameField.setText(playerName);
  }

  public setCharacterName(characterName: string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const characterNameField = form.getTextField('CharacterName');
    characterNameField.setText(characterName);
  }

  public setAlignment(alignment: string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const alignmentField = form.getTextField('Alignment');
    alignmentField.setText(alignment);
  }

  public setBackground(background: string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const backgroundField = form.getTextField('Background');
    backgroundField.setText(background);
  }

  public setClassAndLevel(className: string, level: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const classField = form.getTextField('ClassLevel');
    classField.setText(`${className} ${level}`);
  }

  public setRace(race: string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const raceField = form.getTextField('Race');
    raceField.setText(race);
  }

  public setExperience(experience: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const experienceField = form.getTextField('XP');
    experienceField.setText(experience.toString());
  }

  public setArmorClass(armorClass: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const armorClassField = form.getTextField('AC');
    armorClassField.setText(armorClass.toString());
  }

  public setInitiative(initiative: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const initiativeField = form.getTextField('Initiative');
    initiativeField.setText(initiative.toString());
  }

  public setSpeed(speed: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const speedField = form.getTextField('Speed');
    speedField.setText(speed.toString());
  }

  public setMaxHP(maxHP: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const maxHPField = form.getTextField('HPMax');
    maxHPField.setText(maxHP.toString());
  }

  setBonusProficiency(bonusProficiency: number | string) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const bonusProficiencyField = form.getTextField('ProfBonus');
    bonusProficiencyField.setText(bonusProficiency.toString());
  }

  public setAbilityScore(
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA',
    score: number | string,
  ) {
    if (this.failed) return;

    const form = this.pdf.getForm();

    const abilityField = form.getTextField(ability);
    abilityField.setText(score.toString());

    const modifierField = form.getTextField(`${ability}mod`);
    const modifier = calculateModifier(Number(score));

    if (!isNaN(modifier)) {
      modifierField.setText(modifier.toString());
    }
  }

  public setInspiration(inspiration: boolean[]) {
    if (this.failed || inspiration.length > 4) return;
    const form = this.pdf.getForm();
    for (let i = 0; i < inspiration.length; i++) {
      const inspirationField = form.getCheckBox(`insp${i}`);
      inspirationField.check();
    }
  }

  public setSavingThrow(
    ability:
      | 'Strength'
      | 'Dexterity'
      | 'Constitution'
      | 'Intelligence'
      | 'Wisdom'
      | 'Charisma',
    savingThrow: number | string,
    check: boolean,
  ) {
    if (this.failed) return;
    const form = this.pdf.getForm();
    const savingThrowField = form.getTextField(`ST ${ability}`);
    savingThrowField.setText(savingThrow.toString());
    if (check) {
      const savingThrowCheck = form.getCheckBox(
        `${ability.slice(0, 3).toUpperCase()}prof`,
      );
      savingThrowCheck.check();
    }
  }

  public async save(filePath: string) {
    if (this.failed) return;
    const pdfBytes = await this.pdf.save();
    await fs.writeFile(filePath, pdfBytes.toString());
  }
}