import {PDFDocument} from 'pdf-lib';
import fs from 'react-native-fs';
import {calculateModifier} from '../helper/calculateModifier';

export class UtilPDF {
  private pdf: PDFDocument;
  private failed: boolean;
  public static readonly paths = {
    assets: fs.MainBundlePath,
    cache: fs.CachesDirectoryPath,
    documents: fs.DocumentDirectoryPath,
    downloads: fs.DownloadDirectoryPath,
    pictures: fs.PicturesDirectoryPath,
    temp: fs.TemporaryDirectoryPath,
  };
  // TODO: assegnare ogni abilità del pdf
  private abilityChanger: {[key: string]: string[]} = {
    DEX: ['ACRO', 'STLTH'],
    STR: ['ATH'],
    CON: [],
    INT: ['ARC', 'INV', 'NAT', 'REL', 'HIST'],
    WIS: ['ANIM', 'INS', 'MED', 'PERC', 'SURV'],
    CHA: ['DEC', 'INTI', 'PERF', 'PERS'],
  };

  public constructor() {
    this.failed = false;
  }

  /**
   *
   */
  public async init(
    filePath: string = 'custom/D&D 5e Scheda Personaggio.pdf',
  ): Promise<UtilPDF> {
    this.failed = false;
    try {
      let file = await fs.readFileAssets(filePath, 'base64');
      this.pdf = await PDFDocument.load(file);
    } catch (error) {
      this.failed = true;
      console.error(error);
    }

    return this;
  }

  public setPlayerName(playerName: string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf?.getForm();
    const playerNameField = form.getTextField('PlayerName');
    playerNameField.setText(playerName);

    return this;
  }

  public setCharacterName(characterName: string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const characterNameField = form.getTextField('CharacterName');
    characterNameField.setText(characterName);

    return this;
  }

  public setAlignment(alignment: string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const alignmentField = form.getTextField('Alignment');
    alignmentField.setText(alignment);

    return this;
  }

  public setBackground(background: string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const backgroundField = form.getTextField('Background');
    backgroundField.setText(background);

    return this;
  }

  public setClassAndLevel(className: string, level: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const classField = form.getTextField('ClassLevel');
    classField.setText(`${className} ${level}`);

    return this;
  }

  public setRace(race: string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const raceField = form.getTextField('Race ');
    raceField.setText(race);

    return this;
  }

  public setExperience(experience: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const experienceField = form.getTextField('XP');
    experienceField.setText(experience.toString());

    return this;
  }

  public setArmorClass(armorClass: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const armorClassField = form.getTextField('AC');
    armorClassField.setText(armorClass.toString());

    return this;
  }

  public setInitiative(initiative: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const initiativeField = form.getTextField('Initiative');
    initiativeField.setText(initiative.toString());

    return this;
  }

  public setSpeed(speed: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const speedField = form.getTextField('Speed');
    speedField.setText(speed.toString());

    return this;
  }

  public setMaxHP(maxHP: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const maxHPField = form.getTextField('HPMax');
    maxHPField.setText(maxHP.toString());

    return this;
  }

  setBonusProficiency(bonusProficiency: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const bonusProficiencyField = form.getTextField('ProfBonus');
    bonusProficiencyField.setText(bonusProficiency.toString());

    return this;
  }

  public setAbilityScore(
    ability: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA',
    score: number | string,
  ): UtilPDF {
    if (this.failed) {
      return this;
    }

    const form = this.pdf.getForm();

    const abilityField = form.getTextField(ability);
    abilityField.setText(score.toString());

    const modifierField = form.getTextField(`${ability}mod`);
    const modifier = calculateModifier(Number(score));

    if (!isNaN(modifier)) {
      modifierField.setText(modifier.toString());
    }

    const abilityBonus = modifier;

    this.abilityChanger[ability].forEach(abilityName => {
      const abilityChangerField = form.getTextField(abilityName);
      abilityChangerField.setText(abilityBonus.toString());
    });

    if (ability === 'WIS') {
      // TODO: cambiare anche saggezza passiva
    }

    return this;
  }

  public setInspiration(inspiration: boolean[]): UtilPDF {
    if (this.failed || inspiration.length > 4) {
      return this;
    }
    const form = this.pdf.getForm();
    for (let i = 0; i < inspiration.length; i++) {
      const inspirationField = form.getCheckBox(`insp${i}`);
      inspirationField.check();
    }

    return this;
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
  ): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const savingThrowField = form.getTextField(`ST ${ability}`);
    savingThrowField.setText(savingThrow.toString());
    if (check) {
      const savingThrowCheck = form.getCheckBox(
        `${ability.slice(0, 3).toUpperCase()}prof`,
      );
      savingThrowCheck.check();
    }

    return this;
  }

  public addEquipment(name: string, quantity: number | string): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const equipmentField = form.getTextField('Equipment');
    equipmentField.setText(
      equipmentField.getText() + '\n' + quantity.toString(),
    );

    return this;
  }

  public setMoney(
    type: 'COPPER' | 'SILVER' | 'ELECTRUM' | 'GOLD' | 'PLATINUM',
    quantity: number | string,
  ): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const moneyField = form.getTextField(type[0].toUpperCase() + 'P');
    moneyField.setText(quantity.toString());

    return this;
  }

  public setTraits(traits: string[]): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const traitsField = form.getTextField('Features and Traits');
    traitsField.setText(traitsField.getText() + ', ' + traits.join(', '));

    return this;
  }

  public setFeatures(features: string[]): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const featuresField = form.getTextField('Features and Traits');
    featuresField.setText(featuresField.getText() + ', ' + features.join(', '));

    return this;
  }

  public setAdditionalTraits(traits: string[]): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const traitsField = form.getTextField('Feats+Traits');
    traitsField.setText(traitsField.getText() + ', ' + traits.join(', '));

    return this;
  }

  public setAdditionalFeatures(features: string[]): UtilPDF {
    if (this.failed) {
      return this;
    }
    const form = this.pdf.getForm();
    const featuresField = form.getTextField('Feats+Traits');
    featuresField.setText(featuresField.getText() + ', ' + features.join(', '));

    return this;
  }

  public async save(filePath: string): Promise<UtilPDF> {
    if (this.failed) {
      return this;
    }

    console.log(filePath);
    const pdfBytes = await this.pdf.save();
    let pdfString = '';
    pdfBytes.forEach(byte => {
      pdfString += String.fromCharCode(byte);
    });
    await fs.writeFile(filePath, pdfString, 'ascii');

    return this;
  }
}
