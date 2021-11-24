import React from "react";
import { Box } from "components/Box";
import { Text } from "components/Text";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "components/Collapsible";
import css from "./SchemaBlock.module.css";

const Tag = ({ children, style = {}, hasNoBackground, isToggable }) => {
  const commonStyle = {
    color: isToggable ? undefined : "#85acb0",
  };

  const localStyle = {
    ...style,
    ...commonStyle,
    ...(hasNoBackground
      ? {}
      : { backgroundColor: "rgba(133, 172, 176, 0.16)" }),
  };

  return (
    <Text as="span" style={localStyle} className={css.tag}>
      {children}
    </Text>
  );
};

const SchemaBlock = ({ schema, isNested }) => {
  const { title, description, auth_required, auth_scopes, properties } = schema;

  const nestedHeadStyle = {
    backgroundColor: "rgba(37,37,37,.72)",
    padding: "12px 24px",
    marginTop: "8px",
  };

  return (
    <Box col className={css.schema_block}>
      <Box
        col
        className={css.schema_block_head}
        style={isNested ? nestedHeadStyle : undefined}
      >
        <Text
          as="span"
          type={isNested ? "paragraph1" : "subtitle1"}
          css={{ fontWeight: "bold" }}
        >
          {title}
        </Text>
        <Box ai="center">
          <Text
            as="span"
            type="paragraph2"
            css={{ color: "$colors$textLight", flex: 1 }}
          >
            {description}
          </Text>
          {auth_required && (
            <Box style={{ flex: 0 }} ai="center">
              <Text
                as="span"
                type="paragraph2"
                css={{ color: "$colors$textLight", whiteSpace: "pre" }}
              >
                Auth Required:
              </Text>
              {auth_scopes.map((scope, index) => (
                <Tag key={index}>{scope}</Tag>
              ))}
            </Box>
          )}
        </Box>
      </Box>
      {properties && (
        <Box
          col
          className={css.schema_block_properties}
          style={{
            background: isNested ? "rgba(37,37,37,.4)" : undefined,
          }}
        >
          {Object.keys(properties).map((property) => {
            const details = properties[property];
            const { type, description, properties: subProperties } = details;

            const hasSubProperties = !!subProperties;

            return (
              <Collapsible key={property}>
                <Box col className={css.schema_block_property}>
                  <Box style={{ marginBottom: "12px" }}>
                    <Text
                      as="span"
                      type="paragraph1"
                      style={{ fontWeight: "bold", flex: 1 }}
                    >
                      {property}
                    </Text>
                    <Box style={{ flex: 1 }}>
                      {hasSubProperties ? (
                        <CollapsibleTrigger
                          style={{
                            background: "#323738",
                            borderRadius: "4px",
                            border: "none",
                            cursor: "pointer",
                            color: "white",
                          }}
                        >
                          <Tag hasNoBackground isToggable>
                            {type}
                          </Tag>
                        </CollapsibleTrigger>
                      ) : (
                        <Tag hasNoBackground>{type}</Tag>
                      )}
                    </Box>
                  </Box>
                  <Text
                    as="span"
                    type="paragraph2"
                    css={{ color: "$colors$textLight" }}
                  >
                    {description}
                  </Text>
                  {hasSubProperties && (
                    <CollapsibleContent>
                      <SchemaBlock schema={details} isNested />
                    </CollapsibleContent>
                  )}
                </Box>
              </Collapsible>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default SchemaBlock;