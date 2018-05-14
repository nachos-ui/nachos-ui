import React from "react";
import PropTable from "@storybook/addon-info/dist/components/PropTable";

const PropTypesTable = ({ propDefinitions, ...props }) => {
  propDefinitions.forEach(def => {
    if (typeof def.propType === "string") {
      def.propType = { name: def.propType };
    }
  });

  return <PropTable propDefinitions={propDefinitions} {...props} />;
};

export default PropTypesTable;
