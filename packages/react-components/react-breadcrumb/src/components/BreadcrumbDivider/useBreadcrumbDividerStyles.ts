import { makeStyles, mergeClasses } from '@griffel/react';
import type { BreadcrumbDividerSlots, BreadcrumbDividerState } from './BreadcrumbDivider.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const breadcrumbDividerClassNames: SlotClassNames<BreadcrumbDividerSlots> = {
  root: 'fui-BreadcrumbDivider',
  // TODO: add class names for all slots on BreadcrumbDividerSlots.
  // Should be of the form `<slotName>: 'fui-BreadcrumbDivider__<slotName>`
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the BreadcrumbDivider slots based on the state
 */
export const useBreadcrumbDividerStyles_unstable = (state: BreadcrumbDividerState): BreadcrumbDividerState => {
  const styles = useStyles();
  state.root.className = mergeClasses(breadcrumbDividerClassNames.root, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
