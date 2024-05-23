// Composant React pour le texte déformé
const TextWrap = () => {
  // Ajoutez ici les styles Tailwind pour .warp
  const warpStyle =
    "absolute -top-20 -left-10 flex justify-center items-center font-ultra text-[50px] max-w-[600px]";

  // Ajoutez ici les styles Tailwind pour [class*='warp__']
  const warpItemStyle = "absolute";

  // Utilisez une fonction pour générer les styles de transformation
  const getTransformStyle = (index) => {
    // Remplacez les valeurs ci-dessous par les valeurs Tailwind correspondantes
    const transforms = [
      "translate-x-[22.88px] translate-y-[138.85px] rotate-[-1.31rad]",
      "translate-x-[41.10px] translate-y-[97.39px] rotate-[-0.97rad]",
      "translate-x-[74.47px] translate-y-[66.19px] rotate-[-0.67rad]",
      "translate-x-[106.82px] translate-y-[46.99px] rotate-[-0.48rad]",
      "translate-x-[138.38px] translate-y-[35.62px] rotate-[-0.34rad]",
      "translate-x-[160.72px] translate-y-[27.70px] rotate-[-0.21rad]",
      "translate-x-[195.55px] translate-y-[22.90px] rotate-[-0.07rad]",
      "translate-x-[229.35px] translate-y-[22.76px] rotate-[0.07rad]",
      "translate-x-[266.01px] translate-y-[28.03px] rotate-[0.22rad]",
      "translate-x-[300.94px] translate-y-[38.50px] rotate-[0.39rad]",
      "translate-x-[329.83px] translate-y-[54.85px] rotate-[0.59rad]",
      "translate-x-[357.04px] translate-y-[80.59px] rotate-[0.86rad]",
      "translate-x-[383.63px] translate-y-[107.33px] rotate-[1.12rad]",
      "translate-x-[384.52px] translate-y-[138.09px] rotate-[1.37rad]",
    ];
    return `${warpItemStyle} ${transforms[index]}`;
  };

  return (
    <div className={warpStyle} aria-labelledby="warp-label">
      <div aria-role="presentation">
        <span className={getTransformStyle(0)}>R</span>
        <span className={getTransformStyle(1)}>D</span>
        <span className={getTransformStyle(2)}>V</span>
        <span className={getTransformStyle(3)}> </span>
        <span className={getTransformStyle(4)}>l</span>
        <span className={getTransformStyle(5)}>e</span>
        <span className={getTransformStyle(6)}> </span>
        <span className={getTransformStyle(7)}>2</span>
        <span className={getTransformStyle(8)}>2</span>
        <span className={getTransformStyle(9)}> </span>
        <span className={getTransformStyle(10)}>J</span>
        <span className={getTransformStyle(11)}>u</span>
        <span className={getTransformStyle(12)}>i</span>
        <span className={getTransformStyle(13)}>n</span>
      </div>
    </div>
  );
};

export default TextWrap;
