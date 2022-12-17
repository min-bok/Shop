import React, { useEffect, useState } from "react";

export function useCounterCheck(props) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    Check();
  }, [props]);

  const Check = async () => {
    if (props === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return disabled;
}
