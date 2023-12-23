const calculate_hp = hp => {
  if (hp > 0 && hp <= 25) {
    return Math.floor(300 + 500 * ((hp - 1) / 24) ** 1.5);
  }
  if (hp > 25 && hp <= 40) {
    return Math.floor(800 + 650 * ((hp - 25) / 15) ** 1.1);
  }
  if (hp > 40 && hp <= 60) {
    return Math.floor(1450 + 450 * (1 - (1 - (hp - 40) / 20) ** 1.2));
  }
  if (hp > 60 && hp <= 99) {
    return Math.floor(1900 + 200 * (1 - (1 - (hp - 60) / 39) ** 1.2));
  }
  return '0';
};

const calculate_fp = fp => {
  if (fp > 0 && fp <= 15) {
    return Math.floor(50 + 45 * ((fp - 1) / 14));
  }
  if (fp > 15 && fp <= 35) {
    return Math.floor(95 + 105 * ((fp - 15) / 20));
  }
  if (fp > 35 && fp <= 60) {
    return Math.floor(200 + 150 * (1 - (1 - (fp - 35) / 25) ** 1.2));
  }
  if (fp > 60 && fp <= 99) {
    return Math.floor(350 + 100 * ((fp - 60) / 39));
  }
  return '0';
};

const calculate_stamina = stamina => {
  if (stamina > 0 && stamina <= 15) {
    return Math.floor(80 + 25 * ((stamina - 1) / 14));
  }
  if (stamina > 15 && stamina <= 35) {
    return Math.floor(105 + 25 * ((stamina - 15) / 15));
  }
  if (stamina > 35 && stamina <= 60) {
    return Math.floor(130 + 25 * ((stamina - 30) / 20));
  }
  if (stamina > 60 && stamina <= 99) {
    return Math.floor(155 + 15 * ((stamina - 50) / 49));
  }
  return '0';
};

const calculate_equip_load = stamina => {
  if (stamina > 0 && stamina <= 25) {
    return Math.floor((45 + 27 * ((stamina - 8) / 17)) * 10) / 10;
  }
  if (stamina > 25 && stamina <= 60) {
    return Math.floor((72 + 48 * ((stamina - 25) / 35) ** 1.1) * 10) / 10;
  }
  if (stamina > 60 && stamina <= 99) {
    return Math.floor((120 + 40 * ((stamina - 60) / 39)) * 10) / 10;
  }
  return '0';
};

const calculate_discovery = arcane => {
  if (arcane > 1 && arcane <= 99) {
    return 100 + arcane;
  }
  return '0';
};

const calculate_physical_defense = (level, strength) => {
  let level_value = 0
  let strength_value = 0

  if (level > 0 && level <= 71) {
    level_value = 40 + 60 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 91) {
    level_value = 100 + 20 * ((level + 79 - 150) / 20)
  }
  if (level > 91 && level <= 161) {
    level_value = 120 + 15 * ((level + 79 - 170) / 70)
  }
  if (level > 161 && level <= 713) {
    level_value = 135 + 20 * ((level + 79 - 240) / 552)
  }

  if (strength > 0 && strength <= 30) {
    strength_value = 10 * (strength / 30)
  }
  if (strength > 30 && strength <= 40) {
    strength_value = 10 + 5 * ((strength - 30) / 10)
  }
  if (strength > 40 && strength <= 60) {
    strength_value = 15 + 15 * ((strength - 40) / 20)
  }
  if (strength > 60 && strength <= 99) {
    strength_value = 30 + 10 * ((strength - 60) / 39)
  }

  return Math.floor(level_value + strength_value);
};

