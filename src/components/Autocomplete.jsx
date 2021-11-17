import React from "react";
import { styled } from "stitches.config";

const StyledAutocomplete = styled("div", {
  display: "block",
  position: "relative",
  fontSize: "$fontSizes#3",
  flex: 1,
});

const StyledMenu = styled("div", {
  borderRadius: "3px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
  background: "rgba(255, 255, 255, 0.9)",
  padding: "2px 0",
  position: "absolute",
  overflow: "auto",
  width: "100%",
});

const StyledMenuItem = styled("div", {
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "1rem 1.6rem",
  variants: {
    highlighted: {
      true: {
        backgroundColor: "lightgray",
      },
    },
  },
});

const StyledInput = styled("input", {
  border: "1px solid #323738;",
  borderRadius: "4px",
  height: "40px",
  padding: "10px 12px",
  outline: 0,
  width: "100%",
});

const StyledLabel = styled("label", {
  position: "absolute",
  transformOrigin: "top left",
  transition: "all .25s ease",
  fontSize: "$fontSizes$3",
  variants: {
    selected: {
      false: {
        transform: "translate(0.7rem, 0.7rem)",
      },
      true: {
        transform: "translate(0.7rem, -0.4rem) scale(0.75)",
        backgroundColor: "$white",
        px: "4px",
      },
    },
  },
});

function getScrollOffset() {
  return {
    x:
      window.pageXOffset !== undefined
        ? window.pageXOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollLeft,
    y:
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop,
  };
}

const Autocomplete = ({
  items,
  onChange,
  inputProps = {},
  selectedItem,
  shouldItemRender,
  renderItem,
  getItemKey,
  getItemValue,
  onSelect,
  label = "",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(null);
  const [dropdownPosition, setDropdownPosition] = React.useState({});
  const inputRef = React.useRef();
  const [value, setValue] = React.useState("");

  const ignoreBlur = React.useRef(false);
  const ignoreFocus = React.useRef(false);
  const scrollOffset = React.useRef(null);
  const scrollTimerRef = React.useRef(null);

  const selectedLabel = getItemValue(selectedItem);

  React.useEffect(() => {
    return () => {
      clearTimeout(scrollTimerRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (selectedLabel) {
      setValue(selectedLabel);
      onSelect?.({});
    }
  }, [selectedLabel]);

  React.useEffect(() => {
    const maybeScrollItemIntoView = () => {};

    if (isOpen) {
      setMenuPositions();
      maybeScrollItemIntoView();
    }
  }, [isOpen]);

  const keyDownHandlers = {
    ArrowDown(event) {
      event.preventDefault();
      const items = getFilteredItems();
      if (!items.length) return;
      let index = highlightedIndex === null ? -1 : highlightedIndex;
      for (let i = 0; i < items.length; i++) {
        const p = (index + i + 1) % items.length;
        index = p;
        break;
      }
      if (index > -1 && index !== highlightedIndex) {
        setIsOpen(true);
        setHighlightedIndex(index);
      }
    },
    ArrowUp(event) {
      event.preventDefault();
      const items = getFilteredItems();
      if (!items.length) return;
      let index = highlightedIndex === null ? items.length : highlightedIndex;
      for (let i = 0; i < items.length; i++) {
        const p = (index - (1 + i) + items.length) % items.length;
        index = p;
        break;
      }
      if (index !== items.length) {
        setIsOpen(true);
        setHighlightedIndex(index);
      }
    },

    Enter(event) {
      if (event.keyCode !== 13) return;

      setIgnoreBlur(false);
      if (!isOpen) {
        return;
      } else if (highlightedIndex == null) {
        setIsOpen(false);
        inputRef.current.select();
      } else {
        event.preventDefault();
        const item = getFilteredItems()[highlightedIndex];
        const value = getItemKey(item);

        setIsOpen(false);
        setHighlightedIndex(null);
        onSelect?.(item, value);
      }
    },
    Escape() {
      setIgnoreBlur(false);
      setIsOpen(false);
      setHighlightedIndex(null);
    },
    Tab() {
      setIgnoreBlur(false);
    },
  };

  const handleKeyDown = (event) => {
    if (keyDownHandlers[event.key]) keyDownHandlers[event.key](event);
    else if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange?.(event);
  };

  const getFilteredItems = () => {
    let filteredItems = items.filter((item) => {
      const label = getItemValue(item);
      return label.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    if (shouldItemRender) {
      filteredItems = filteredItems.filter((item) => shouldItemRender(item));
    }

    return filteredItems;
  };

  const setMenuPositions = () => {
    const node = inputRef.current;
    const rect = node.getBoundingClientRect();

    setDropdownPosition({
      maxHeight: window.innerHeight - rect.top - rect.height - 10,
    });
  };

  const highlightItemFromMouse = (index) => {
    setHighlightedIndex(index);
  };

  const selectItemFromMouse = (item) => {
    const value = getItemKey(item);
    setIgnoreBlur(false);
    setIsOpen(false);
    setHighlightedIndex(null);
    onSelect?.(item, value);
  };

  const setIgnoreBlur = (ignore) => {
    ignoreBlur.current = ignore;
  };

  const renderMenu = () => {
    const items = getFilteredItems().map((item, index) => {
      const element = renderItem(item);
      return (
        <StyledMenuItem
          key={index}
          onMouseEnter={() => highlightItemFromMouse(index)}
          onClick={() => selectItemFromMouse(item)}
          highlighted={highlightedIndex === index}
        >
          {element}
        </StyledMenuItem>
      );
    });
    return (
      <StyledMenu
        style={dropdownPosition}
        onTouchStart={() => setIgnoreBlur(true)}
        onMouseEnter={() => setIgnoreBlur(true)}
        onMouseLeave={() => setIgnoreBlur(false)}
      >
        {items}
      </StyledMenu>
    );
  };

  const handleInputBlur = (event) => {
    if (ignoreBlur.current) {
      scrollOffset.current = getScrollOffset();
      inputRef.current.focus();
      return;
    }
    setIsOpen(false);
    setHighlightedIndex(null);
    const { onBlur } = inputProps;
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleInputFocus = (event) => {
    if (ignoreFocus.current) {
      ignoreFocus.current = false;
      const { x, y } = scrollOffset.current;
      scrollOffset.current = null;
      window.scrollTo(x, y);

      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        scrollTimerRef.current = null;
        window.scrollTo(x, y);
      }, 0);
      return;
    }
    setIsOpen(true);
    const { onFocus } = inputProps;
    if (onFocus) {
      onFocus(event);
    }
  };

  const isInputFocused = () => {
    const el = inputRef.current;
    return el.ownerDocument && el === el.ownerDocument.activeElement;
  };

  const handleInputClick = () => {
    if (isInputFocused() && !isOpen) {
      setIsOpen(true);
    }
  };

  const composeEventHandlers = (internal, external) => {
    return external
      ? (e) => {
          internal(e);
          external(e);
        }
      : internal;
  };

  const open = isOpen;
  return (
    <StyledAutocomplete>
      <StyledLabel selected={isOpen || !!getItemKey(selectedItem)}>
        {label}
      </StyledLabel>
      <StyledInput
        {...inputProps}
        role="combobox"
        autoComplete="off"
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleChange}
        onKeyDown={composeEventHandlers(handleKeyDown, inputProps.onKeyDown)}
        onClick={composeEventHandlers(handleInputClick, inputProps.onClick)}
        value={value}
      />
      {open && renderMenu()}
    </StyledAutocomplete>
  );
};

export default Autocomplete;
