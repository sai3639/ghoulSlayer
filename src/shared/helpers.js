export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const A1 = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.A1 - (attacker.level - receiver.level) * 1.25;

  const finalDamage = receivedDamage - receiver.defense / 2;

  return finalDamage;
};
export const A2 = ({ attacker, receiver }) => {
  const receivedDamage =
    attacker.A2 - (attacker.level - receiver.level) * 1.25;

  const finalDamage = receivedDamage - receiver.magicDefense / 2;

  return finalDamage;
};
export const A3 = ({ receiver }) => {
  return receiver.A2 + receiver.level * 0.25;
};
