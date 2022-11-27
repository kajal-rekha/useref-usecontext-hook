import { useEffect, useRef } from "react";

const BrazilVsArgentina = () => {
  const goals = {
    arg: 4,
    brz: 3,
  };

  const brazilRef = useRef(null);
  const argentinaRef = useRef(null);

  useEffect(() => {
    if (goals.arg > goals.brz) {
      argentinaRef.current.style.color = "skyblue";
    } else {
      brazilRef.current.style.color = "yellow";
    }
  }, []);

  return (
    <div>
      <h1 className="brazil" ref={brazilRef}>
        Brazil: {goals.brz}
      </h1>
      <h1 className="argentina" ref={argentinaRef}>
        Argentina:{goals.arg}
      </h1>
    </div>
  );
};

export default BrazilVsArgentina;
