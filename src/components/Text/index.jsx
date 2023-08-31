import React from "react";

const sizeClasses = {
  txtAgrandirWideHeavy12: "font-agrandir font-extrabold",
  txtAgrandirWideHeavy193: "font-agrandir font-extrabold",
  txtMulishBold10: "font-bold font-mulish",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
