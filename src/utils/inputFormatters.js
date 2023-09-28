// Utility functions for formatting values.

// Clamps a value between min and max.
export const formatValue = (min, max, value) => Math.max(min, Math.min(max, value));

// Formats a value with a space every three digits.
export const formatToDisplay = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Converts a formatted string back to a number.
export const formatToStorage = (value) => {
  if (typeof value === 'string') {
    return Number(value.replace(/\s/g, ''));
  }
  return value;
};
