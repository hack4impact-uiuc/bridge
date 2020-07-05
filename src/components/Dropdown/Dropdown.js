/* eslint-disable no-unused-expressions */
import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, TYPOGRAPHY } from '../../utils/constants';
import { get } from '../../utils/utils';
import theme from '../../theme';
import DropdownMenu from './DropdownMenu';
import DropdownCaret from './DropdownCaret';
import DropdownItem from './DropdownItem';
import DropdownSummary from './DropdownSummary';


const Details = styled.details`
  ${get('typography.forms')}
  position: relative;
  display: inline-block;
  pointer: cursor;
  width: 100%;

  & > summary {
    list-style: none;
    border: ${(props) => props.propBorder.default};
    outline: none;
  }

  &[open] > summary {
    border: ${(props) => props.propBorder.focus};
  }

  & > summary::-webkit-details-marker {
    display: none;
  }

  ${COMMON}
  ${TYPOGRAPHY}
`;

const Dropdown = ({
  children,
  className,
  id,
  theme: propTheme,
  open: userOpen,
  error,
  onClickOutside,
  onToggle,
  defaultOpen = false, ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const ref = useRef(null);
  // only use internal open state if user doesn't provide a value for the open prop
  const open = typeof userOpen !== 'undefined' ? userOpen : internalOpen;

  const onClickOutsideInternal = useCallback(
    (event) => {
      if (event.target.closest('details') !== ref.current) {
        onClickOutside && onClickOutside(event);
        if (!event.defaultPrevented) {
          setInternalOpen(false);
        }
      }
    },
    [ref, onClickOutside, setInternalOpen],
  );

  useEffect(() => {
    document.addEventListener('click', onClickOutsideInternal);
    return () => {
      document.removeEventListener('click', onClickOutsideInternal);
    };
  }, [open, onClickOutsideInternal]);

  function handleToggle(e) {
    onToggle && onToggle(e);

    if (!e.defaultPrevented) {
      setInternalOpen(e.target.open);
    }
  }

  let border = propTheme.textField.default;
  switch (error) {
    case 'error':
      border = propTheme.textField.error;
      break;
    case 'warning':
      border = propTheme.textField.warning;
      break;
    case 'success':
      border = propTheme.textField.success;
      break;
    default:
  }
  return (
    <Details
      className={className}
      id={id}
      ref={ref}
      open={open}
      onToggle={handleToggle}
      propBorder={border}
      {...props}
    >
      {children}
    </Details>
  );
};


Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Summary = DropdownSummary;
Dropdown.Caret = DropdownCaret;


Dropdown.defaultProps = { theme };

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  error: PropTypes.oneOf(['default', 'error', 'warning', 'success']),
  id: PropTypes.string,
  onClickOutside: PropTypes.func,
  onToggle: PropTypes.func,
  open: PropTypes.bool,
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
};

export default Dropdown;
