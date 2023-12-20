const calculate_hp = hp => {
  if (hp > 1 && hp <= 25) {
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
  if (fp > 1 && fp <= 15) {
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
  if (stamina > 1 && stamina <= 15) {
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
  if (stamina > 1 && stamina <= 25) {
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

export {
  calculate_hp,
  calculate_fp,
  calculate_stamina,
  calculate_equip_load,
  calculate_discovery,
};