const calculate_magical_defense = (level, intelligence) => {
  let level_value = 0
  let intelligence_value = 0

  if (level > 0 && level <= 71) {
    level_value = 40 + 60 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 91) {
    level_value = 100 + 20 * ((level + 79 - 150) / 20)
  }
  if (level > 91 && level <= 161) {
    level_value = 120 + 15 * ((level + 79 - 170) / 70)
  }
  if (level > 161 && level <= 713) {
    level_value = 135 + 20 * ((level + 79 - 240) / 552)
  }

  if (intelligence > 0 && intelligence <= 20) {
    intelligence_value = 40 * (intelligence / 20)
  }
  if (intelligence > 20 && intelligence <= 35) {
    intelligence_value = 40 + 10 * ((intelligence - 20) / 15)
  }
  if (intelligence > 35 && intelligence <= 60) {
    intelligence_value = 50 + 10 * ((intelligence - 35) / 25)
  }
  if (intelligence > 60 && intelligence <= 99) {
    intelligence_value = 60 + 10 * ((intelligence - 60) / 39)
  }

  return Math.floor(level_value + intelligence_value);
};

const calculate_fire_defense = (level, vigor) => {
  let level_value = 0
  let vigor_value = 0

  if (level > 0 && level <= 71) {
    level_value = 40 + 60 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 91) {
    level_value = 100 + 20 * ((level + 79 - 150) / 20)
  }
  if (level > 91 && level <= 161) {
    level_value = 120 + 15 * ((level + 79 - 170) / 70)
  }
  if (level > 161 && level <= 713) {
    level_value = 135 + 20 * ((level + 79 - 240) / 552)
  }

  if (vigor > 0 && vigor <= 30) {
    vigor_value = 20 * (vigor / 30)
  }
  if (vigor > 30 && vigor <= 40) {
    vigor_value = 20 + 20 * ((vigor - 30) / 10)
  }
  if (vigor > 40 && vigor <= 60) {
    vigor_value = 40 + 20 * ((vigor - 40) / 20)
  }
  if (vigor > 60 && vigor <= 99) {
    vigor_value = 60 + 10 * ((vigor - 60) / 39)
  }

  return Math.floor(level_value + vigor_value);
};

const calculate_lightning_defense = (level) => {
  let level_value = 0

  if (level > 0 && level <= 71) {
    level_value = 40 + 60 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 91) {
    level_value = 100 + 20 * ((level + 79 - 150) / 20)
  }
  if (level > 91 && level <= 161) {
    level_value = 120 + 15 * ((level + 79 - 170) / 70)
  }
  if (level > 161 && level <= 713) {
    level_value = 135 + 20 * ((level + 79 - 240) / 552)
  }

  return Math.floor(level_value);
};

const calculate_holy_defense = (level, holy) => {
  let level_value = 0
  let holy_value = 0

  if (level > 0 && level <= 71) {
    level_value = 40 + 60 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 91) {
    level_value = 100 + 20 * ((level + 79 - 150) / 20)
  }
  if (level > 91 && level <= 161) {
    level_value = 120 + 15 * ((level + 79 - 170) / 70)
  }
  if (level > 161 && level <= 713) {
    level_value = 135 + 20 * ((level + 79 - 240) / 552)
  }

  if (holy > 0 && holy <= 20) {
    holy_value = 40 * (holy / 20)
  }
  if (holy > 20 && holy <= 35) {
    holy_value = 40 + 10 * ((holy - 20) / 15)
  }
  if (holy > 35 && holy <= 60) {
    holy_value = 50 + 10 * ((holy - 35) / 25)
  }
  if (holy > 60 && holy <= 99) {
    holy_value = 60 + 10 * ((holy - 60) / 39)
  }

  return Math.floor(level_value + holy_value);
};

const calculate_immunity = (level, vigor) => {
  let level_value = 0
  let vigor_value = 0

  if (level > 0 && level <= 71) {
    level_value = 75 + 30 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 111) {
    level_value = 105 + 40 * ((level + 79 - 150) / 40)
  }
  if (level > 111 && level <= 161) {
    level_value = 145 + 15 * ((level + 79 - 190) / 50)
  }
  if (level > 161 && level <= 713) {
    level_value = 160 + 20 * ((level + 79 - 240) / 552)
  }

  if (vigor > 0 && vigor <= 30) {
    vigor_value = 0
  }
  if (vigor > 30 && vigor <= 40) {
    vigor_value = 30 * ((vigor - 30) / 10)
  }
  if (vigor > 40 && vigor <= 60) {
    vigor_value = 30 + 10 * ((vigor - 40) / 20)
  }
  if (vigor > 60 && vigor <= 99) {
    vigor_value = 40 + 10 * ((vigor - 60) / 39)
  }

  return Math.floor(level_value + vigor_value);
};

