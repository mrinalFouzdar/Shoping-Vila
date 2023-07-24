import React, { useEffect, useRef, useState } from "react";
import Select, { components } from "react-select";

const { MenuList, ValueContainer, SingleValue, Placeholder } = components;

const formatOptionLabel = ({ value }) => <div>{value}</div>;

const CustomMenuList = ({ selectProps, ...props }) => {
  const { onInputChange, inputValue, onMenuInputFocus } = selectProps;

  console.log(inputValue);

  // Copied from source
  const ariaAttributes = {
    "aria-autocomplete": "list",
    "aria-label": selectProps["aria-label"],
    "aria-labelledby": selectProps["aria-labelledby"],
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <input
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: 10,
          border: "none",
          borderBottom: "1px solid lightgrey",
        }}
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
        type="text"
        value={inputValue}
        onChange={(e) =>
          onInputChange(e.currentTarget.value, {
            action: "input-change",
          })
        }
        onMouseDown={(e) => {
          e.stopPropagation();
          e.target.focus();
        }}
        onTouchEnd={(e) => {
          e.stopPropagation();
          e.target.focus();
        }}
        onFocus={onMenuInputFocus}
        placeholder="Search..."
        {...ariaAttributes}
      />
      <MenuList {...props} selectProps={selectProps} />
    </div>
  );
};

// Set custom `SingleValue` and `Placeholder` to keep them when searching
const CustomValueContainer = ({ children, selectProps, ...props }) => {
  const commonProps = {
    cx: props.cx,
    clearValue: props.clearValue,
    getStyles: props.getStyles,
    getValue: props.getValue,
    hasValue: props.hasValue,
    isMulti: props.isMulti,
    isRtl: props.isRtl,
    options: props.options,
    selectOption: props.selectOption,
    setValue: props.setValue,
    selectProps,
    theme: props.theme,
  };

  return (
    // <ValueContainer {...props} selectProps={selectProps}>
    //   {React.Children.map(children, (child) => {
    //     return child ? (
    //       child
    //     ) : props.hasValue ? (
    //       <SingleValue
    //         {...commonProps}
    //         isFocused={selectProps.isFocused}
    //         isDisabled={selectProps.isDisabled}
    //       >
    //         {selectProps.getOptionLabel(props.getValue()[0])}
    //       </SingleValue>
    //     ) : (
    //       <Placeholder
    //         {...commonProps}
    //         key="placeholder"
    //         isDisabled={selectProps.isDisabled}
    //         data={props.getValue()}
    //       >
    //         {selectProps.placeholder}
    //       </Placeholder>
    //     );
    //   })}
    // </ValueContainer>
    <ValueContainer {...props} selectProps={selectProps}>
      {React.Children.map(children, (child) => {
        return child ? (
          child
        ) : props.hasValue ? (
          <SingleValue
            {...commonProps}
            isFocused={selectProps.isFocused}
            isDisabled={selectProps.isDisabled}
          >
            {selectProps.getOptionLabel(props.getValue()[0])}
          </SingleValue>
        ) : (
          <Placeholder
            {...commonProps}
            key="placeholder"
            isDisabled={selectProps.isDisabled}
            data={props.getValue()}
          >
            {selectProps.placeholder}
          </Placeholder>
        );
      })}
    </ValueContainer>
  );
};

// const DropdownIndicator = (props) => {
//     return (
//       <components.DropdownIndicator {...props}>
//         <span>▼</span>
//       </components.DropdownIndicator>
//     );
//   };
const CustomSelect = ({ options }) => {
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  //   console.log(object)

  const styles = {
    control: (base) => ({
      ...base,
      width: "100%",
      background: " #F5F6F7 0% 0% no-repeat padding-box",
      boxShadow: "none",
      border: "none",
      cursor: "pointer",
      height: "20px",
      "&:hover": {
        boxShadow: "none",
      },
    }),
    menuList: (provided) => ({
      ...provided,
      cursor: "pointer",
      maxHeight: "200px",
      paddingTop: "0px",
      "&::-webkit-scrollbar": {
        width: "16px",
        height: " 16px",
        display: "block !important",
        background: "none",
      },
      "&::-webkit-scrollbar-track": {
        background: "none",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        boxShadow: "inset 0 0 16px rgba(240, 232, 232, 1)",
        minHeight: "60px !important",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#888",
      },
    }),
  };

  const onDomClick = (e) => {
    let menu = containerRef.current.querySelector(".select__menu");

    if (
      !containerRef.current.contains(e.target) ||
      !menu ||
      !menu.contains(e.target)
    ) {
      console.log("object");
      setIsFocused(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", onDomClick);

    return () => {
      document.removeEventListener("mousedown", onDomClick);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Select
        className="basic-single"
        classNamePrefix="react-select"
        styles={styles}
        name="color"
        options={options}
        formatGroupLabel={formatOptionLabel}
        components={{
          // DropdownIndicator,
          MenuList: CustomMenuList,
          ValueContainer: CustomValueContainer,
        }}
        inputValue={inputValue}
        isSearchable={false}
        onMenuInputFocus={() => setIsFocused(true)}
        onChange={() => setIsFocused(false)}
        onInputChange={(val) => setInputValue(val)}
        {...{
          menuIsOpen: isFocused || undefined,
          isFocused: isFocused || undefined,
        }}
      />
    </div>
  );
};

export default CustomSelect;
