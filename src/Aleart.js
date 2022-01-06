import React, { useEffect } from "react";

export default function Alert({ type, msg, removeAlert, people }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
}