const calculate_robustness = (level, endurance) => {
  let level_value = 0
  let endurance_value = 0

  if (level > 0 && level <= 71) {
    level_value = 75 + 30 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 111) {
    level_value = 105 + 40 * ((level + 79 - 150) / 40)
  }
  if (level > 111 && level <= 161) {
    level_value = 145 + 15 * ((level + 79 - 190) / 50)
  }
  if (level > 161 && level <= 713) {
    level_value = 160 + 20 * ((level + 79 - 240) / 552)
  }

  if (endurance > 0 && endurance <= 30) {
    endurance_value = 0
  }
  if (endurance > 30 && endurance <= 40) {
    endurance_value = 30 * ((endurance - 30) / 10)
  }
  if (endurance > 40 && endurance <= 60) {
    endurance_value = 30 + 10 * ((endurance - 40) / 20)
  }
  if (endurance > 60 && endurance <= 99) {
    endurance_value = 40 + 10 * ((endurance - 60) / 39)
  }

  return Math.floor(level_value + endurance_value);
};

const calculate_focus = (level, mind) => {
  let level_value = 0
  let mind_value = 0

  if (level > 0 && level <= 71) {
    level_value = 75 + 30 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 111) {
    level_value = 105 + 40 * ((level + 79 - 150) / 40)
  }
  if (level > 111 && level <= 161) {
    level_value = 145 + 15 * ((level + 79 - 190) / 50)
  }
  if (level > 161 && level <= 713) {
    level_value = 160 + 20 * ((level + 79 - 240) / 552)
  }

  if (mind > 0 && mind <= 30) {
    mind_value = 0
  }
  if (mind > 30 && mind <= 40) {
    mind_value = 30 * ((mind - 30) / 10)
  }
  if (mind > 40 && mind <= 60) {
    mind_value = 30 + 10 * ((mind - 40) / 20)
  }
  if (mind > 60 && mind <= 99) {
    mind_value = 40 + 10 * ((mind - 60) / 39)
  }

  return Math.floor(level_value + mind_value);
};

const calculate_vitality = (level, arcane) => {
  let level_value = 0
  let arcane_value = 0

  if (level > 0 && level <= 71) {
    level_value = 75 + 30 * ((level + 79 - 1) / 149)
  }
  if (level > 71 && level <= 111) {
    level_value = 105 + 40 * ((level + 79 - 150) / 40)
  }
  if (level > 111 && level <= 161) {
    level_value = 145 + 15 * ((level + 79 - 190) / 50)
  }
  if (level > 161 && level <= 713) {
    level_value = 160 + 20 * ((level + 79 - 240) / 552)
  }

  if (arcane > 0 && arcane <= 15) {
    arcane_value = arcane
  }
  if (arcane > 15 && arcane <= 40) {
    arcane_value = 15 + 15*((arcane - 15) / 25)
  }
  if (arcane > 40 && arcane <= 60) {
    arcane_value = 30 + 10*((arcane - 40) / 20)
  }
  if (arcane > 60 && arcane <= 99) {
    arcane_value = 40 + 10*((arcane - 60) / 39)
  }

  return Math.floor(level_value + arcane_value);
};

export {
  calculate_hp,
  calculate_fp,
  calculate_stamina,
  calculate_equip_load,
  calculate_discovery,
  calculate_physical_defense,
  calculate_magical_defense,
  calculate_fire_defense,
  calculate_lightning_defense,
  calculate_holy_defense,
  calculate_immunity,
  calculate_robustness,
  calculate_focus,
  calculate_vitality,
};
