import React from "react";
import { Box } from "components/Box";
import { Text } from "components/Text";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "components/Collapsible";
import css from "./SchemaBlock.module.css";
import Highlight from "react-highlight";

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

const ToggleIcons = ({
  isVisible,
  isCollapsed,
  toggleCollapse,
  toggleSchema,
}) => {
  if (!isVisible) return null;

  return (
    <div className={css.toggle_icons}>
      <div className={css.toggle_icon} onClick={toggleSchema}>
        {"{}"}
      </div>
      <div className={css.toggle_icon} onClick={toggleCollapse}>
        {isCollapsed ? "-" : "+"}
      </div>
    </div>
  );
};

const SchemaPropertiesBlock = ({ properties, property, isAllExpanded }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(isAllExpanded);
  }, [isAllExpanded]);

  const details = properties[property] || {};
  const {
    enum: enumProp = [],
    type,
    description,
    properties: subProperties,
  } = details;

  const hasSubProperties = !!subProperties;

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Collapsible key={property} open={isOpen}>
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
                onClick={onClick}
              >
                <Tag hasNoBackground isToggable>
                  {type}
                </Tag>
              </CollapsibleTrigger>
            ) : (
              <Tag hasNoBackground>{type}</Tag>
            )}
            {enumProp.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </Box>
        </Box>
        <Text as="span" type="paragraph2" css={{ color: "$colors$textLight" }}>
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
};

const SchemaBlock = ({ schema, isNested }) => {
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isAllExpanded, setIsAllExpanded] = React.useState(false);
  const [isSchemaShown, setIsSchemaShown] = React.useState(false);

  const { title, description, auth_required, auth_scopes, properties } = schema;

  const memoizedSchema = React.useMemo(() => {
    return JSON.stringify(schema, null, 2);
  }, [schema]);

  const nestedHeadStyle = {
    backgroundColor: "rgba(37,37,37,.72)",
    padding: "12px 24px",
    marginTop: "8px",
  };

  const onMouseEnter = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  const toggleCollapse = () => {
    setIsAllExpanded(!isAllExpanded);
  };

  const toggleSchema = () => {
    setIsSchemaShown(!isSchemaShown);
  };

  return (
    <Box
      col
      className={css.schema_block}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
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
          <ToggleIcons
            isVisible={isMouseOver}
            isCollapsed={isAllExpanded}
            toggleCollapse={toggleCollapse}
            toggleSchema={toggleSchema}
          ></ToggleIcons>
          {isSchemaShown ? (
            <pre style={{ overflow: "auto" }} className={css.json_schema}>
              {memoizedSchema}
            </pre>
          ) : (
            Object.keys(properties).map((property) => (
              <SchemaPropertiesBlock
                key={property}
                properties={properties}
                property={property}
                isAllExpanded={isAllExpanded}
              />
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default SchemaBlock;
