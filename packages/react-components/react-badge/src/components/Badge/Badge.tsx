import * as React from 'react';
import { useBadge_unstable } from './useBadge';
import { useBadgeStyles_unstable } from './useBadgeStyles';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';
import { renderBadge_unstable } from './renderBadge';
import type { BadgeProps } from './Badge.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * Define a styled Badge, using the `useBadge_unstable` hook.
 */
export const Badge: ForwardRefComponent<BadgeProps> = React.forwardRef((props, ref) => {
  const state = useBadge_unstable(props, ref);

  useBadgeStyles_unstable(state);

  const { useBadgeStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderBadge_unstable(state);
});

Badge.displayName = 'Badge';
